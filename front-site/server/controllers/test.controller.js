///////////////////////////////////////////////////////////////////////////////
var Test = require('../models/test.js');

var addTest = function(req, res) {
    console.log('Запрос на добавление теста');
    console.log(req);
    console.log(req.body);
    if(!req.body.test.title || !req.body.test.description) {
        res.sendStatus(403).end();
    }
    const newTest = new Test(req.body.test);

    newTest.save(function(err, saved) {
        if(err) {
            res.sendStatus(500).send(err);
        }
        console.log('Saved');
        res.json({ test: saved });
    })
}

module.exports = addTest;
///////////////////////////////////////////////////////////////////////////////