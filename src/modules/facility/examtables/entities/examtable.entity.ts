import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Room } from '../../rooms/entities/room.entity';

export enum examTableStatusEnum {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
}

@Entity('exam_table')
@Index('idx_examTable_room', ['room'])
export class Examtable {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'room_id' })
  room: Room;

  @Column({ name: 'table_number', type: 'varchar', length: 20, nullable: true })
  tableNumber: string;

  @Column({ name: 'status', type: 'enum', enum: examTableStatusEnum })
  status: examTableStatusEnum;
}
