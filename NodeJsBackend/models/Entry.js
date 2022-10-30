const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    order: Number
});

module.exports = mongoose.model('Entries', EntrySchema);