const mongoose=require ('mongoose');

const Schema =mongoose.Schema;

const trainerSchema = new Schema({ 
        trainername: { 
        type: String, 
        required: true, 
        }, 
        age: { 
        type: Number, 
        required: true, 
        }, 
        gender: { 
        type: String, 
        required: true, 
        }, 
        height: { 
        type: String, 
        required: true, 
        }, 
        weight: { 
        type: String, 
        required: true, 
        },
        expertisedetails:{ 
        type: String, 
        required: true, 
        }, 
        email:{ 
        type: String, 
        required: true, 
        },
        password: { 
        type: String, 
        required: true, 
        }
 
});

module.exports = mongoose.model('Trainer', trainerSchema); 
