import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "../../user/models/user.model";

interface BlogCreationAttrs{
    user_id: number;
    title: string;
    content: string;
};

@Table({tableName: 'blog'})
export class Blog extends Model<Blog, BlogCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
    })
    user_id: number;

    @Column({
        type: DataType.STRING,
    })
    title: string;

    @Column({
        type: DataType.STRING,
    })
    content: string;

    @BelongsTo(() => User)
    user: User;
}
