import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';

@Module({
  imports: [SequelizeModule.forFeature([Genre])],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
