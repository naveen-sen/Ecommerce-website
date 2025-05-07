import Category from '../Model/category.model.js'
import Product from '../Model/product.model.js'
export async function createProduct(reqData){
    let topLevel = await Category.findOne({name:reqData.topLevelCategory})

    if(!topLevel){
        topLevel = await Category.create({
            name:reqData.topLevelCategory,
            level:1
        })

        await topLevel.save()
    }

    let secondLevel = await Category.findOne({name:reqData.secondLevelCategory,parentCategory:topLevel._id})

    if(!secondLevel){
        secondLevel = await Category.create({
            name:reqData.secondLevelCategory,
            parentCategory:topLevel._id,
            level:2
        })

        await secondLevel.save()
    }

    let thirdLevel = await Category.findOne({name:reqData.thirdLevelCategory,parentCategory:secondLevel._id})

    if(!thirdLevel){
        thirdLevel = await Category.create({
            name:reqData.thirdLevelCategory,
            parentCategory:secondLevel._id,
            level:3
        })

        await thirdLevel.save()
    }

    const product = await Product.create({
        title:reqData.title,
        color:reqData.color,
        discountPercent:Number(reqData.discountPercent),
        price:reqData.price,
        discountedPrice:Number(reqData.discountedPrice),
        category:thirdLevel._id,
        description:reqData.description,
        imageUrl:reqData.imageUrl,
        brand:reqData.brand,
        sizes:reqData.size,
        quantity:reqData.quantity,
    })
    return await product.save()
}

export async function deleteProduct(productId){
    const product = await findProductById(productId)
    
    await Product.findByIdAndDelete(productId)

    return "Product Deleted Successfully"
}

export async function updateProduct(productId,reqData){
    return await Product.findByIdAndUpdate(productId,reqData)
}

export async function findProductById(productId){
    const product = await Product.findById(productId).populate({
        path: "category",
        populate: {
            path: "parentCategory",
            populate: {
                path: "parentCategory"
            }
        }
    })

    if(!product){
        throw new Error("Product not found")
    }
    return product
}

export async function getAllProducts(reqQuery){
    let {category,color,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize} = reqQuery

    pageSize = pageSize || 10;
    pageNumber = pageNumber || 1;

    if(pageNumber<1){
        pageNumber=1;
    }

    const skip = (pageNumber-1)*pageSize;

    let filter = {}

    if(category && category !== "undefined" && category !== ""){
        const categoryData = await Category.findOne({name:category})
        if(categoryData){

            const categoryIds = [categoryData._id]

            const findDescendants = async (parentId) => {
                const children = await Category.find({parentCategory: parentId})
                for(const child of children){
                    categoryIds.push(child._id)
                    await findDescendants(child._id)
                }
            }

            await findDescendants(categoryData._id)

            filter.category = { $in: categoryIds }

            const count = await Product.countDocuments({category: {$in: categoryIds}});
        }else{
            return {content:[],currentPage:1,totalPages:0}
        }
    }

    if(color){
        const colorSet = new Set(color.split(",").map(color=>color.trim().toLowerCase()))

        const colorRegex = colorSet.size>0?new RegExp([...colorSet].join("|"),"i"):null;

        filter.color = colorRegex
    }

    if(sizes && sizes !== "undefined" && sizes !== ""){
        const sizesSet = new Set(sizes);
        filter["sizes.name"] = { $in: [...sizesSet] }
    }

    if(minPrice && maxPrice){
        const minPriceNum = Number(minPrice);
        const maxPriceNum = Number(maxPrice);
        filter.discountedPrice = { $gte: minPriceNum, $lte: maxPriceNum }
    }

    if(minDiscount){
        const minDiscountNum = Number(minDiscount);
        filter.discountPercent = { $gte: minDiscountNum }
    }

    if(stock && stock !== "null"){
        if(stock==="in_stock"){
            filter.quantity = { $gt: 0 }
        }
        else if(stock==="out_of_stock"){
            filter.quantity = { $lte: 0 }
        }
    }

    let query = Product.find(filter).populate("category")

    if(sort){
        const sortDirection=sort==="price_high"?-1:1;
        query = query.sort({discountedPrice:sortDirection})
    }

    const totalCount = await Product.countDocuments(filter)

    query = query.skip(skip).limit(pageSize)

    const products = await query.exec()

    const totalPages = Math.ceil(totalCount/pageSize)

    return {content:products,currentPage:pageNumber,totalPages:totalPages}

}

export async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product)
    }
}

