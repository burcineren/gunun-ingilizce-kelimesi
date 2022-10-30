const hello =  (req, res) =>{
    res.send('Hello World from routes');
}
const temp =  (req, res) =>{
    console.log(req.query);
    // console.log(req);
    // console.log(res);
    res.send('temp World from routes');
}
module.exports = {
    hello,
    temp
};