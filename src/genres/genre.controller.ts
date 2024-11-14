import { Controller, Get, Post, Put, Delete, Body, Param, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  //por nombre
  @Get()
  async getAllGenres(@Query('search') search?: string): Promise<Genre[]> {
    if (search) {
      return this.genreService.findAll().then(genres =>
        genres.filter(genre => genre.name.toLowerCase().includes(search.toLowerCase())),
      );
    }
    return this.genreService.findAll();
  }

  @Get('/:id')
  async getGenreById(@Param('id') id: number): Promise<Genre> {
    return this.genreService.findById(id);
  }

  //CRUD
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
  async createGenre(
    @UploadedFile() file: Express.Multer.File,
    @Body() genreData: Partial<Genre>,
  ): Promise<Genre> {
    if (file) {
      genreData.image = `imagenes/${file.filename}`;
    }
    return this.genreService.create(genreData);
  }

  //actualiza
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
  async updateGenre(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() genreData: Partial<Genre>,
  ): Promise<Genre> {
    if (file) {
      genreData.image = `imagenes/${file.filename}`;
    }
    return this.genreService.update(id, genreData);
  }

  @Delete('/:id')
  async deleteGenre(@Param('id') id: number): Promise<void> {
    return this.genreService.delete(id);
  }
}
