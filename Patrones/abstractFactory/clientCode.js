const { MySQLFactory, PostgreSQLFactory } = require('./abstractFactory');

function clientCode(factory) {
    const connection = factory.createConnection();
    const query = factory.createQuery();

    connection.connect();
    query.execute();
    connection.disconnect();
}

// Usar la fábrica MySQL
const mySQLFactory = new MySQLFactory();
clientCode(mySQLFactory);

// Usar la fábrica PostgreSQL
const postgreSQLFactory = new PostgreSQLFactory();
clientCode(postgreSQLFactory);
