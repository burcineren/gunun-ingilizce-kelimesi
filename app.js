const dotenv = require('dotenv')
dotenv.config()
const  express  = require('express')
const app = express()
const routeManager = require('./route/route.manager.js')
const {connect} = require('./config/config.js')
const {createWordTable} = require('./model/word.model.js')

const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

routeManager(app)
connect();
createWordTable();




app.listen(process.env.PORT)