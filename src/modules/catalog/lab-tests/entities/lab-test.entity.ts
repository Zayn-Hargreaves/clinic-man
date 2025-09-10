import { LabOrder } from 'src/modules/clinical/lab-orders/entities/lab-order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lab_tests')
export class LabTest {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => LabOrder, (lo) => lo.labTest)
  labOrders: LabOrder[];

  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  price: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string | null;
}
