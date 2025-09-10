import { Injectable } from '@nestjs/common';
import { CreateDepartmentServiceDto } from './dto/create-department-service.dto';
import { UpdateDepartmentServiceDto } from './dto/update-department-service.dto';

@Injectable()
export class DepartmentServicesService {
  create(createDepartmentServiceDto: CreateDepartmentServiceDto) {
    return 'This action adds a new departmentService';
  }

  findAll() {
    return `This action returns all departmentServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentService`;
  }

  update(id: number, updateDepartmentServiceDto: UpdateDepartmentServiceDto) {
    return `This action updates a #${id} departmentService`;
  }

  remove(id: number) {
    return `This action removes a #${id} departmentService`;
  }
}
