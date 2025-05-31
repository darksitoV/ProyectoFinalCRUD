const { DataTypes } = require('sequelize');
const sequelize = require('../conexion')

// tabla, campos, validacion timestamp
const citas = sequelize.define('citas',{
    id: {type: DataTypes.INTEGER,    
        autoIncrement: true,
        primaryKey: true,},
    cliente: {type: DataTypes.STRING, unique: true  },
    fecha: {type: DataTypes.STRING},
    hora: {type: DataTypes.STRING},
    servicio: {type: DataTypes.STRING},
    estado: {type: DataTypes.STRING},
    notas: {type: DataTypes.STRING}
},{timestamps:false})

module.exports = citas;