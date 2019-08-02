const mongoose = require("mongoose");

const Todos = mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    company: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Todos", Todos);
