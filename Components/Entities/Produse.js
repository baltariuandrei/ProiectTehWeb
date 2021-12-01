import { Sequelize } from "sequelize";
import db from '../dbConfig.js';

const Produse = db.define( "Produse", 
    {
        idProdus: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        codProdus: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        numeProdus: {
            type: Sequelize.STRING,
            allowNull: false
        },

        categorieProdus: {
            type: Sequelize.STRING,
            allowNull: false
        },

        zileExpirare: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    }
);

export default Produse;