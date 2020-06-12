import { Model } from "objection";

export class User extends Model {

    static tableName = "users";

    static get jsonSchema() {
        return {
            type: "objecy",
            properties: {
                id: { type: "integer" },
                name: { type: "string" }
            }
        }
    }
}