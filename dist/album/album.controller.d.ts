import { AlbumService } from './album.service';
import { Album } from './album.model';
export declare class AlbumController {
    private readonly albumService;
    constructor(albumService: AlbumService);
    getAlbumsByArtist(artistId: number): Promise<Album[]>;
    getAlbumById(id: number): Promise<Album>;
    getAllAlbums(): Promise<Album[]>;
    createAlbum(file: Express.Multer.File, albumData: Partial<Album>): Promise<Album>;
    updateAlbum(id: number, file: Express.Multer.File, albumData: Partial<Album>): Promise<Album>;
    deleteAlbum(id: number): Promise<void>;
}
