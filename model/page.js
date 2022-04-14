const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema({
  title: String,
  description: String,
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;