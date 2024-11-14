import { GenreService } from './genre.service';
import { Genre } from './genre.model';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    getAllGenres(search?: string): Promise<Genre[]>;
    getGenreById(id: number): Promise<Genre>;
    createGenre(file: Express.Multer.File, genreData: Partial<Genre>): Promise<Genre>;
    updateGenre(id: number, file: Express.Multer.File, genreData: Partial<Genre>): Promise<Genre>;
    deleteGenre(id: number): Promise<void>;
}
