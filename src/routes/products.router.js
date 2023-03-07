import {Router} from 'express'
import ProductsManager from '../ProductsManager.js'

const router = Router()

const productsmanager =  new ProductsManager()

router.get('/', async(req,res)=>{
    const products = await productsmanager.getProducts()
    if(products.length !== 0){
        res.json({products})
    }else{
        res.send('no hay productos en la base de datoss')
    }
})

router.get('/:id',async(req,res)=>{
    const {id} = req.params
    const products = await productsmanager.getProductById(id)
    if(products){
        res.json({products})
    }else{
        res.send('producto no existe en la base de datos')
    }
})

router.post('/', async(req, res) =>{
    const obj = req.body
    const newProduct = await productsmanager.createProduct(obj)
    res.json({message: 'Producto creado con exito', product:newProduct})
})

router.put('/:id',(req,res)=>{
    const {id} = req.params
    const obj = req.body
})

router.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const deleteProducts = await productsmanager.deleteById(id)
    res.json({message: 'Producto eliminado con exito', product: deleteProducts})
})

export default router