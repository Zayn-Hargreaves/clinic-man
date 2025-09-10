import { PharmacySale } from 'src/modules/pharmacy-sales/entities/pharmacy-sale.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('medications')
export class Medication {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => PharmacySale, (ps) => ps.medication)
  pharmacySale: PharmacySale[];

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ name: 'unit', type: 'varchar', length: 50, nullable: true })
  unit: string | null;

  @Column({ name: 'price', type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;

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
