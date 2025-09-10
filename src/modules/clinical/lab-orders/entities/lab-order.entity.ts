import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicalRecord } from '../../medical-records/entities/medical-record.entity';
import { LabTest } from 'src/modules/catalog/lab-tests/entities/lab-test.entity';
import { LabOrderSupply } from '../../lab-order-supplies/entities/lab-order-supply.entity';

export enum LabOrderStatusEnum {
  ORDERED = 'ordered',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('lab_orders')
export class LabOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => LabOrderSupply, (los) => los.labOrder)
  labOrders: LabOrder[];

  @ManyToOne(() => MedicalRecord, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'medical_record_id' })
  medicalRecord: MedicalRecord;

  @ManyToOne(() => LabTest, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lab_test_id' })
  labTest: LabTest;

  @Column({ name: 'order_date', type: 'datetime' })
  orderDate: Date;

  @Column({ name: 'status', type: 'enum', enum: LabOrderStatusEnum })
  status: string;

  @Column({ name: 'result', nullable: true, type: 'text' })
  result: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
}
