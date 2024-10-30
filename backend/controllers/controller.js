import product from "../models/product.js";
//for adding products
export const createProduct = async(req,res)=>{
    const prod = req.body //data that users provided
    if(!prod.name || !prod.price || !prod.image){
        res.status(404).json({
            success:false,
            message:"please provide all informations"
        })
    }
    const Products =  new product(prod)
     try{
        await Products.save();
        res.status(200).json({success:true,data:Products})
        console.log("product successfully added to the database")
     }
     catch(error){
        res.status(404).json({success:false})
        console.log(error.message)
     }

}
//for getting all products
export const getProducts = async (req,res) => {
    try{
        const products = await product.find({});
        res.status(200).json({
            success:true,
            data:products
        })
    }
    catch(error){
        console.log(error.message)
        res.status(404).json({
            success:false,
            message:"items not found"
        })
    }
}
// for updating a product
export const updateProduct = async (req,res) => {
    const {id} = req.params
    const prod = req.body
     
    try {
const updated = await product.findByIdAndUpdate(id,prod,{new:true})
res.status(200).json({
    success:true,
    updated:updated
})
        
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            success:false,
            message:"product not updated"
        })
    }
}
//for deleting a product
export const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    try{
        await product.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"product deleted successfully"
        })

    }
    catch(error){
        console.log(error.message)
        res.status(404).json({
            success:false,
            message:"id not found"
        })
    }
}