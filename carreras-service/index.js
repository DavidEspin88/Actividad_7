// 1. Importar Express
const express = require('express');
const cors = require('cors'); 
const app = express();

// 3. Definir el puerto. Usaremos uno diferente para cada servicio.
const PORT = 3001;

// Middleware para que nuestro servidor entienda JSON
app.use(cors());
app.use(express.json());

// 4. Datos de ejemplo (en un proyecto real, esto vendría de una base de datos)
const carreras = [
    { id: 1, nombre: 'Ingeniería de Software' },
    { id: 2, nombre: 'Medicina' },
    { id: 3, nombre: 'Diseño Gráfico' }
];

// 5. Definir nuestras rutas (endpoints)

// GET /carreras - Devuelve todas las carreras
app.get('/carreras', (req, res) => {
    res.json(carreras);
});

// GET /carreras/:id - Devuelve una carrera específica por su ID
app.get('/carreras/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carrera = carreras.find(c => c.id === id);

    if (carrera) {
        res.json(carrera);
    } else {
        res.status(404).send('Carrera no encontrada');
    }
});

// 6. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🎓 Carreras-Service escuchando en el puerto ${PORT}`);
});