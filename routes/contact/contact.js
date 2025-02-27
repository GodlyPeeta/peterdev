let express = require('express');
let router = express.Router();

// GET homepage
router.get('/', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

module.exports = router;