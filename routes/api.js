var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next){
    var nums = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'e'}];
    res.json(nums);
});

module.exports = router;

