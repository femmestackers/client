const mongoose = require('mongoose');
const { Schema } = mongoose;

const smoothieSchema = new Schema({
	name: String,
    category: String,
    fyi: String,
    instructions: String,
    ingredients: String

});

mongoose.model('quotes', smoothiesSchema);

const bodyParser = require('body-parser');
require('./Smoothie');

const Smoothie = mongoose.model('smoothies');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());