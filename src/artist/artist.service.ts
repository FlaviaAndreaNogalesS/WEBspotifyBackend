import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Artist } from './artist.model';
import { Genre } from '../genres/genre.model';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist)
    private readonly artistModel: typeof Artist,
  ) {}

  // artistas por género
  async findArtistsByGenre(genre_id: number): Promise<Artist[]> {
    return this.artistModel.findAll({ where: { genre_id } });
  }

  async findAll(): Promise<Artist[]> {
    return this.artistModel.findAll({
      include: [Genre], // Incluye el género
    });
  }

  async findById(id: number): Promise<Artist> {
    const artist = await this.artistModel.findByPk(id, {
      include: [Genre],
    });
    if (!artist) {
      throw new NotFoundException('Artista no encontrado');
    }
    return artist;
  }

  // CRUD
  async create(artistData: Partial<Artist>): Promise<Artist> {
    return this.artistModel.create(artistData as Artist);
  }

  async update(id: number, artistData: Partial<Artist>): Promise<Artist> {
    const artist = await this.findById(id);
    if (!artist) {
      throw new NotFoundException('Artista no encontrado');
    }
    return artist.update(artistData as Artist);
  }

  async delete(id: number): Promise<void> {
    const artist = await this.findById(id);
    if (!artist) {
      throw new NotFoundException('Artista no encontrado');
    }
    await artist.destroy();
  }
}
