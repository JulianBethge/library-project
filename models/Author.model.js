const { Schema, model } = require('mongoose');

const authorSchema = new Schema(
    {
        name: Object,
        age: Number,
        country: String
    },
    {
        timestamps: true
    }
);

module.exports = model('Author', authorSchema);