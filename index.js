const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const convert = require('./lib/convert')

const port = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

//Home
app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/cotacao', (req, res) =>{
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


app.listen(port, (err) => {
    if(err) {
        console.log('Não foi possível iniciar o servidor')
    } else {
        console.log('Servidor rodando')
    }
})