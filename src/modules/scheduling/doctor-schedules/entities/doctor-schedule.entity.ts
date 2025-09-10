import { Doctor } from 'src/modules/directory/doctor/entities/doctor.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('doctor_schedules')
@Index('idx_doctorSchedule_doctor_dayOfWeek_startTime', [
  'doctor',
  'dayOfWeek',
  'startTime',
])
@Index('idx_doctorSchedule_doctor', ['doctor'])
export class DoctorSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Column({ name: 'day_of_week', type: 'tinyint', nullable: true })
  dayOfWeek: number | null;

  @Column({ name: 'start_time', type: 'time' })
  startTime: string;

  @Column({ name: 'end_time', type: 'time' })
  endTime: string;

  @Column({ name: 'active', type: 'tinyint', default: 1 })
  active: number;
}
