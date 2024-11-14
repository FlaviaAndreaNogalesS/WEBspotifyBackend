import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Artist } from '../artist/artist.model';
import { Song } from '../song/song.model';

@Table({
  timestamps: false,
})
export class Album extends Model<Album> {
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
  image: string;

  @ForeignKey(() => Artist)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'artist_id', 
  })
  artistId: number;

  @BelongsTo(() => Artist)
  artist: Artist;

  @HasMany(() => Song)
  songs: Song[];
}
