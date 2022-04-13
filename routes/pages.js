import mongoose from "mongoose";

// 스키마를 만들었습니다.
const pageSchema = new mongoose.Schema({
  title: {
    type: String,
	required:true;
  },
  description: {
    type: String,
    required: true,
  },
});

// 스키마를 모델로 감싸줍니다
// model 메서드의 첫 인자는 스키마의 이름(마음대로) 두번째는 스키마
// 세번째 메서드를 줘서 DB에 실제로 보여지는 컬렉션 이름을 정의할 수 있습니다.
// 할당하지 않으면 스키마의 이름의 복수형(여기선 chats)가 컬렉션 이름이 됩니다.
const model = mongoose.model("Page", chatSchema);

export default model;