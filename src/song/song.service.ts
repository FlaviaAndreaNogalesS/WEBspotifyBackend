import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from './song.model';
import { Album } from '../album/album.model';

@Injectable()
export class SongService {
  constructor(
    @InjectModel(Song)
    private readonly songModel: typeof Song,
  ) {}

  async findSongById(songId: number): Promise<Song> {
    return this.songModel.findByPk(songId);
  }

  async findAll(): Promise<Song[]> {
    return this.songModel.findAll({
      include: [Album],
    });
  }

  //CRUD

  async create(songData: Partial<Song>): Promise<Song> {
    return this.songModel.create(songData as Song);
  }

  async update(id: number, songData: Partial<Song>): Promise<Song> {
    const song = await this.findSongById(id);
    if (!song) {
      throw new NotFoundException('Canción no encontrada');
    }
    return song.update(songData as Song);
  }

  async delete(id: number): Promise<void> {
    const song = await this.findSongById(id);
    if (!song) {
      throw new NotFoundException('Canción no encontrada');
    }
    await song.destroy();
  }
}
