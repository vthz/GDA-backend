import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type:String, requred:true},
    price: {type:Number, required:true},
    discountPrice: {type:Number},
    quantity: {type:String, required:true},
    category:{
        type: mongoose.Schema.Types.ObjectId,
        requred: true,
    },
});

const Product = mongoose.model("Product", productSchema);
export default Product;