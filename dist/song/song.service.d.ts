import { Song } from './song.model';
export declare class SongService {
    private readonly songModel;
    constructor(songModel: typeof Song);
    findSongById(songId: number): Promise<Song>;
    findAll(): Promise<Song[]>;
    create(songData: Partial<Song>): Promise<Song>;
    update(id: number, songData: Partial<Song>): Promise<Song>;
    delete(id: number): Promise<void>;
}
