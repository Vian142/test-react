///////////////////////////////////////////////////////////////////////////////
var mongoose = require('mongoose');
var config = require('../config');

///////////////////////////////////////////////////////////////////////////////
var testSchema = mongoose.model(config.db.tests, {
    Date: { type: Date, default: Date.now },
    title: { type: String, required: false },
    description: { type: String, required: false },
    category: { type: String, required: false },
    level: { type: String, required: false },
    visible: { tyle: Boolean, default: false },
    questions: [
        {
            questionTitle: String,
            questionDescription: String,
            answers: Array
        }
    ]
}, config.db.tests);

///////////////////////////////////////////////////////////////////////////////
module.exports = testSchema;

///////////////////////////////////////////////////////////////////////////////