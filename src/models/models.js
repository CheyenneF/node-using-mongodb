
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const modelSchema = new Schema();


modelSchema.add({
  name:  String, 
  description: String,
  category:   String,
  price: Number,
  created_date: { type: Date, default: Date.now }
  
});