
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  name: {type: String, required: 'Product name'},
  description: {type: String, required: 'Description'},
  category: {type: String},
  price: {type: Number},
  created_date: {type: Date,default: Date.now}
});


/*
export const modelSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: String,
  price: Number,
  created_date: { type: Date, default: Date.now }

});


emodelSchema.add({
  name:  { type: String, required: true }, 
  description: { type: String, required: true },
  category:   String,
  price: Number,
  created_date: { type: Date, default: Date.now }
  
});

*/