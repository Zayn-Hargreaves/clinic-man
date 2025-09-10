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
import { Invoice } from '../../invoices/entities/invoice.entity';
import { InventoryTransaction } from 'src/modules/supply-chain/inventory-transactions/entities/inventory-transaction.entity';

export enum ItemTypeEnum {
  SERVICE = 'service',
  MEDICATION = 'medication',
  LAB_TEST = 'lab_test',
  MEDICAL_SUPPLY = 'medical_supply',
}

@Entity('invoice_items')
@Index('idx_invoiceItems_invoice', ['invoice'])
@Index('idx_invoiceItems_inventoryTranaction', ['inventoryTransaction'])
@Index('idx_invoiceItems_itemType_itemId', ['itemType', 'itemId'])
export class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Invoice, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @Column({
    name: 'item_type',
    type: 'enum',
    enum: ItemTypeEnum,
  })
  itemType: ItemTypeEnum;

  @Column({ name: 'item_id', type: 'integer', nullable: true })
  itemId: number | null;

  @Column({ name: 'quantity', type: 'integer', default: 1 })
  quantity: number;

  @Column({
    name: 'unit_price',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  amount: number;

  @ManyToOne(() => InventoryTransaction, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'inventory_transaction_id' })
  inventoryTransaction: InventoryTransaction | null;

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
