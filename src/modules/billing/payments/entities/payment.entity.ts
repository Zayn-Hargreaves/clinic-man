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
import { Invoice } from '../../invoices/entities/invoice.entity';

export enum PaymentMethodEnum {
  CASH = 'cash',
  CREDIT_CARD = 'credit_card',
  BANK_TRANFER = 'bank_transfer',
  STRIPE = 'stripe',
}

export enum statusEnum {
  SUCCESS = 'success',
  PENDING = 'pending',
  FALSE = 'failed',
}
@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Invoice, { nullable: false })
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @Column({
    name: 'payment_method',
    type: 'enum',
    enum: PaymentMethodEnum,
    default: PaymentMethodEnum.CASH,
  })
  paymentMethod: PaymentMethodEnum;

  @Column({
    name: 'amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  amount: number;

  @Column({
    name: 'payment_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  paymentDate: Date;

  @Column({
    name: 'status',
    type: 'enum',
    enum: statusEnum,
    default: statusEnum.PENDING,
  })
  status: string;

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
