let express = require('express');
let router = express.Router();

let main_controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('HomePage', {
    title: 'RecipesFromGlasha',
    pname: 'HomePage',
    navmenu: main_controller.navmenu } );
});

module.exports = router;
