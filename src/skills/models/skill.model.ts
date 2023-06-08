import { Column, DataType, Model, Table } from "sequelize-typescript";

interface SkillCreationAttrs{
    name: string;
};

@Table({tableName: 'skills'})
export class Skill extends Model<Skill, SkillCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;
}
