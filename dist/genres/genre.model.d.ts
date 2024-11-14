import { Model } from 'sequelize-typescript';
export declare class Genre extends Model<Genre> {
    id: number;
    name: string;
    image: string;
}
