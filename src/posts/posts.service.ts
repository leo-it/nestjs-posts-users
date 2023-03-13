import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    private UsersService: UsersService,
  ) {}

  async createPost(post: CreatePostDto) {
    const userFound = await this.UsersService.getUser(post.authorId);
    if (!userFound) return new HttpException('User not found', 404);
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  getPosts() {
    return this.postsRepository.find();
  }

  // findAll() {
  //   return `This action returns all posts`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  /*  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  } */
}
