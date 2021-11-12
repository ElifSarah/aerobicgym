const mongoose=require ('mongoose');
const Schema =mongoose.Schema;
var equipmentSchema = new Schema({ 
    name: { 
    type: String, 
    required: true, 

    }, 
    equipmenttype:{ 
    type: String, 
    required: true,  
    }, 
    description:{ 
    type: String, 
    required: true,  
    },
    weightcapacity:{ 
    type: String, 
    required: true,  
    },
    
}); 
module.exports = mongoose.model('Equipment', equipmentSchema); 