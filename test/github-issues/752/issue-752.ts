import {join as joinPaths} from "../../../vendor/https/deno.land/std/path/mod.ts";
import {runIfMain} from "../../deps/mocha.ts";
import "../../deps/chai.ts";
import {getDirnameOfCurrentModule, closeTestingConnections, createTestingConnections, reloadTestingDatabases} from "../../utils/test-utils.ts";
import {Connection} from "../../../src/connection/Connection.ts";
import {Product} from "./entity/Product.ts";

describe("github issues > #752 postgres - count query fails for empty table", () => {

    let connections: Connection[];
    const __dirname = getDirnameOfCurrentModule(import.meta);
    before(async () => connections = await createTestingConnections({
        entities: [joinPaths(__dirname, "/entity/*.ts")],
    }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("should return user by a given email and proper escape 'user' keyword", () => Promise.all(connections.map(async connection => {

        const product = new Product();
        product.name = "Apple";
        product.productVersionId = 1;
        await connection.manager.save(product);

        const count = await connection.getRepository(Product).count({ productVersionId: 1 });
        count.should.be.equal(1);
    })));

});

runIfMain(import.meta);
