import {join as joinPaths} from "../../../../vendor/https/deno.land/std/path/mod.ts";
import {runIfMain} from "../../../deps/mocha.ts";
import {getDirnameOfCurrentModule, closeTestingConnections, createTestingConnections, reloadTestingDatabases} from "../../../utils/test-utils.ts";
import {Connection} from "../../../../src/connection/Connection.ts";
import {Post} from "./entity/Post.ts";

describe("query builder > enabling transaction", () => {

    let connections: Connection[];
    const __dirname = getDirnameOfCurrentModule(import.meta);
    before(async () => connections = await createTestingConnections({ entities: [joinPaths(__dirname, "/entity/*.ts")] }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("should execute query in a transaction", () => Promise.all(connections.map(async connection => {

        const post = new Post();
        post.title = "about transactions in query builder";

        await connection.createQueryBuilder()
            .insert()
            .into(Post)
            .values(post)
            .useTransaction(true)
            .execute();

        // todo: check if transaction query was executed

    })));

    // todo: add tests for update and remove queries as well

});

runIfMain(import.meta);
