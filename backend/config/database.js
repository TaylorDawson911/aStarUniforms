import { Sequelize } from "sequelize";
 
const db = new Sequelize('astaruniforms', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;