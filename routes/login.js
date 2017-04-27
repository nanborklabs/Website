/**
 * Created by nandhu on 27/4/17.
 */


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

module.exports = router;
