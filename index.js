require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})




//WildCard 
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
console.log('Listening at port 5000')