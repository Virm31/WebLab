var express = require('express');
var router = express.Router();

var { navmenu, sessionCheck } = require('../controllers/mainController');


router.get('/', sessionCheck, function(req, res) {
    res.render('contact', {
        title: 'Golden',
        pname: 'CONTACT',
        navmenu: navmenu });
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