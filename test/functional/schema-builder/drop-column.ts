import {join as joinPaths} from "../../../vendor/https/deno.land/std/path/mod.ts";
import {runIfMain} from "../../deps/mocha.ts";
import {expect} from "../../deps/chai.ts";
import {Connection} from "../../../src/connection/Connection.ts";
// TODO(uki00a) uncomment this when CockroachDriver is implemented.
// import {CockroachDriver} from "../../../src/driver/cockroachdb/CockroachDriver.ts";
import {getDirnameOfCurrentModule, closeTestingConnections, createTestingConnections} from "../../utils/test-utils.ts";

describe("schema builder > drop column", () => {

    let connections: Connection[];
    const __dirname = getDirnameOfCurrentModule(import.meta);
    before(async () => {
        connections = await createTestingConnections({
            entities: [joinPaths(__dirname, "/entity/*.ts")],
            schemaCreate: true,
            dropSchema: true,
        });
    });
    after(() => closeTestingConnections(connections));

    it("should correctly drop column", () => Promise.all(connections.map(async connection => {

        const studentMetadata = connection.getMetadata("student");
        const removedColumns = studentMetadata.columns.filter(column => ["name", "faculty"].indexOf(column.propertyName) !== -1);
        removedColumns.forEach(column => {
            studentMetadata.columns.splice(studentMetadata.columns.indexOf(column), 1);
        });

        // in real sync indices removes automatically
        studentMetadata.indices = studentMetadata.indices.filter(index => {
            return !index.columns.find(column => ["name", "facultyId"].indexOf(column.databaseName) !== -1);
        });

        const removedForeignKey = studentMetadata.foreignKeys.find(fk => {
            return !!fk.columns.find(column => column.propertyName === "faculty");
        });
        studentMetadata.foreignKeys.splice(studentMetadata.foreignKeys.indexOf(removedForeignKey!), 1);

        await connection.synchronize();

        const queryRunner = connection.createQueryRunner();
        const studentTable = await queryRunner.getTable("student");
        await queryRunner.release();

        expect(studentTable!.findColumnByName("name")).to.be.undefined;
        expect(studentTable!.findColumnByName("faculty")).to.be.undefined;

        // CockroachDB creates indices for foreign keys
        if (false/*connection.driver instanceof CockroachDriver*/) { // TODO(uki00a) uncomment this when CockroachDriver is implemented.
            studentTable!.indices.length.should.be.equal(1);
        } else {
            studentTable!.indices.length.should.be.equal(0);
        }
        studentTable!.foreignKeys.length.should.be.equal(1);

    })));
});

runIfMain(import.meta);
