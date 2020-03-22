import mongoose, { Schema } from 'mongoose';

const userModel: Schema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  city: {
    type: String
  }
});

export const User = mongoose.model('user', userModel);
