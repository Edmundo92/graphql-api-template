export = {

  test: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    }
  },

  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3307,
      database: "my_db",
      user: "root",
      password: ""
    },
    migrations: {
      directory: "migration"
    }
  },

  production: {}
};
