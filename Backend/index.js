import express from 'express';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Inicializa Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware para manejar errores de JSON mal formado
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ error: 'JSON mal formado' });
    }
    next();
});

// Rutas para CRUD en REGISTRO

// Obtener todos los registros
app.get('/registros', async (req, res) => {
    const { data, error } = await supabase
        .from('registro')
        .select('*');

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Crear un nuevo registro
app.post('/registros', async (req, res) => {
    const { nombre, telefono, pago, fecha_nacimiento, edad, sexo, correo, direccion, contacto_emergencia, primer_pago, fecha_pago, deuda } = req.body;
    
    const { data, error } = await supabase
        .from('registro')
        .insert([{ nombre, telefono, pago, fecha_nacimiento, edad, sexo, correo, direccion, contacto_emergencia, primer_pago, fecha_pago, deuda }]);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Editar un registro
app.put('/registros/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, pago, fecha_nacimiento, edad, sexo, correo, direccion, contacto_emergencia, primer_pago, fecha_pago, deuda } = req.body;

    const { data, error } = await supabase
        .from('registro')
        .update({ nombre, telefono, pago, fecha_nacimiento, edad, sexo, correo, direccion, contacto_emergencia, primer_pago, fecha_pago, deuda })
        .eq('id', id); // Cambia 'ID' a 'id'

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Eliminar un registro
app.delete('/registros/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('registro')
        .delete()
        .eq('id', id); // Cambia 'ID' a 'id'

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Rutas para CRUD en RESERVACION

// Obtener todas las reservaciones
app.get('/reservaciones', async (req, res) => {
    const { data, error } = await supabase
        .from('reservacion')
        .select('*');

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Crear una nueva reservación
app.post('/reservaciones', async (req, res) => {
    const { nombre_cliente, fecha, hora, periodo, presente, tipo } = req.body;

    const { data, error } = await supabase
        .from('reservacion')
        .insert([{ nombre_cliente, fecha, hora, periodo, presente, tipo }]);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Editar una reservación
app.put('/reservaciones/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre_cliente, fecha, hora, periodo, presente, tipo } = req.body;

    const { data, error } = await supabase
        .from('reservacion')
        .update({ nombre_cliente, fecha, hora, periodo, presente, tipo })
        .eq('id', id); // Cambia 'ID' a 'id'

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Eliminar una reservación
app.delete('/reservaciones/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('reservacion')
        .delete()
        .eq('id', id); // Cambia 'ID' a 'id'

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Obtener registros y reservaciones en una sola solicitud
app.get('/todos', async (req, res) => {
    const registrosPromise = supabase.from('registro').select('*');
    const reservacionesPromise = supabase.from('reservacion').select('*');

    const [registrosResponse, reservacionesResponse] = await Promise.all([registrosPromise, reservacionesPromise]);

    if (registrosResponse.error || reservacionesResponse.error) {
        return res.status(500).json({
            error: registrosResponse.error ? registrosResponse.error.message : reservacionesResponse.error.message
        });
    }

    res.json({
        registros: registrosResponse.data,
        reservaciones: reservacionesResponse.data,
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
