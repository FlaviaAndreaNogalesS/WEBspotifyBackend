import { Album } from './album.model';
export declare class AlbumService {
    private readonly albumModel;
    constructor(albumModel: typeof Album);
    findAlbumsByArtist(artistId: number): Promise<Album[]>;
    findAlbumById(id: number): Promise<Album>;
    findAll(): Promise<Album[]>;
    create(albumData: Partial<Album>): Promise<Album>;
    update(id: number, albumData: Partial<Album>): Promise<Album>;
    delete(id: number): Promise<void>;
}
