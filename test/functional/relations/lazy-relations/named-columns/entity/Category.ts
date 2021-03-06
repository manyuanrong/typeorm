import { Entity } from "../../../../../../src/decorator/entity/Entity.ts";
import { PrimaryGeneratedColumn } from "../../../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";
import { Column } from "../../../../../../src/decorator/columns/Column.ts";
import { ManyToMany } from "../../../../../../src/decorator/relations/ManyToMany.ts";
import { OneToMany } from "../../../../../../src/decorator/relations/OneToMany.ts";
import { OneToOne } from "../../../../../../src/decorator/relations/OneToOne.ts";
import {
    Post,
} from "./Post.ts";

@Entity()
export class Category {

    @PrimaryGeneratedColumn({
        name: "s_category_id",
    })
    id: number;

    @Column({ type: String })
    name: string;

    @OneToOne(type => Post, post => post.oneCategory)
    onePost: Promise<Post>;

    @ManyToMany(type => Post, post => post.twoSideCategories)
    twoSidePosts: Promise<Post[]>;

    @OneToMany(type => Post, post => post.twoSideCategory)
    twoSidePosts2: Promise<Post[]>;

    // ManyToMany with named properties
    @ManyToMany(type => Post, post => post.categoriesNamedColumn)
    postsNamedColumn: Promise<Post[]>;

    // OneToMany with named properties
    @OneToMany(type => Post, post => post.categoryNamedColumn)
    onePostsNamedColumn: Promise<Post[]>;

    // OneToOne with named properties
    @OneToOne(type => Post, post => post.oneCategoryNamedColumn)
    onePostNamedColumn: Promise<Post>;
}
