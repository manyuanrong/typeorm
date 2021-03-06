import {Entity} from "../../../../../src/decorator/entity/Entity.ts";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";
import {Column} from "../../../../../src/decorator/columns/Column.ts";
import {UpdateDateColumn} from "../../../../../src/decorator/columns/UpdateDateColumn.ts";

@Entity()
export class PostWithUpdateDate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String })
    title: string;

    @UpdateDateColumn()
    updateDate: Date;

}
