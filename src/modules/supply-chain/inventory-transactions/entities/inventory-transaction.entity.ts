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
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { StockBatch } from '../../stock-batch/entities/stock-batch.entity';
import { MedicalRecordSupply } from 'src/modules/clinical/medical-record-supplies/entities/medical-record-supply.entity';
import { InvoiceItem } from 'src/modules/billing/invoice-items/entities/invoice-item.entity';
import { PharmacySale } from 'src/modules/pharmacy-sales/entities/pharmacy-sale.entity';
import { LabOrderSupply } from 'src/modules/clinical/lab-order-supplies/entities/lab-order-supply.entity';

export enum InventoryTransactionItemType {
  MEDICATION = 'medication',
  MEDICAL_SUPPLY = 'medical_supply',
}

export enum InventoryTransactionType {
  IMPORT = 'import',
  EXPORT = 'export',
  ADJUSTMENT = 'adjustment',
}

@Entity('inventory_transactions')
@Index('idx_inventoryTransactions_itemType_itemId', ['itemType', 'itemId'])
@Index('idx_inventoryTransactions_itemType_itemId_transactionDate', [
  'itemType',
  'itemId',
  'transactionDate',
])
export class InventoryTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => MedicalRecordSupply, (mrs) => mrs.inventoryTransaction)
  medicalRecordSupplies: MedicalRecordSupply[];

  @OneToMany(() => LabOrderSupply, (los) => los.inventoryTransaction)
  labOrderSupplies: LabOrderSupply[];

  @Column({
    name: 'item_type',
    type: 'enum',
    enum: InventoryTransactionItemType,
  })
  itemType: InventoryTransactionItemType;

  @Column({ name: 'item_id', type: 'int', nullable: true })
  itemId: number;

  @ManyToOne(() => Supplier, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'supplier_id' })
  supplier: Supplier;

  @Column({
    name: 'transaction_type',
    type: 'enum',
    enum: InventoryTransactionType,
  })
  transactionType: InventoryTransactionType;

  @ManyToOne(() => StockBatch, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'stock_batch_id' })
  stockBatch: StockBatch;

  @Column({ name: 'quantity', type: 'int', nullable: true })
  quantity: number;

  @Column({
    name: 'transaction_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  transactionDate: Date;

  @Column({ name: 'note', type: 'text', nullable: true })
  note: string | null;

  @OneToMany(() => InvoiceItem, (ii) => ii.inventoryTransaction)
  invoiceItems: InvoiceItem[];

  @OneToMany(() => PharmacySale, (ps) => ps.inventoryTransaction)
  pharmacySales: PharmacySale[];

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
