import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  // create(createCoreDto: CreateCoreDto) {
  //   return 'This action adds a new core';
  // }

  findAll() {
    return `This action returns all core`;
  }

  findOne(id: number) {
    return `This action returns a #${id} core`;
  }

  // update(id: number, updateCoreDto: UpdateCoreDto) {
  //   return `This action updates a #${id} core`;
  // }

  remove(id: number) {
    return `This action removes a #${id} core`;
  }
}
