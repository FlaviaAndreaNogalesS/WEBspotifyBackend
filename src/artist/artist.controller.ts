import { Controller, Get, Post, Put, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './artist.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/genre/:genreId')
  async getArtistsByGenre(@Param('genreId') genre_id: number): Promise<Artist[]> {
    return this.artistService.findArtistsByGenre(genre_id);
  }

  @Get()
  async getAllArtists(): Promise<Artist[]> {
    return this.artistService.findAll();
  }

  @Get('/:id')
  async getArtistById(@Param('id') id: number): Promise<Artist> {
    return this.artistService.findById(id);
  }

  // CRUD
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './imagenes',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        callback(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
      },
    }),
  }))
  async createArtist(
    @UploadedFile() file: Express.Multer.File,
    @Body() artistData: Partial<Artist>,
  ): Promise<Artist> {
    if (file) {
      artistData.image = `imagenes/${file.filename}`;
    }
    return this.artistService.create(artistData);
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
  async updateArtist(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() artistData: Partial<Artist>,
  ): Promise<Artist> {
    if (file) {
      artistData.image = `imagenes/${file.filename}`;
    }
    return this.artistService.update(id, artistData);
  }

  @Delete('/:id')
  async deleteArtist(@Param('id') id: number): Promise<void> {
    return this.artistService.delete(id);
  }
}
