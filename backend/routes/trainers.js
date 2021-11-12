const router=require('express').Router();
let Trainer=require('../models/trainer.model');

router.route('/').get((req,res)=>{
 Trainer.find()
 .then(trainers=> res.json(trainers))
 .catch(err=> res.Status(400).json('Error:',err));
});

router.route('/add').post((req,res)=>{
    const trainername=req.body.trainername;
    const age=Number(req.body.age);
    const gender=req.body.gender;
    const height=req.body.height;
    const weight=req.body.weight;
    const expertisedetails=req.body.expertisedetails;
    const email=req.body.email;
    const password=req.body.password;


    const newTrainer=new Trainer({
        trainername,
        age,
        gender,
        height,
        weight,
        expertisedetails,
        email,
        password
    });
    newTrainer.save()
    .then(()=> res.json('Trainer added!'))
    .catch(err=> res.status(400).json('Error:'+err));
});
    router.route('/:id').get((req,res)=>{
        Trainer.findById(req.params.id)
        .then(trainer=> res.json(trainer))
    .catch(err=> res.status(400).json('Error:'+err));
    })

   router.route('/:id').delete((req,res)=>{
        Trainer.findByIdAndDelete(req.params.id)
        .then(()=> res.json('trainer deleted'))
    .catch(err=> res.status(400).json('Error:'+err));
    })

    router.route('/update/:id').post((req,res)=>{
        Trainer.findById(req.params.id)
        .then(trainer=> {
    trainer.trainername=req.body.trainername;
    trainer.age=Number(req.body.age);
    trainer.gender=req.body.gender;
    trainer.height=req.body.height;
    trainer.weight=req.body.weight;
    trainer.expertisedetails=req.body.expertisedetails;
    trainer.email=req.body.email;
    trainer.password=req.body.password;

            trainer.save()
            .then(()=> res.json('trainer updated'))
    .catch(err=> res.status(400).json('Error:'+err));
    })

    .catch(err=> res.status(400).json('Error:'+err));
})
module.exports=router;