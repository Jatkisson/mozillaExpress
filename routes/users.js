var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:Title', function(req, res, next) {
  try {res.render('index', { title: req.params.Title });} 
  catch (error) {
    console.log(error);
    res.render('index', { title: 'None Received'});
  }
});

module.exports = router;
