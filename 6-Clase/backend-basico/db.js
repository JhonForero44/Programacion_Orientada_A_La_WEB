const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',       // Ej: 'postgres'
    host: 'localhost',
    database: 'PruebaDB',        // Ej: 'mi_base_de_datos'
    password: '1015',  // Ej: 'root'
    port: 5432,               // Puerto por defecto de PostgreSQL
});

module.exports = pool;