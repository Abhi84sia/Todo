const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://abhishek84sia1726:Abhi84sia@cluster0.e5xxrib.mongodb.net/?retryWrites=true&w=majority';

function connect() {
  return mongoose.connect(dbURI);
}

module.exports = connect