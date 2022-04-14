var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', (request, response)=> { 
  const Page = require("../model/page.js");
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
    <h2>${title}</h2>${description}
    <img src="/images/img1.jpg" style="width:300px; display:block; margin-top:10px;">
    `,
    `<a href="/topic/create">create</a>`
  ); 
  const new_page = new Page({ 
		title :'Welcome',
   		description: 'Hello, Node.js',
	    list : list,
	    html : html,
  });
  response.send(new_page);
});
module.exports = router;