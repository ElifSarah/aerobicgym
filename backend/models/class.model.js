const mongoose=require ('mongoose');
const Schema =mongoose.Schema;

const classSchema = new Schema({ 
        Classname: { 
        type: String, 
        required: true, 
        }, 
        trainer: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Trainer'
        }, 
        member: { 
        type: [{ 
        sid: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Member'
        } 
        }] 
        } 
 
}); 
module.exports = mongoose.model('Class', classSchema); 
