import { Sequelize } from "sequelize";

export const DB_USERNAME = 'root'
export const DB_PASSWORD = '1234'
const dbProduse = new Sequelize(
{
    dialect: 'mysql',
    database: 'Produse',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    logging: false,              //pentru autologare
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

export default dbProduse;
