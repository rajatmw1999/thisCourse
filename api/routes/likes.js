const express = require('express');
const router = express.Router();
const Skill = require('../models/skills');

router.get("/",async(req,res,next) => {
    let nameSkill = "network%20security";
    let NameofCourse = "\"Fundamentals of Computer Network Security\"";
    const filter = {"nameSkill":nameSkill,"Courses.NameofCourse":NameofCourse};
    // const update = {"Courses[0].likes":1};
    // const update = {"category":"INDIA"};
    await Skill.findOneAndUpdate(filter,update,{upsert:true},(err,doc) =>{
        if(err){
            res.json({message:err});
        }else{
            res.json({message:'successfully Updated'});
        }
    });
});

module.exports = router;