const mongoose = require('mongoose');

// 스키마를 만들었습니다.
const pageSchema = new mongoose.Schema({
  title: {
    type: String,
	required:true,
  },
  description: {
    type: String,
    required: true,
  },
});


