let express = require('express');
let router = express.Router();

// GET homepage
router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

module.exports = router;