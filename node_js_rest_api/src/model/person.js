import mongoose from 'mongoose';
import account from './account';

let schema = mongoose.Schema;
let persons  = new schema({
    name:String,
    age:Number,
    account:{
        type:schema.Types.ObjectId,
        ref:'account'
    }
})

module.exports = mongoose.model('person',persons)