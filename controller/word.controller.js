const db = require('../models');
const Word = db.word;


const getAllWords = (req, res) => {
    Word.findAll().then((words) => {
        res.send(words)
    }).catch((error) => {
        console.error('Unable to get all words : ', error);
    });
}

const getWord = (req, res) => {
    Word.findOne({ where: {id: req.params.id}})
    .then((words) => {
        res.send(words)
    }).catch((error) => {
        console.error('Unable to get words : ', error);
    });
}


const createWord = (req, res) => {

    Word.create({
        word    : req.body.word,
        mean    : req.body.mean,
        category: req.body.category
    }).then(resp => {
        res.send({
            "status": "success",
            data    : resp
        })
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}

module.exports = {
    getAllWords,
    createWord,
    getWord,
}




