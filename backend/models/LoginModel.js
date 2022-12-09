import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Login = db.define('users', {
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

export default Login;
