const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo', {
});

const connection = mongoose.connection
connection.on('error', console.error)
connection.once('open', () => {
  console.log('Connected to mongod server');
});

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

module.exports = mongoose.model('Boards', new Schema({
  title: { type: String },
  description: {type : String},
}, {
  versionKey: false
}))