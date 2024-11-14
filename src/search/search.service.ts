import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Artist } from '../artist/artist.model';
import { Album } from '../album/album.model';
import { Song } from '../song/song.model';
import { Op } from 'sequelize';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Artist) private readonly artistModel: typeof Artist,
    @InjectModel(Album) private readonly albumModel: typeof Album,
    @InjectModel(Song) private readonly songModel: typeof Song,
  ) {}

  async search(query: string) {
    const artists = await this.artistModel.findAll({
      where: { name: { [Op.like]: `%${query}%` } },
    });
    const albums = await this.albumModel.findAll({
      where: { title: { [Op.like]: `%${query}%` } },
    });
    const songs = await this.songModel.findAll({
      where: { title: { [Op.like]: `%${query}%` } },
    });

    //devuelve los resultados
    return { artists, albums, songs };
  }
}
