const mongoose = require('mongoose')
const connect = require('./db')

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
  });

  const Todo = mongoose.model('Todo', todoSchema);

async function start(){
  try{
    await connect();
  console.log('Database is Connected')// only give response when db is connected
  } catch(error){
    console.log('Unable to Connect Database')
  }
}

start()

module.exports = Todo;



