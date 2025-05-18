const dotenv = require('dotenv');
dotenv.config();

//HERE we are expoting all the env variables that the project uses
module.exports = {
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL

}