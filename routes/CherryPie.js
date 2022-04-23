var express = require('express');
var router = express.Router();

var main_controller = require('../controllers/mainController');


router.get('/', function(req, res, next) {
        res.render('CherryPie',{
                title: 'RecipesFromGlasha',
                pname: 'CherryPie',
                navmenu: main_controller.navmenu } );
});

module.exports = router;