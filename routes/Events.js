const router = require('express').Router();
let event = require('../models/Events');

// get event details
router.route('/').get((req , res) => {
    event.find()
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error:' + err));
});


module.exports = router;