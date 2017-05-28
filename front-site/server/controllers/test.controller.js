///////////////////////////////////////////////////////////////////////////////
var Test = require('../models/test.js');

var addTest = function(req, res) {
    console.log('Запрос на добавление теста');
    if(!req.body.test.title || !req.body.test.description) {
        res.sendStatus(403).end();
    }
    var data = req.body.test;

    var TestSave = new Test(data);
    TestSave.save(function(err) {
        if(err) {
            console.log(err);
            console.log('Ошибка сохранения');
        } else {
            console.log('Сохранено');
            res.status(201).json({
                message: "Thanks! Your request was submitted successfuly!",
                statusSend: true
            });
        }
    });
}

module.exports = addTest;
///////////////////////////////////////////////////////////////////////////////