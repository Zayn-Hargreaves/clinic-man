import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from '../../invoices/entities/invoice.entity';

export enum eInvoiceStatusEnum {
  CREATED = 'created',
  ISSUED = 'issued',
  CANCELLED = 'cancelled',
}
@Entity('e_invoices')
@Index('idx_eInvoices_templateCode_serial_invoiceNo', [
  'templateCode',
  'serial',
  'invoiceNo',
])
export class EInvoice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Invoice, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @Column({ name: 'tax_code', type: 'varchar', length: 20, nullable: true })
  taxCode: string | null;

  @Column({
    name: 'template_code',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  templateCode: string | null;

  @Column({ name: 'serial', type: 'varchar', length: 20, nullable: true })
  serial: string | null;

  @Column({ name: 'invoice_no', type: 'varchar', length: 30, nullable: true })
  invoiceNo: string | null;

  @Column({
    name: 'issue_date',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  issueDate: Date;

  @Column({ name: 'status', type: 'enum', enum: eInvoiceStatusEnum })
  status: eInvoiceStatusEnum;

  @Column({ name: 'xml_url', type: 'varchar', length: 255, nullable: true })
  xmlUrl: string | null;

  @Column({ name: 'pdf_url', type: 'varchar', length: 255, nullable: true })
  pdfUrl: string | null;
}
