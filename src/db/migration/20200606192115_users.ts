import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable(("users"), table => {
        table
        .increments("id").notNullable();
        table
        .string("name", 45);
    })
    .then(() => {
        return knex("users").insert([
            {id: 1, name: "Edmundo Nascimento"},
            {id: 2, name: "Ana Cleusia"},
            {id: 3, name: "Kesiah Nascimento"},
        ])
    })
}


export async function down(knex: Knex): Promise<any> {
    knex.schema.dropTable("users");
}

