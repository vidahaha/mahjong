var express = require('express');
var router = express.Router();

var query = require('mysql/lib/mysql_pool.js');

query("select * from user where username = 'vida'", function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
 // res.send(req);
 console.log(req.body)
});


module.exports = router;
