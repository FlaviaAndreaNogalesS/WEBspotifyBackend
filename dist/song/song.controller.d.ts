import { SongService } from './song.service';
import { Song } from './song.model';
export declare class SongController {
    private readonly songService;
    constructor(songService: SongService);
    getSongById(songId: number): Promise<Song>;
    getAllSongs(): Promise<Song[]>;
    createSong(file: Express.Multer.File, songData: Partial<Song>): Promise<Song>;
    updateSong(id: number, file: Express.Multer.File, songData: Partial<Song>): Promise<Song>;
    deleteSong(id: number): Promise<void>;
}
