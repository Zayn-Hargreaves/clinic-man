import { Injectable } from '@nestjs/common';
import { CreateMedicalRecordSupplyDto } from './dto/create-medical-record-supply.dto';
import { UpdateMedicalRecordSupplyDto } from './dto/update-medical-record-supply.dto';

@Injectable()
export class MedicalRecordSuppliesService {
  create(createMedicalRecordSupplyDto: CreateMedicalRecordSupplyDto) {
    return 'This action adds a new medicalRecordSupply';
  }

  findAll() {
    return `This action returns all medicalRecordSupplies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalRecordSupply`;
  }

  update(id: number, updateMedicalRecordSupplyDto: UpdateMedicalRecordSupplyDto) {
    return `This action updates a #${id} medicalRecordSupply`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalRecordSupply`;
  }
}
