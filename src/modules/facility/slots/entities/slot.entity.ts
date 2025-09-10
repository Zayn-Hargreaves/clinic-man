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
import { Room } from '../../rooms/entities/room.entity';

export enum slotStatusEnum {
  AVAILABLE = 'available',
  BOOKED = 'booked',
  COMPLETED = 'completed',
}

@Entity('slots')
@Index('idx_slots_room_startTime', ['room', 'startTime'])
@Index('idx_slots_room', ['room'])
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, { nullable: true })
  @JoinColumn({ name: 'room_id' })
  room?: Room;

  @Column({
    name: 'start_time',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  startTime: Date;

  @Column({ name: 'end_time', type: 'datetime' })
  endTime: Date;

  @Column({
    name: 'status',
    type: 'enum',
    enum: slotStatusEnum,
    default: slotStatusEnum.AVAILABLE,
  })
  status: slotStatusEnum;

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
