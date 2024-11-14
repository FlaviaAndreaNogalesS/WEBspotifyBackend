import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from './song.model';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { Album } from '../album/album.model';

@Module({
  imports: [SequelizeModule.forFeature([Song, Album])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
