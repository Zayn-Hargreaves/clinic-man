import { Service } from 'src/modules/catalog/services/entities/service.entity';
import { Doctor } from 'src/modules/directory/doctor/entities/doctor.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('doctor_services')
@Index('idx_doctor_service', ['doctor', 'service'])
export class DoctorService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, { nullable: false })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @ManyToOne(() => Service, { nullable: false })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
}
