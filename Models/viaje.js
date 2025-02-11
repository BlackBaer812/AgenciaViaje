import sequelize from 'sequelize';
import db from '../config/db.js';

export const viaje=db.define('viaje',{
    titulo:{
        type:sequelize.STRING,
    },
    precio:{
        type:sequelize.STRING,
    },
    fecha_ida:{
        type:sequelize.DATE
    },
    fecha_vuelta:{
        type:sequelize.DATE
    },
    imagen:{
        type:sequelize.STRING,
    },
    descripcion:{
        type:sequelize.STRING,
    },
    disponibles:{
        type:sequelize.STRING,
    },
    slug:{
        type:sequelize.STRING,
    }
})

//viaje.sync({alter: true}).catch(console.error)