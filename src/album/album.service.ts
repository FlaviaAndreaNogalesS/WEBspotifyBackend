import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';
import { Artist } from '../artist/artist.model'; // Importa el modelo de artista si es necesario

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album)
    private readonly albumModel: typeof Album,
  ) {}

  async findAlbumsByArtist(artistId: number): Promise<Album[]> {
    return this.albumModel.findAll({
      where: { artistId },
      include: { all: true },
    });
  }

  async findAlbumById(id: number): Promise<Album> {
    return this.albumModel.findByPk(id, {
      include: { all: true },
    });
  }

  //CRUD
  async findAll(): Promise<Album[]> {
    return this.albumModel.findAll({
      include: [Artist],
    });
  }

  async create(albumData: Partial<Album>): Promise<Album> {
    return this.albumModel.create(albumData as Album);
  }

  async update(id: number, albumData: Partial<Album>): Promise<Album> {
    const album = await this.findAlbumById(id);
    if (!album) {
      throw new NotFoundException('Album no encontrado');
    }
    return album.update(albumData as Album);
  }

  async delete(id: number): Promise<void> {
    const album = await this.findAlbumById(id);
    if (!album) {
      throw new NotFoundException('Album no encontrado');
    }
    await album.destroy();
  }
}
