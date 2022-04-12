var express = require('express');
var router = express.Router();

/* post home page. */
router.post('/country', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

// module.exports = router;