import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import { StaffAttendance } from 'src/modules/hr/staff-attendance/entities/staff-attendance.entity';
import { StaffPayroll } from 'src/modules/hr/staff-payrolls/entities/staff-payroll.entity';
import { StaffSchedule } from 'src/modules/scheduling/staff-schedules/entities/staff-schedule.entity';
import { User } from 'src/modules/users/entities/user.entity';
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

export enum staffTypeEnum {
  NURSE = 'nurse',
  TECHNICIAN = 'technician',
  RECEPTIONIST = 'receptionist',
  PHARMACIST = 'pharmacist',
  ADMIN = 'admin',
}

@Entity('staffs')
@Index('idx_staff_user', ['user'])
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => StaffSchedule, (sc) => sc.staff)
  staffSchedules: StaffSchedule[];

  @OneToMany(() => StaffPayroll, (sp) => sp.staff)
  staffPayrolls: StaffPayroll[];

  @OneToMany(() => StaffAttendance, (staffAttendance) => staffAttendance.staff)
  staffAttendances: StaffAttendance[];

  @OneToMany(() => Appointment, (appointment) => appointment.staff)
  appointments: Appointment[];

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'staff_type', type: 'enum', enum: staffTypeEnum })
  staffType: staffTypeEnum;

  @Column({ name: 'active', type: 'tinyint', default: 1 })
  active: number;

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
