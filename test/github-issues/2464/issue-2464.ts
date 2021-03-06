import {join as joinPaths} from "../../../vendor/https/deno.land/std/path/mod.ts";
import {runIfMain} from "../../deps/mocha.ts";
import {expect} from "../../deps/chai.ts";
import {getDirnameOfCurrentModule, closeTestingConnections, createTestingConnections, reloadTestingDatabases} from "../../utils/test-utils.ts";
import {Connection} from "../../../src/connection/Connection.ts";
import { Foo } from "./entity/Foo.ts";
import { QueryFailedError } from "../../../src/index.ts";

describe("github issues > #2464 - ManyToMany onDelete option not working", () => {

    let connections: Connection[];
    const __dirname = getDirnameOfCurrentModule(import.meta);
    before(async () => connections = await createTestingConnections({
        entities: [joinPaths(__dirname, "/entity/*.ts")]
    }));

    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("should not delete when onDelete is 'NO ACTION'", () => Promise.all(
      connections.map(async connection => {
        const repo = connection.getRepository(Foo);

        await repo.save({ id: 1, bars: [{ description: "test1" }] });

        try {
          await repo.delete(1);
          expect.fail();
        } catch (e) {
          e.should.be.instanceOf(QueryFailedError);
        }

      })
    ));

    it("should delete when onDelete is not set", () => Promise.all(
      connections.map(async connection => {
        const repo = connection.getRepository(Foo);

        await repo.save({ id: 1, otherBars: [{ description: "test1" }] });
        await repo.delete(1);

        const foo = await repo.findOne(1);
        expect(foo).to.be.undefined;

      })
    ));

});

runIfMain(import.meta);
