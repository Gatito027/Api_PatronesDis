const {MySQLConnection, MySQLQuery, PostgreSQLConnection, PostgreSQLQuery} = require('./productsIplement');
class DatabaseFactory {
    createConnection() {}
    createQuery() {}
}

class MySQLFactory extends DatabaseFactory {
    createConnection() {
        return new MySQLConnection();
    }
    createQuery() {
        return new MySQLQuery();
    }
}

class PostgreSQLFactory extends DatabaseFactory {
    createConnection() {
        return new PostgreSQLConnection();
    }
    createQuery() {
        return new PostgreSQLQuery();
    }
}

module.exports = { MySQLFactory, PostgreSQLFactory }