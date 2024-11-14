import { Artist } from './artist.model';
export declare class ArtistService {
    private readonly artistModel;
    constructor(artistModel: typeof Artist);
    findArtistsByGenre(genre_id: number): Promise<Artist[]>;
    findAll(): Promise<Artist[]>;
    findById(id: number): Promise<Artist>;
    create(artistData: Partial<Artist>): Promise<Artist>;
    update(id: number, artistData: Partial<Artist>): Promise<Artist>;
    delete(id: number): Promise<void>;
}
