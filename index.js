
const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (pedido,res) => {
    res.render("index")
})
app.set('views','./views')
app.set('view engine','ejs')

app.listen(port) 