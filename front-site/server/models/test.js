import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const testSchema = new Schema({
    Date: {type: Date, default: Date.now},
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    level: {type: String, required: false},
    visible: {tyle: Boolean, default: false},
    questions: [
        {
            questionTitle: String,
            questionDescription: String,
            answers: Array
        }
    ]
});

export default testSchema;