import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenreModule } from './genres/genre.module';
import { Genre } from './genres/genre.model';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { SongModule } from './song/song.module';

import { SearchModule } from './search/search.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'fans',
      database: 'spotify_db',
      models: [Genre],
      autoLoadModels: true,
      synchronize: true,
      
    }),
    GenreModule,
    ArtistModule,
    AlbumModule,
    SongModule,
    SearchModule,
  ],
})
export class AppModule {}
