import {join as joinPaths} from "../../../vendor/https/deno.land/std/path/mod.ts";
import {runIfMain} from "../../deps/mocha.ts";
import {expect} from "../../deps/chai.ts";
import {getDirnameOfCurrentModule, closeTestingConnections, createTestingConnections, reloadTestingDatabases} from "../../utils/test-utils.ts";
import {Connection} from "../../../src/connection/Connection.ts";
import {Race} from "./entity/Race.ts";

describe("github issues > support of embeddeds that are not set", () => {

    let connections: Connection[];
    const __dirname = getDirnameOfCurrentModule(import.meta);
    before(async () => connections = await createTestingConnections({
        entities: [joinPaths(__dirname, "/entity/*.ts")],
    }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("embedded with custom column name should persist and load without errors", () => Promise.all(connections.map(async connection => {

        const race = new Race();
        race.name = "National Race";

        await connection.manager.save(race);

        const loadedRace = await connection.manager.findOne(Race, { name: "National Race" });
        expect(loadedRace).to.exist;
        expect(loadedRace!.id).to.exist;
        loadedRace!.name.should.be.equal("National Race");
        expect(loadedRace!.duration).to.exist;
        expect(loadedRace!.duration.minutes).to.be.null;
        expect(loadedRace!.duration.hours).to.be.null;
        expect(loadedRace!.duration.days).to.be.null;

    })));

});

runIfMain(import.meta);
