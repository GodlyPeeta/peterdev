let express = require('express');
let router = express.Router();

// GET homepage
router.get('/', function (req, res) {
    res.sendFile(__dirname + '/playground.html');
});

module.exports = router;