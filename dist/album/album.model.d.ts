import { Model } from 'sequelize-typescript';
import { Artist } from '../artist/artist.model';
import { Song } from '../song/song.model';
export declare class Album extends Model<Album> {
    id: number;
    title: string;
    image: string;
    artistId: number;
    artist: Artist;
    songs: Song[];
}
