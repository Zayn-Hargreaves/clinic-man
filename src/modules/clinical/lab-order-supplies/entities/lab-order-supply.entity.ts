import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LabOrder } from '../../lab-orders/entities/lab-order.entity';
import { MedicalSupply } from 'src/modules/catalog/medical-supplies/entities/medical-supply.entity';
import { InventoryTransaction } from 'src/modules/supply-chain/inventory-transactions/entities/inventory-transaction.entity';

@Entity('lab_order_supplies')
export class LabOrderSupply {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LabOrder, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'lab_order_id' })
  labOrder: LabOrder;

  @ManyToOne(() => MedicalSupply, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'supply_id' })
  medicalSupply: MedicalSupply;

  @Column({ name: 'quantity_used', type: 'int', nullable: false })
  quantityUsed: number;

  @ManyToOne(() => InventoryTransaction, {
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'inventory_transaction_id' })
  inventoryTransaction: InventoryTransaction;

  @Column({ name: 'note', type: 'text', nullable: true })
  note: string;

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
