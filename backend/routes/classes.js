const router=require('express').Router();
let Class=require('../models/class.model');

router.route('/').get((req,res)=>{
 Class.find()
 .then(classs => res.json(classs))
 .catch(err=> res.Status(400).json('Error:',err));
});

router.route('/add').post((req,res) =>{
    const Classname=req.body.Classname;
    const newclass=new Class({Classname});
    newclass.save()
    .then(()=> res.json('class added!'))
    .catch(err=> res.status(400).json('Error:'+ err));

})
module.exports=router;