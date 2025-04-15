const Category = require("../Model/category.model.js")
const Product = require("../Model/product.model.js")
async function createProduct(reqData){
    let topLevel = await Category.findOne({name:reqData.topLevelCategory})

    if(!topLevel){
        topLevel = await Category.create({
            name:reqData.topLevelCategory,
            level:1
        })
    }

    let secondLevel = await Category.findOne({name:reqData.secondLevelCategory,parentCategory:topLevel._id})

    if(!secondLevel){
        secondLevel = await Category.create({
            name:reqData.secondLevelCategory,
            parentCategory:topLevel._id,
            level:2
        })
    }

    let thirdLevel = await Category.findOne({name:reqData.thirdLevelCategory,parentCategory:secondLevel._id})

    if(!thirdLevel){
        thirdLevel = await Category.create({
            name:reqData.thirdLevelCategory,
            parentCategory:secondLevel._id,
            level:3
        })
    }

    const product = await Product.create({
        title:reqData.title,
        color:reqData.color,
        discountPercent:reqData.discountPercent,
        price:reqData.price,
        discountedPrice:reqData.discountedPrice,
        category:thirdLevel._id,
        description:reqData.description,
        imageUrl:reqData.image,
        brand:reqData.brand,
        sizes:reqData.size,
        quantity:reqData.quantity,
        category:thirdLevel._id
    })
    return await product.save()
}

async function deleteProduct(productId){
    const product = await findProductById(productId)
    
    await Product.findByIdAndDelete(productId)

    return "Product Deleted Successfully"
}

async function updateProduct(productId,reqData){
    return await Product.findByIdAndUpdate(productId,reqData)
}

async function findProductById(productId){
    const product = await Product.findById(productId).populate("category").exec()

    if(!product){
        throw new Error("Product not found")
    }
    return product
}

async function getAllProducts(reqQuery){
    let {category,color,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize} = reqQuery

    pageSize = pageSize || 10;
    pageNumber = pageNumber || 1;

    let query = Product.find().populate("category")

    if(category){
        const categoryData = await Category.findOne({name:category})

        if(categoryData){
            query= query.where("category").equals(categoryData._id)
        }else{
            return {content:[],currentPage:1,totalPages:0}
        }
    }

    if(color){
        const colorSet = new Set(color.split(",").map(color=>color.trim().tolowerCase()))

        const colorRegex = colorSet.size>0?new RegExp([...colorSet].join("|"),"i"):null;

        query = query.where("color").regex(colorRegex)
    }

    if(sizes){
        const sizesSet = new Set(sizes);
        query= query.where("sizes").in([...sizesSet])
    }

    if(minPrice && maxPrice){
        query = query.where("discountedPrice").gte(minPrice).lte(maxPrice)
    }

    if(minDiscount){
        query = query.where("discountedPercent").gte(minDiscount)
    }

    if(stock){
        if(stock==="in_stock"){
        query = query.where("quantity").gte(0)
        }

        else if(stock==="out_of_stock"){
            query = query.where("quantity").lte(1)
        }
    }

    if(sort){
        const sortDirection=sort==="price_high"?-1:1;
        query = query.sort({discountedPrice:sortDirection})
    }

    const totalCount = await Product.countDocuments(query)

    const skip = (pageNumber-1)*pageSize;

    query = query.skip(skip).limit(pageSize)

    const products = await query.exec()

    const totalPages = Math.ceil(totalCount/pageSize)

    return {content:products,currentPage:pageNumber,totalPages:totalPages}

}

async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product)
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProduct
}