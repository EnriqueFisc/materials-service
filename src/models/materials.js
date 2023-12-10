const mongoose        = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

// CREATING USER SCHEMA
const materialsSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'Name is required' ],
    },
    materialId: {
        type: String,
        unique: true,
        required: [ true, 'MaterialId is required' ],
    },
    gramsPrice: {
        type: Number,
    }
});


// VALIDATION PLUGIN
materialsSchema.plugin(uniqueValidator, { message: '{PATH} already exists' });

module.exports = mongoose.model('materials', materialsSchema);