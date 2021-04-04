const express = require("express")
const app = express()
const path = require("path");
const layout = require('express-ejs-layouts')

const bodyParser = require("body-parser")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Layout and ejs
app.use(layout)
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routes EJS
app.use('/admin', require('./routes/admin'))





// Port
const PORT = 4000
app.listen(PORT, ()=> {
    console.log(`Server run ${PORT}`);
})