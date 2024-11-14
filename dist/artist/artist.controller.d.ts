import { ArtistService } from './artist.service';
import { Artist } from './artist.model';
export declare class ArtistController {
    private readonly artistService;
    constructor(artistService: ArtistService);
    getArtistsByGenre(genre_id: number): Promise<Artist[]>;
    getAllArtists(): Promise<Artist[]>;
    getArtistById(id: number): Promise<Artist>;
    createArtist(file: Express.Multer.File, artistData: Partial<Artist>): Promise<Artist>;
    updateArtist(id: number, file: Express.Multer.File, artistData: Partial<Artist>): Promise<Artist>;
    deleteArtist(id: number): Promise<void>;
}
