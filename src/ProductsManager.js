import { productsModel } from "./db/models/products.models.js"

export default class ProductsManager{
    async getProducts(){
        try {
            const products = productsModel.find({})
            return products
        } catch (error) {
            console.log(error)
        }
    }

    async getProductById(){
        try {
            const product = await productsModel.findById(id)
            return product
        } catch (error) {
            console.log(error)
        }
    }

    async createProduct(obj){
        try {
            const newProduct = await productsModel.create(obj)
            return newProduct
        } catch (error) {
            console.log(error)
        }

    }

    async deleteById(){
        try {
            const deleteProduct = await productsModel.findByIdAndDelete(id)
            return deleteProduct
        } catch (error) {
            console.log(error)
        }
    }
}