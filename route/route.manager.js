const helloRoute = require('./hello.route.js');
const wordRoute = require('./word.route.js');

const routeManager = (app) =>{
    app.use('/hello', helloRoute);
    app.use('/word', wordRoute);

}
module.exports  = routeManager;