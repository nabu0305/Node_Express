const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    
    // 주소, 옵션, 오류를 받습니다
    mongoose.connect(
      {
        // 해당 DB를 생성(사용) 합니다.
        dbName: "nodejs",
      },
      (error) => {
        if (error) {
          console.log("mongoDB connection Error!", error);
        } else {
          console.log("mongodb connection success!");
        }
      }
    );
  };
	  
connect();
	
mongoose.connection.on("error", (error) => {
    console.log("mongodb connection Error!", error);
  });

  // 연결이 끊겼을시 콜백 함수를 통해 자동으로 재접속 합니다.
  mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected!. Try connect again");
    connect();
  });

  // 작성한 스키마들을 import합니다.
  require("./Schema/pages.js");
};