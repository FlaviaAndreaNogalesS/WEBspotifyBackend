import { Artist } from '../artist/artist.model';
import { Album } from '../album/album.model';
import { Song } from '../song/song.model';
export declare class SearchService {
    private readonly artistModel;
    private readonly albumModel;
    private readonly songModel;
    constructor(artistModel: typeof Artist, albumModel: typeof Album, songModel: typeof Song);
    search(query: string): Promise<{
        artists: Artist[];
        albums: Album[];
        songs: Song[];
    }>;
}
