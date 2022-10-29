import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
const app = express()

// console.log(process.env.PORT);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT)