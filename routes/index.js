var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', (request, response)=> { 
  const Page = require("../model/page.js");
  const new_page = new Page({ 
		title :'Welcome',
   		description: 'Hello, Node.js',
  });
  var list = template.list(request.list);
  var html = template.HTML(new_page.title, list,
    `
    <h2>${new_page.title}</h2>${new_page.description}
    <img src="/images/img1.jpg" style="width:300px; display:block; margin-top:10px;">
    `,
    `<a href="/topic/create">create</a>`
  ); 
  response.send(html);
});
module.exports = router;