const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:YH5KM2DgtgD8q0Hd@cluster0.qjeoqfv.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports = {
    todo
}