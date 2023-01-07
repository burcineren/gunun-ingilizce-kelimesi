const {sequelize} = require('../config/config.js');
const Word = require('../model/word.model.js').Word;

const getAllWords = (req, res) =>{
    Word.findAll().then((words)=>{
        res.send(words)
    }).catch((error)=>{
        console.error('Unable to get all words: ',error);
});
    
}

const createWord = (req, res) => {

    sequelize.sync().then(() => { //veritabanı tablosunu modele göre eşitleme işlemi yapıyor.
        console.log('book table created / updated successfully');

        Word.create({// güncelleme işlemi olduktan sonra göndericeğimiz alanlara göre işlem yapacak 
            word: req.body.word,
            mean: req.body.mean,
            category: req.body.category
        }).then(resp => {
            console.log(resp)
            res.send({
                "status": "success",
                data:resp
            })

        }).catch((error) => {
            console.error('Failed to create a new record',error);

        });
    }).catch((error) => {
        console.error('Unable to create table',error);
    })
}
module.exports = {
    getAllWords,
    createWord
};

