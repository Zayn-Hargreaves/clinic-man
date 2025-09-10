import { Patient } from 'src/modules/directory/patients/entities/patient.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EInvoice } from '../../e-invoice/entities/e-invoice.entity';
import { InvoiceItem } from '../../invoice-items/entities/invoice-item.entity';
import { Payment } from '../../payments/entities/payment.entity';

export enum InvoiceStatusEnum {
  UNPAID = 'unpaid',
  PAID = 'paid',
  CANCELLED = 'cancelled',
}

@Entity('invoices')
@Index('idx_invoice_patient', ['patient'])
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Payment, (payment) => payment.invoice)
  payments: Payment[];

  @OneToMany(() => InvoiceItem, (invoiceItem) => invoiceItem.invoice)
  invoiceItems: InvoiceItem[];

  @OneToMany(() => EInvoice, (eInvoice) => eInvoice.invoice)
  eInvoices: EInvoice[];

  @Column({
    name: 'total_amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  totalAmount: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: InvoiceStatusEnum,
    default: InvoiceStatusEnum.UNPAID,
  })
  status: InvoiceStatusEnum;

  @ManyToOne(() => Patient, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
  @Column({ name: 'updated_by', type: 'int', nullable: true })
  updatedBy?: number;
}
