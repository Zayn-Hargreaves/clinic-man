import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import { Doctor } from 'src/modules/directory/doctor/entities/doctor.entity';
import { Patient } from 'src/modules/directory/patients/entities/patient.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('feedbacks')
@Index('idx_feedbacks_patient', ['patient'])
@Index('idx_feedbacks_doctor', ['doctor'])
@Index('idx_feedbacks_appointment', ['appointment'])
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Doctor, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @ManyToOne(() => Appointment, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'appointment_id' })
  appointment?: Appointment;

  @Column({ name: 'rating', type: 'int', default: 5 })
  rating: number;

  @Column({ name: 'comment', type: 'text', nullable: true })
  comment: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
  @Column({ name: 'deleted_by', type: 'int', nullable: true })
  deletedBy?: number;
}
