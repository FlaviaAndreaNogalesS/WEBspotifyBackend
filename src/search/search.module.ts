import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { Artist } from '../artist/artist.model';
import { Album } from '../album/album.model';
import { Song } from '../song/song.model';

@Module({
  imports: [SequelizeModule.forFeature([Artist, Album, Song])], //modelos necesarios
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
