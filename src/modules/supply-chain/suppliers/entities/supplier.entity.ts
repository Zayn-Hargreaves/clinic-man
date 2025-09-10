import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InventoryTransaction } from '../../inventory-transactions/entities/inventory-transaction.entity';
import { StockBatch } from '../../stock-batch/entities/stock-batch.entity';
import { SupplierItem } from '../../supplier-items/entities/supplier-item.entity';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @Column({
    name: 'contact_info',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  contactInfo: string | null;
  @OneToMany(() => SupplierItem, (si) => si.supplier)
  supplierItems: SupplierItem[];

  @OneToMany(() => StockBatch, (sb) => sb.supplier)
  stockBatchs: StockBatch[];

  @OneToMany(() => InventoryTransaction, (it) => it.supplier)
  inventoryTranactions: InventoryTransaction[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
  @Column({ name: 'deleted_by', type: 'int', nullable: true })
  deletedBy?: number;
}
