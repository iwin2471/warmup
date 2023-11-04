import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tags } from "./entities/tags.entity";
import { Repository } from "typeorm";

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tags) private readonly tagRepository: Repository<Tags>) {}


  findAll(): Promise<Tags[]> {
    return this.tagRepository.find();
  }

  find(name: string): Promise<Tags[]> {
    return this.tagRepository.find({ where: { name }})
  }
}
