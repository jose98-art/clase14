import mongoose from "mongoose";

const prodcutsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    precio:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    }
})

export const productsModel = mongoose.model('Products',prodcutsSchema)