import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  // create(createSharedDto: CreateSharedDto) {
  //   return 'This action adds a new shared';
  // }

  findAll() {
    return `This action returns all shared`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shared`;
  }

  // update(id: number, updateSharedDto: UpdateSharedDto) {
  //   return `This action updates a #${id} shared`;
  // }

  remove(id: number) {
    return `This action removes a #${id} shared`;
  }
}
