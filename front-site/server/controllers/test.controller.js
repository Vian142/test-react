///////////////////////////////////////////////////////////////////////////////
import Test from '../models/test.js';

export const addTest = (req, res) => {
    console.log('Запрос на добавление теста');
    if(!req.body.test.title || !req.body.test.description) {
        res.sendStatus(403).end();
    }
    var data = req.body.test;

    var TestSave = new Test(data);
    TestSave.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Сохранено');
            res.status(201).json({
                message: "Сохранено msg!",
                statusSend: true
            });
        }
    });
}


export const getTests = (req, res) => {
    Test.find().exec((err, tests) => {
        if(err) {
            console.log('Ошибка get - Всех тестов');
            res.status(500).send(err);
        }
        return res.json(tests);
    })
}

///////////////////////////////////////////////////////////////////////////////