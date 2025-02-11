import Sequelize from "sequelize";
import db from "../config/db.js";

export const testimonio = db.define("testimonio", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Asegura que el `id` sea autoincremental
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,  // Asegura que el campo `nombre` no sea nulo
    },
    correoelectronico: {
        type: Sequelize.STRING,
        allowNull: false,  // Asegura que el campo `nombre` no sea nulo
    },
    mensaje: {
        type: Sequelize.STRING,
        allowNull: false,  // Asegura que el campo `nombre` no sea nulo
    },
},{
    tableName: 'testimonio', // Asegúrate de que la tabla se llame 'clientes'
    // timestamps: false, // Si no deseas los campos `createdAt` y `updatedAt`
});

//testimonio.sync({ alter: true }).catch(console.error);