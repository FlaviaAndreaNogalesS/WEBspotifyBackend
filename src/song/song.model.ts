import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Album } from '../album/album.model';

@Table({
  timestamps: false,
})
export class Song extends Model<Song> {
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
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  audioUrl: string;

  @ForeignKey(() => Album)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'album_id',
  })
  albumId: number;

  @BelongsTo(() => Album)
  album: Album;
}
