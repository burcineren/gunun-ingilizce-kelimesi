const {sequelize} = require('../config/config.js');
const Word = require('../model/word.model.js');

const getAllWords = (req, res) =>{
    Word.findAll().then((words)=>{
        res.send(words)
    }).catch((error)=>{
        console.error('Unable to get all words: ',error);
});
    
}
module.exports = {
    getAllWords,
};