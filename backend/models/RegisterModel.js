import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const Register = db.define('users', {
    email: {
      type: Sequelize.STRING
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
}, {
    timestamps: false
});
  
 
export default Register;