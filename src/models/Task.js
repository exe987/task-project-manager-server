const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
    description: String,
    done: Boolean,
    id_project: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Task', userSchema, 'tasks');
