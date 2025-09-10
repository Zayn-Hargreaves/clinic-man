import { Admission } from 'src/modules/admissions/entities/admission.entity';
import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import { statusEnum } from 'src/modules/billing/payments/entities/payment.entity';
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
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LabOrder } from '../../lab-orders/entities/lab-order.entity';
import { Prescription } from '../../prescriptions/entities/prescription.entity';
import { MedicalRecordSupply } from '../../medical-record-supplies/entities/medical-record-supply.entity';

export enum StatusEnum {
  DRAFT = 'draft',
  COMPLETED = 'completed',
}
@Entity('medical_records')
@Index('idx_medicalRecords_appointment', ['appointment'])
@Index('idx_medicalRecords_admission', ['admission'])
@Index('idx_medicalRecords_patient', ['patient'])
@Index('idx_medicalRecords_doctor', ['doctor'])
export class MedicalRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => MedicalRecordSupply, (mrs) => mrs.medicalRecord)
  medicalRecordSupply: MedicalRecordSupply[];

  @OneToMany(() => Prescription, (prescription) => prescription.medicalRecord)
  prescriptions: Prescription[];

  @OneToMany(() => LabOrder, (lo) => lo.medicalRecord)
  labOrders: LabOrder[];

  @ManyToOne(() => Appointment, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'appointment_id' })
  appointment: Appointment;

  @ManyToOne(() => Admission, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'admission_id' })
  admission: Admission;

  @ManyToOne(() => Patient, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Doctor, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Column({ name: 'visit_date', type: 'datetime' })
  visitDate: Date;

  @Column({ name: 'chief_complain', type: 'varchar', length: 255 })
  chiefComplain: string;

  @Column({ name: 'diagnosis', type: 'varchar', length: 255 })
  diagnosis: string;

  @Column({ name: 'clinical_notes', type: 'text' })
  clinicNotes: string;

  @Column({ name: 'instructions', type: 'text' })
  instructions: string;

  @Column({ name: 'status', type: 'enum', enum: statusEnum })
  status: statusEnum;

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
