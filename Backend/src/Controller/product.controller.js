const productService = require("../Services/product.service.js")

const createProduct = async(req,res)=>{
    try{
        const product = await productService.createProduct(req.body)
        return res.status(201).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const deleteProduct = async(req,res)=>{
    try{
        const product = await productService.deleteProduct(req.params.productId)
        return res.status(200).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const updateProduct = async(req,res)=>{
    try{
        const product = await productService.updateProduct(req.params.productId,req.body)
        return res.status(200).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})

    }
}

const findProductById = async(req,res)=>{
    try{
        const product = await productService.findProductById(req.params.productId)
        return res.status(200).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const getAllProducts = async(req,res)=>{
    try{
        const products = await productService.getAllProducts(req.query)
        return res.status(200).send(products)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const createMultipleProduct = async(req,res)=>{
    try{
        const products = await productService.createMultipleProduct(req.body)
        return res.status(201).send({message:"Products Created Successfully",products})
    }catch(error){
        return res.status(500).send({error:error.message})
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