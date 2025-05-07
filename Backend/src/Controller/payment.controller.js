import {createPaymentLink,updatePaymentInfo} from "../Services/payment.service.js"

export const createPaymentLinks = async(req,res)=>{
    try{
        const paymentData = await createPaymentLink(req.params.id)
        return res.status(200).send({
            id: paymentData.paymentLinkId,
            payment_link_url: paymentData.payment_link_url,
            status: paymentData.status
        })
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const updatePaymentInformation = async(req,res)=>{
    try{
        const paymentServices = await updatePaymentInfo(req.query)
        return res.status(200).send({message:"Payment Information Updated",status:true})
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
