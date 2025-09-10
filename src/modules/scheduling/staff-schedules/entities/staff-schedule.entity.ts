import { Staff } from 'src/modules/directory/staff/entities/staff.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('staff_schedules')
@Index('idx_staffSchedule_staff_dayOfWeek_startTime', [
  'staff',
  'dayOfWeek',
  'startTime',
])
@Index('idx_staffSchedule_staff', ['staff'])
export class StaffSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Staff, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'staff_id' })
  staff: Staff;

  @Column({ name: 'day_of_week', type: 'tinyint', nullable: true })
  dayOfWeek: number | null;

  @Column({ name: 'start_time', type: 'time', nullable: true })
  startTime: string | null;

  @Column({ name: 'end_time', type: 'time', nullable: true })
  endTime: string | null;

  @Column({ name: 'active', type: 'tinyint', default: 1 })
  active: number;
}
