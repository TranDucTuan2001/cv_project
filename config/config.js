const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://csdl:1GOd0eI42RWUEHIB@data.scdy9cu.mongodb.net/test');
    console.log('Database connected!!');
  } catch (error) {
    console.log('Database not connected!!');
  }
}

module.exports = { connect };