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

export enum staffAttendanceShiftEnum {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  NIGHT = 'night',
}

@Entity('staff_attendance')
@Index('idx_staffAttendance_staff_date_shift', ['staff', 'date', 'shift'])
@Index('idx_staffAttendance_staff', ['staff'])
export class StaffAttendance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Staff, { nullable: true })
  @JoinColumn({ name: 'staff_id' })
  staff?: Staff;

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @Column({ name: 'shift', type: 'enum', enum: staffAttendanceShiftEnum })
  shift: staffAttendanceShiftEnum;

  @Column({ name: 'present', type: 'tinyint' })
  present: number;

  @Column({ name: 'note', type: 'text' })
  text: string;

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
