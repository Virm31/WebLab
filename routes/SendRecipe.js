var express = require('express');
var router = express.Router();

var main_controller = require('../controllers/mainController');


router.get('/', function(req, res, next) {
    res.render('SendRecipe', {
        title: 'RecipesFromGlasha',
        pname: 'SendRecipe',
        navmenu: main_controller.navmenu } );
});

router.post("/ajaxrequest", function (req, res) {
    console.log(req.body);  // выводим в консоль полученные данные
    if(!req.body) return response.sendStatus(400);
    // Читаем поле firstname из полученного json
    try {
        var msg = req.body.firstname + ", ваш запрос получен !";
    } catch(err) {
        console.error(err)
    }

    res.json({ message: msg }); // отправляем ответ
});

module.exports = router;