import {Router} from 'express'
import { productsModel } from '../db/models/products.model.js'

const router = Router()

router.get('/',async(req, res)=>{
    const products = await productsModel.find({})
    if(products.length !== 0){
        res.json({products})
    }else{
        res.send('no hay productos')
    }
})

router.get('/:id',(req, res)=>{
    const {id} = req.params
})

router.post('/',(req, res)=>{
    const objProduct = req.body
})

router.put('/:id',(req, res)=>{
    const {id} = req.params
    const objProduct = req.body
})

router.delete('/:id',(req, res)=>{
    const {id} = req.params
})


export default router 