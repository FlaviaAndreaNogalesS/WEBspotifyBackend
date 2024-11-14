import { Model } from 'sequelize-typescript';
import { Genre } from '../genres/genre.model';
export declare class Artist extends Model<Artist> {
    id: number;
    name: string;
    image: string;
    genre_id: number;
    genre: Genre;
}
