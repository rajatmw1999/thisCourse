const express = require('express');
const router = express.Router();
const Skill = require('../models/skills');

router.get("/", (req, res, next) => {
  Skill.collection.drop( (err) => {
            if (err) {
                res.json({message: err});
            } else {
                res.json({message: 'Dropped Collection Successfully'});
            }
        });
    
});

module.exports = router;