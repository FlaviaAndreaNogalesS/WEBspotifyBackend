import { Model } from 'sequelize-typescript';
import { Album } from '../album/album.model';
export declare class Song extends Model<Song> {
    id: number;
    title: string;
    audioUrl: string;
    albumId: number;
    album: Album;
}
