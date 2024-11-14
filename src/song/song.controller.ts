import { Controller, Get, Post, Put, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { SongService } from './song.service';
import { Song } from './song.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('/:songId')
  async getSongById(@Param('songId') songId: number): Promise<Song> {
    return this.songService.findSongById(songId);
  }

  // CRUD
  @Get()
  async getAllSongs(): Promise<Song[]> {
    return this.songService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './musica', //CARPETA
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
      },
    }),
  }))
  async createSong(
    @UploadedFile() file: Express.Multer.File,
    @Body() songData: Partial<Song>,
  ): Promise<Song> {
    if (file) {
      songData.audioUrl = `musica/${file.filename}`;
    }
    return this.songService.create(songData);
  }

  @Put('/:id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './musica',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
      },
    }),
  }))
  async updateSong(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() songData: Partial<Song>,
  ): Promise<Song> {
    if (file) {
      songData.audioUrl = `musica/${file.filename}`;
    }
    return this.songService.update(id, songData);
  }

  @Delete('/:id')
  async deleteSong(@Param('id') id: number): Promise<void> {
    return this.songService.delete(id);
  }
}
