import { Controller, Get, Post, Put, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './album.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('albums') //ruta
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get('/artist/:artistId') //albums de un artista
  async getAlbumsByArtist(@Param('artistId') artistId: number): Promise<Album[]> {
    return this.albumService.findAlbumsByArtist(artistId);
  }

  @Get('/:id') //album id
  async getAlbumById(@Param('id') id: number): Promise<Album> {
    return this.albumService.findAlbumById(id);
  }

  //CRUD
  @Get()
  async getAllAlbums(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './imagenes',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); //nombre unico
        callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
      },
    }),
  }))
  async createAlbum(
    @UploadedFile() file: Express.Multer.File,
    @Body() albumData: Partial<Album>,
  ): Promise<Album> {
    if (file) {
      albumData.image = `imagenes/${file.filename}`; //guarda
    }
    return this.albumService.create(albumData);
  }

  @Put('/:id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './imagenes',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
      },
    }),
  }))
  async updateAlbum(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() albumData: Partial<Album>,
  ): Promise<Album> {
    if (file) {
      albumData.image = `imagenes/${file.filename}`;
    }
    return this.albumService.update(id, albumData);
  }

  @Delete('/:id')
  async deleteAlbum(@Param('id') id: number): Promise<void> {
    return this.albumService.delete(id);
  }
}
