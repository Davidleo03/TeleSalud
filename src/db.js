import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database('src/DB/prueba.db');

console.log('Conectado a la base de Datos')




export default db;



