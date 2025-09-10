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
import { Patient } from 'src/modules/directory/patients/entities/patient.entity';
import { Department } from 'src/modules/directory/departments/entities/department.entity';
import { Room } from 'src/modules/facility/rooms/entities/room.entity';
import { Bed } from 'src/modules/facility/beds/entities/bed.entity';
import { MedicalRecord } from 'src/modules/clinical/medical-records/entities/medical-record.entity';

export enum AdmissionsStatusEnum {
  ACTIVE = 'active',
  DISCHARGED = 'discharged',
  TRANSFERRED = 'transferred',
}

@Entity('admissions')
@Index('idx_admissions_patient', ['patient'])
@Index('idx_admissions_department', ['department'])
@Index('idx_admissions_room', ['room'])
@Index('idx_admission_bed', ['bed'])
export class Admission {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => MedicalRecord, (mr) => mr.admission)
  MedicalRecords: MedicalRecord[];

  @Column({ name: 'admit_date', type: 'timestamp', nullable: true })
  admitDate: Date | null;

  @Column({ name: 'discharge_date', type: 'timestamp', nullable: true })
  dischargeDate: Date | null;

  @Column({ name: 'reason', type: 'varchar', length: 255, nullable: true })
  reason: string | null;

  @Column({
    name: 'initial_diagnosis',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  initialDiagnosis: string | null;

  @Column({ name: 'discharge_summary', type: 'text', nullable: true })
  dischargeSummary: string | null;

  @Column({
    name: 'status',
    type: 'enum',
    enum: AdmissionsStatusEnum,
  })
  status: AdmissionsStatusEnum;

  @ManyToOne(() => Patient, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Department, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'department_id' })
  department?: Department | null;

  @ManyToOne(() => Room, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'room_id' })
  room?: Room | null;

  @ManyToOne(() => Bed, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'bed_id' })
  bed?: Bed | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
}
