const { Router } = require("express");
 
const router = Router();

router.get("/", (req, res, next) => {
  if (req.query.write) {
    res.render("../lib/template.js"); //req.query.write값이 있다면 posts/edit 템플릿으로 이동
    return;
  }
});

module.exports = router;