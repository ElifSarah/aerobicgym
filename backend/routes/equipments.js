
const router=require('express').Router();
let Equipment=require('../models/equipment.model');

router.route('/').get((req,res)=>{
 Equipment.find()
 .then(equipments=> res.json(equipments))
 .catch(err=> res.Status(400).json('Error:',err));
});

router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const equipmenttype=req.body.equipmenttype;
    const description=req.body.description;
    const weightcapacity=req.body.weightcapacity;
   
    const newEquipment=new Equipment({
        name,
        equipmenttype,
        description,
        weightcapacity
    });
    newEquipment.save()
    .then(()=> res.json('Equipment added!'))
    .catch(err=> res.status(400).json('Error:'+err));
});
    router.route('/:id').get((req,res)=>{
        Equipment.findById(req.params.id)
        .then(equipment=> res.json(equipment))
    .catch(err=> res.status(400).json('Error:'+err));
    })

   router.route('/:id').delete((req,res)=>{
        Equipment.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Equipment deleted'))
    .catch(err=> res.status(400).json('Error:'+err));
    })

    router.route('/update/:id').post((req,res)=>{
        Equipment.findById(req.params.id)
        .then(equipment=> {
            equipment.name=req.body.name;
            equipment.equipmenttype=req.body.equipmentType;
            equipment.description=req.body.description;
            equipment.weightcapacity=req.body.weight;

            equipment.save()
            .then(()=> res.json('equipment updated'))
    .catch(err=> res.status(400).json('Error:'+err));
    })

    .catch(err=> res.status(400).json('Error:'+err));
})
module.exports=router;