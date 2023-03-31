import { DataSource } from "typeorm";
import { Task } from "../entity/Task";

export default new DataSource({
    type: "mysql",
    host: "sql10.freesqldatabase.com",
    port: 3306,
    username: "sql10609945",
    password: "I43DGbja2T",
    database: "sql10609945",
    synchronize: false,
    logging: true,
    entities: [Task],
    subscribers: [],
    migrations: [],
})