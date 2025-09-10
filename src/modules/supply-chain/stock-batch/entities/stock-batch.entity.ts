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
import { InventoryTransaction } from '../../inventory-transactions/entities/inventory-transaction.entity';
import { Supplier } from '../../suppliers/entities/supplier.entity';

export enum stockBatchItemTypeEnum {
  MEDICATION = 'medication',
  MEDICALSUPPLY = 'medical_supply',
}

@Entity('stock_batch')
@Index('idx_stockBatch_itemType_itemId_batchNo', [
  'itemType',
  'itemId',
  'batchNo',
])
@Index('idx_stockBatch_supplier', ['supplier'])
@Index('idx_stockBathc_itemType_itemId', ['itemType', 'itemId'])
export class StockBatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'item_type', type: 'enum', enum: stockBatchItemTypeEnum })
  itemType: stockBatchItemTypeEnum;

  @Column({ name: 'item_id', type: 'int', nullable: true })
  itemId: number | null;

  @Column({ name: 'batch_no', type: 'varchar', length: 64, nullable: true })
  batchNo: string | null;

  @Column({ name: 'on_hand', type: 'int', nullable: true })
  onHand: number;

  @Column({
    name: 'unit_cost',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  unitCost: number | null;

  @ManyToOne(() => Supplier, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'supplier_id' })
  supplier: Supplier;

  @OneToMany(() => InventoryTransaction, (it) => it.stockBatch)
  inventoryTransaction: InventoryTransaction[];

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
