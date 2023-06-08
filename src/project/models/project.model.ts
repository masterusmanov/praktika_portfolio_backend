import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";

interface ProjectCreationAttrs{
    project_name: string;
    content: string;
    project_link: string;
    link_github_project: string;
};

@Table({tableName: 'project'})
export class Project extends Model<Project, ProjectCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    project_name: string;

    @Column({
        type: DataType.STRING,
    })
    content: string;

    @Column({
        type: DataType.STRING,
    })
    project_link: string;

    @Column({
        type: DataType.STRING,
    })
    link_github_project: string;
}
