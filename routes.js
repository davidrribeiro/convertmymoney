const express = require('express')
const router = express.Router()

const convert = require('./lib/convert')

//Home
router.get('/', (req, res) =>{
    res.render('home')
})

router.get('/cotacao', (req, res) =>{
    const { cotacao, quantidade } = req.query
    if(cotacao && quantidade){
        const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', { 
            error: false,
            conversao: convert.toMoney(conversao),
            quantidade: convert.toMoney(quantidade),
            cotacao: convert.toMoney(cotacao)
    
        
        })
    }else{
        res.render('cotacao', {
            error: 'Valores inválidos'
        })
    }
    
})

module.exports = router;