const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const pageSchema = new Schema({
  title: { type: String },
  description: {type : String},
});

module.exports = mongoose.model('Pages', pageSchema);