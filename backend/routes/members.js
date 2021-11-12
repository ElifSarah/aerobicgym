
const router=require('express').Router();
let Member=require('../models/member.model');

router.route('/').get((req,res)=>{
 Member.find()
 .then(members=> res.json(members))
 .catch(err=> res.Status(400).json('Error:',err));
});

router.route('/add').post((req,res)=>{
    const fullname=req.body.fullname;
    const age=Number(req.body.age);
    const gender=req.body.gender;
    const weight=req.body.weight;
    const email=req.body.email;
    const password=req.body.password;

    const newMember=new Member({
        fullname,
        age,
        gender,
        weight,
        email,
        password
    });
    newMember.save()
    .then(()=> res.json('Member added!'))
    .catch(err=> res.status(400).json('Error:'+err));
});
    router.route('/:id').get((req,res)=>{
        Member.findById(req.params.id)
        .then(member=> res.json(member))
    .catch(err=> res.status(400).json('Error:'+err));
    })

   router.route('/:id').delete((req,res)=>{
        Member.findByIdAndDelete(req.params.id)
        .then(()=> res.json('member deleted'))
    .catch(err=> res.status(400).json('Error:'+err));
    })

    router.route('/update/:id').post((req,res)=>{
        Member.findById(req.params.id)
        .then(member=> {
        member.fullname=req.body.fullname;
        member.Number(req.body.age);
        member.gender=req.body.gender;
        member.weight=req.body.weight;
        member.email=req.body.email;
        member.password=req.body.password;

            member.save()
            .then(()=> res.json('member updated'))
    .catch(err=> res.status(400).json('Error:'+err));
    })

    .catch(err=> res.status(400).json('Error:'+err));
})
module.exports=router;