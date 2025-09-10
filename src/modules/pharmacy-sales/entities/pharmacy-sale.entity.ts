import { Medication } from 'src/modules/catalog/medications/entities/medication.entity';
import { Patient } from 'src/modules/directory/patients/entities/patient.entity';
import { InventoryTransaction } from 'src/modules/supply-chain/inventory-transactions/entities/inventory-transaction.entity';
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

@Entity('pharmacy_sales')
@Index('idx_pharmacy_patient', ['patient'])
@Index('idx_pharmacy_medication', ['medication'])
@Index('idx_pharmacy_inventory_tx', ['inventoryTransaction'])
export class PharmacySale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Medication, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'medication_id' })
  medication: Medication;

  @Column({ name: 'quantity', type: 'int', nullable: true })
  quantity: number;

  @Column({
    name: 'sale_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  saleDate: Date;

  @Column({ name: 'amount', type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @ManyToOne(() => InventoryTransaction, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'inventory_transaction_id' })
  inventoryTransaction: InventoryTransaction;

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
