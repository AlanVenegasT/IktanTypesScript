import { Sequelize } from "sequelize";

const db = new Sequelize('crud tsc_mysql', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;