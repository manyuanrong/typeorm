import {Entity} from "../../../../../../../src/decorator/entity/Entity.ts";
import {Column} from "../../../../../../../src/decorator/columns/Column.ts";
import {PrimaryGeneratedColumn} from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";
import {Post} from "./Post.ts";
import {ManyToOne} from "../../../../../../../src/decorator/relations/ManyToOne.ts";
import {JoinColumn} from "../../../../../../../src/decorator/relations/JoinColumn.ts";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String })
    name: string;

    @ManyToOne(type => Post, post => post.counters.categories)
    @JoinColumn()
    posts: Post[];

    postIds: number[];

}
