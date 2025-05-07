import Product from "../Model/product.model.js"
import {createProduct,deleteProduct,updateProduct,findProductById,getAllProducts,createMultipleProduct} from "../Services/product.service.js"

export const createProducts = async(req,res)=>{
    try{
        const product = await createProduct(req.body)
        return res.status(201).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const deleteProducts = async(req,res)=>{
    try{
        const product = await deleteProduct(req.params.productId)
        return res.status(200).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const updateProducts = async(req,res)=>{
    try{
        const product = await updateProduct(req.params.productId,req.body)
        return res.status(200).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})

    }
}

export const findProductsById = async(req,res)=>{
    try{
        const product = await findProductById(req.params.productId)
        return res.status(200).send(product)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const getAllProduct = async(req,res)=>{
    try{
        const products = await getAllProducts(req.query)
        return res.status(200).send(products)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const createMultipleProducts = async(req,res)=>{
    try{
        const products = await createMultipleProduct(req.body)
        return res.status(201).send({message:"Products Created Successfully",products})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const getProductBySection = async(req,res)=>{
    try{const sections = [
        {
            id: 1,
            name: "Men's Kurta",
            product: await Product.find({ category: 'mens_kurta' }).limit(10)
          },
          {
            id: 2,
            name: "Men's Shoes",
            products: await Product.find({ category: 'mens_shoes' }).limit(10)
          },
          // Add more sections as needed
        
    ]

    res.status(200).send(sections)
}catch(error){
    return res.status(500).send({error:error.message})
}
}
