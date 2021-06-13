const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Task', userSchema, 'tasks');
