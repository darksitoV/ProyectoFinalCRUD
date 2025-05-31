// Paquetes requeridos
const express = require('express')
const citas = require('./models/citas') // Definicion del modelo
const bodyParser = require('body-parser') 
const { where } = require('sequelize')
const cors = require('cors')

// Incializacion del app
const app = express()
const puerto = 3000

app.use(cors());
// Parseo de formato para json del body
app.use(bodyParser.json())

// Escucha del puerto 
app.listen(puerto,() =>{
    console.log('Servidor Iniciado')
});

// Rutas 

// Ruta para crear una nueva - cita - 
app.post('/citas', async (req,res) =>{ // Crear
    // Obtencion del body 
    const {cliente,fecha,hora,servicio,estado,notas} = req.body;
    
    // Uso de create para crear un nuevo registro 
    const data = await citas.create({
        cliente,fecha,hora,servicio,estado,notas
    });

    // Salida
    res.send(data);
})

// Ruta para obtener las citas existentes actualmente 
app.get('/citas', async (req,res) => { // Leer 
    // Se obtienen todos los registros
    const data = await citas.findAll(); 
    res.send(data);
})

// Ruta para eliminar una cita por id 
app.delete('/citas/:id', async (req,res) => { // Eliminar
    // Por medio del id se elimina el registro
    const { id } = req.params;
    
    const data = await citas.destroy({
        where: {
            id
        }
    })
    res.send(data)
})

// Ruta para - Actualizar - una cita en especifico por id  
app.put('/citas/:id',async (req,res) => { // Actualizar
    const { cliente,fecha,hora,servicio,estado,notas} = req.body;
    const { id } = req.params;
    const data = await citas.update({
        cliente,fecha,hora,servicio,estado,notas
    },{
        where: {id}
    })
    res.send(data);
})