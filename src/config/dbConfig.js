const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

/**
 * the below function is helps us to connect to a mongo server
 */
async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("sucessfully connected to the mongodb server")
    } catch (error) {
        console.log("Not able to connect mongodb server");
        console.log(error);
    }
  }
  module.exports = connectDB;
