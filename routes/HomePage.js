var express = require('express');
var router = express.Router();

var main_controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('HomePage', {
    title: 'RecipesFromGlasha',
    navmenu: main_controller.navmenu } );
});

module.exports = router;
