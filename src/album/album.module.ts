import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Album } from './album.model';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { Song } from '../song/song.model';

@Module({
  imports: [SequelizeModule.forFeature([Album, Song])],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
