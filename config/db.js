import "dotenv/config";
import { Sequelize } from "sequelize";


const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

sequelize
.authenticate()
.then(()=> {
    console.log ("Connexion OK ✅.");
})
.catch((error ) => {
console.error ("Connexion KO 🔴 : ", error)
});

export default sequelize;