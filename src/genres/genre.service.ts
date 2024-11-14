import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genre.model';

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre) private readonly genreModel: typeof Genre) {}

  async findAll(): Promise<Genre[]> {
    return this.genreModel.findAll();
  }

  async findById(id: number): Promise<Genre> {
    const genre = await this.genreModel.findByPk(id);
    if (!genre) {
      throw new NotFoundException('Genero no encontrado');
    }
    return genre;
  }

  //CRUD
  async create(genreData: Partial<Genre>): Promise<Genre> {
    return this.genreModel.create(genreData as Genre);
  }

  async update(id: number, genreData: Partial<Genre>): Promise<Genre> {
    const genre = await this.findById(id);
    if (!genre) {
      throw new NotFoundException('Genero no encontrado');
    }
    return genre.update(genreData as Genre);
  }

  async delete(id: number): Promise<void> {
    const genre = await this.findById(id);
    if (!genre) {
      throw new NotFoundException('Genero no encontrado');
    }
    await genre.destroy();
  }
}
