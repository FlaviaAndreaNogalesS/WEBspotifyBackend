import { Genre } from './genre.model';
export declare class GenreService {
    private readonly genreModel;
    constructor(genreModel: typeof Genre);
    findAll(): Promise<Genre[]>;
    findById(id: number): Promise<Genre>;
    create(genreData: Partial<Genre>): Promise<Genre>;
    update(id: number, genreData: Partial<Genre>): Promise<Genre>;
    delete(id: number): Promise<void>;
}
