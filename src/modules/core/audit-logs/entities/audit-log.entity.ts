import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('audit_logs')
@Index('idx_auditLog_user', ['user'])
@Index('idx_auditLog_targetTable', ['targetTable'])
@Index('idx_auditLog_targetId', ['targetId'])
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'action', type: 'varchar', length: 100, nullable: true })
  action: string | null;

  @Column({
    name: 'target_table',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  targetTable: string | null;

  @Column({
    name: 'target_id',
    type: 'int',
    nullable: true,
  })
  targetId: number;

  @Column({
    name: 'before_data',
    type: 'text',
    nullable: true,
  })
  beforeData: string;

  @Column({
    name: 'after_data',
    type: 'text',
    nullable: true,
  })
  afterData: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy?: number;
}
