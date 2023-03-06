import {Router} from 'express'

const router = Router()

router.get('/', (req,res)=>{

})

router.get('/:id',(req,res)=>{
    const {id} = req.params
})

router.post('/',(req, res) =>{
    const obj = req.body
})

router.put('/:id',(req,res)=>{
    const {id} = req.params
    const obj = req.body
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params
})

export default router