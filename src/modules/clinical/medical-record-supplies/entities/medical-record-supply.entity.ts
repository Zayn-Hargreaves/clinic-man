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
import { MedicalRecord } from '../../medical-records/entities/medical-record.entity';
import { MedicalSupply } from 'src/modules/catalog/medical-supplies/entities/medical-supply.entity';
import { InventoryTransaction } from 'src/modules/supply-chain/inventory-transactions/entities/inventory-transaction.entity';

@Entity('medical_record_supplies')
@Index('idx_medicalRecordSupplier_medicalRecord', ['medicalRecord'])
@Index('idx_medicalRecordSupplier_supply', ['medicalSupply'])
export class MedicalRecordSupply {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MedicalRecord, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'medical_record_id' })
  medicalRecord: MedicalRecord;

  @ManyToOne(() => MedicalSupply, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'supply_id' })
  medicalSupply: MedicalSupply;

  @Column({ name: 'quantity_used', type: 'int' })
  quantityUsed: number;

  @ManyToOne(() => InventoryTransaction, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'inventory_transtaction_id' })
  inventoryTransaction?: InventoryTransaction;

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
