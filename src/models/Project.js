const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Project', userSchema, 'projects');
