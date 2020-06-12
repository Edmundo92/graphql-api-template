import knex from "knex";
import { Model } from "objection";
import knexfile  from "./knexfile";


const start = () => {
    const conf = knex(knexfile.development);
    Model.knex(conf);
}

export = {
    start
}