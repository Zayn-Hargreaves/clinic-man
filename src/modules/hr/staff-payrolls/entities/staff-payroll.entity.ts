import { Staff } from 'src/modules/directory/staff/entities/staff.entity';
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

@Entity('staff_payrolls')
@Index('idx_staffPayrolls_staff_month', ['staff', 'month'])
@Index('idx_staffPayrolls_staff', ['staff'])
export class StaffPayroll {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Staff, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'staff_id' })
  staff: Staff;

  @Column({ name: 'month', type: 'year', nullable: true })
  month: number | null;

  @Column({ name: 'total_shift', type: 'int', nullable: true })
  totalShift: number | null;

  @Column({ name: 'bonus', type: 'decimal', precision: 12, scale: 2 })
  bonus: number;

  @Column({ name: 'deduction', type: 'decimal', precision: 12, scale: 2 })
  deduction: number;

  @Column({ name: 'net_salary', type: 'decimal', precision: 12, scale: 2 })
  netSalary: number;

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
