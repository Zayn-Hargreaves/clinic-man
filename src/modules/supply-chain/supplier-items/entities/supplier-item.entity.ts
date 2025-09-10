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
import { Supplier } from '../../suppliers/entities/supplier.entity';

export enum supplierItemsItemTypeEnum {
  MEDICATION = 'medication',
  MEDICALSUPPLY = 'medical_supply',
}

@Entity('supplier_items')
@Index('idx_supplierItem_supplier_itemType_itemId', [
  'supplier',
  'itemType',
  'itemId',
])
@Index('idx_supplierItem_supplier', ['supplier'])
@Index('idx_supplierItem_itemType_itemId', ['itemType', 'itemId'])
export class SupplierItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'item_type', type: 'enum', enum: supplierItemsItemTypeEnum })
  itemType: supplierItemsItemTypeEnum;

  @Column({ name: 'item_id', type: 'int', nullable: true })
  itemId: number;

  @Column({ name: 'supply_price', type: 'decimal', precision: 12, scale: 2 })
  supplyPrice: number;

  @ManyToOne(() => Supplier, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'supplier_id' })
  supplier: Supplier;

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
