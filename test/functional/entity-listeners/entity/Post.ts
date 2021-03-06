import {BeforeUpdate} from "../../../../src/index.ts";
import {Column} from "../../../../src/decorator/columns/Column.ts";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";
import {Entity} from "../../../../src/decorator/entity/Entity.ts";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String })
    title: string;

    @Column({ type: String })
    text: string;

    @BeforeUpdate()
    beforeUpdate() {
        this.title = this.title.trim();
    }

}
