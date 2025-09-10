import { UserRole } from 'src/modules/auth/mappings/user-role/entities/user-role.entity';
import { AuditLog } from 'src/modules/core/audit-logs/entities/audit-log.entity';
import { Notification } from 'src/modules/core/notifications/entities/notification.entity';
import { Doctor } from 'src/modules/directory/doctor/entities/doctor.entity';
import { Staff } from 'src/modules/directory/staff/entities/staff.entity';
import { Attachment } from 'src/modules/shared/attachments/entities/attachment.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum roleUserEnum {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  NURSE = 'nurse',
  STAFF = 'staff',
  ADMIN = 'admin',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Attachment, (att) => att.user)
  attachments: Attachment[];

  @OneToMany(() => Notification, (noti) => noti.user)
  notification: Notification[];

  @OneToMany(() => AuditLog, (al) => al.user)
  auditLog: AuditLog[];

  @OneToMany(() => UserRole, (ur) => ur.user)
  userRoles: UserRole[];

  @OneToMany(() => Staff, (staff) => staff.user)
  staffs: Staff[];

  @OneToMany(() => Doctor, (doctor) => doctor.user)
  doctors: Doctor[];

  @Column({ name: 'username', type: 'varchar', length: 50, nullable: false })
  username: string;

  @Column({
    name: 'password_hash',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  passwordHash: string;

  @Column({
    name: 'full_name',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  fullName: string | null;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  email: string | null;

  @Column({
    name: 'phone',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  phone: string | null;

  @Column({
    name: 'role',
    type: 'enum',
    enum: roleUserEnum,
    default: roleUserEnum.PATIENT,
  })
  role: roleUserEnum;

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
