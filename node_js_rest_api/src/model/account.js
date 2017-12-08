import mongoose from 'mongoose';
import person from './person'
const Schema = mongoose.Schema;

let Account = new Schema({
  email: String,
  password: String,
  persons:[{
    type:Schema.Types.ObjectId,
    ref:'person'
  }]
});

module.exports = mongoose.model('account', Account);
