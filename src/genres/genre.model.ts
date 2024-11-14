import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class Genre extends Model<Genre> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;
}
