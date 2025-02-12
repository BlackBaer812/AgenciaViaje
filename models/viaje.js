import sequelize from 'sequelize';
import db from '../config/db.js';

export const viaje=db.define('viaje',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo:{
        type:sequelize.STRING,
        allowNull: false,
    },
    precio:{
        type:sequelize.STRING,
        allowNull: false,
    },
    fecha_ida:{
        type:sequelize.DATE,
        allowNull: false,
    },
    fecha_vuelta:{
        type:sequelize.DATE,
        allowNull: false,
    },
    imagen:{
        type:sequelize.STRING,
        allowNull: false,
    },
    descripcion:{
        type:sequelize.STRING,
        allowNull: false,
    },
    disponibles:{
        type:sequelize.STRING,
        allowNull: false,
    },
    slug:{
        type:sequelize.STRING,
        allowNull: false,
    }
},{
    tableName: 'viajes', // Asegúrate de que la tabla se llame 'clientes'
    timestamps: false, // Si no deseas los campos `createdAt` y `updatedAt`
});

//viaje.sync({alter: true}).catch(console.error)