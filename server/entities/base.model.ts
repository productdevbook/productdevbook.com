import { Field, ID, ObjectType } from "type-graphql";
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@ObjectType()
export class BaseModel extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(()=> Date,{ nullable: true })
  @CreateDateColumn({ type: "timestamptz", nullable: true })
  createdAt: Date;

  @Field(()=> Date, { nullable: true })
  @UpdateDateColumn({ type: "timestamptz", nullable: true })
  updatedAt?: Date;
}
