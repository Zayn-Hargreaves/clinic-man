import { Service } from 'src/modules/catalog/services/entities/service.entity';
import { MedicalRecord } from 'src/modules/clinical/medical-records/entities/medical-record.entity';
import { Doctor } from 'src/modules/directory/doctor/entities/doctor.entity';
import { Patient } from 'src/modules/directory/patients/entities/patient.entity';
import { Staff } from 'src/modules/directory/staff/entities/staff.entity';
import { Room } from 'src/modules/facility/rooms/entities/room.entity';
import { Slot } from 'src/modules/facility/slots/entities/slot.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AppointmentTypeEnum {
  ONLINE = 'online',
  WALKIN = 'walkin',
}

export enum AppointmentStatusEnum {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('appointments')
@Index('idx_appointments_doctor', ['doctor'])
@Index('idx_appointments_staff', ['staff'])
@Index('idx_appointments_room', ['room'])
@Index('idx_appointments_slot', ['slot'])
@Index('idx_appointments_service', ['service'])
@Index('idx_appointments_patient', ['patient'])
@Index('idx appointments_doctor_appointmentTime', ['doctor', 'appointmentTime'])
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => MedicalRecord, (mr) => mr.appointment)
  medicalRecords: MedicalRecord[];

  @Column({ name: 'appointment_time', type: 'timestamp', nullable: true })
  appointmentTime: Date | null;

  @Column({
    name: 'type',
    type: 'enum',
    enum: AppointmentTypeEnum,
  })
  type: AppointmentTypeEnum;

  @Column({
    name: 'status',
    type: 'enum',
    enum: AppointmentStatusEnum,
  })
  status: AppointmentStatusEnum;

  @Column({ name: 'reason', type: 'text', nullable: true })
  reason: string | null;

  @ManyToOne(() => Patient, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient?: Patient;

  @ManyToOne(() => Doctor, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctor_id' })
  doctor?: Doctor;

  @ManyToOne(() => Staff, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'staff_id' })
  staff?: Staff;

  @ManyToOne(() => Room, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'room_id' })
  room?: Room;

  @ManyToOne(() => Slot, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'slot_id' })
  slot?: Slot;

  @ManyToOne(() => Service, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'service_id' })
  service?: Service;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
}
