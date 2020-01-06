const express = require('express')
const app = express()
const path = require('path')
const routes = require('./routes');

const port = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes);

init()
app.listen(port, (err) => {
    if(err) {
        console.log('Não foi possível iniciar o servidor')
    } else {
        console.log('Servidor rodando')
    }
})