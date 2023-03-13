import { Module } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UsersModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
