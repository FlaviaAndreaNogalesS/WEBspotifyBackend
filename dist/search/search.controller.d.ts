import { SearchService } from './search.service';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    search(query: string): Promise<{
        artists: import("../artist/artist.model").Artist[];
        albums: import("../album/album.model").Album[];
        songs: import("../song/song.model").Song[];
    }>;
}
