import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "./entities/user.entity";
import { Tags } from './entities/tags.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
  }
  create(createUserDto: CreateUserDto) {
    const user: User = new User();
    user.name = createUserDto.name;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository
      .createQueryBuilder()
      .update()
      .set({name: updateUserDto.name, email: updateUserDto.email})
      .where(`id = :id`, { id })
      .execute();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  addTags(id: number, tags: Tags[]) {
    return this.findOne(id).then((user) => {
    });
  }
}
