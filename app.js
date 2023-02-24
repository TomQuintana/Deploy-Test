import express from 'express'
import dotend from 'dotenv'

dotend.config()

const app = express()
const port = process.env.PORT 

// renderizo con hbs
app.set('view engine', 'hbs');

// Servir contenido estatico
app.use( express.static('public'))

app.get('/', function( req, res) {
  res.render('home')
})

//FIX: no anda __dirname
app.get('/generic', ( req, res) => {
  res.sendFile(_dirname + '/public/generic.html')
})

app.listen(port, () => {
  console.log(`Puerto: ${port}`)
})
