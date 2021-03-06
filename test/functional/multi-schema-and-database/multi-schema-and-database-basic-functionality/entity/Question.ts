import {Entity} from "../../../../../src/decorator/entity/Entity.ts";
import {Column} from "../../../../../src/decorator/columns/Column.ts";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";

@Entity({ database: "testDB", schema: "questions" })
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String })
    name: string;

}
