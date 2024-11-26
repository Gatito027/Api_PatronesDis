const {DatabaseConnection, Query} = require('./products');
// Implementación concreta para MySQL
class MySQLConnection extends DatabaseConnection {
    connect() {
        console.log('Conectado a MySQL');
    }
    disconnect() {
        console.log('Desconectado de MySQL');
    }
}

class MySQLQuery extends Query {
    execute() {
        console.log('Ejecutando consulta en MySQL');
    }
}

// Implementación concreta para PostgreSQL
class PostgreSQLConnection extends DatabaseConnection {
    connect() {
        console.log('Conectado a PostgreSQL');
    }
    disconnect() {
        console.log('Desconectado de PostgreSQL');
    }
}

class PostgreSQLQuery extends Query {
    execute() {
        console.log('Ejecutando consulta en PostgreSQL');
    }
}

module.exports = {MySQLConnection, MySQLQuery, PostgreSQLConnection, PostgreSQLQuery}