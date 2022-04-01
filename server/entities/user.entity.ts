import { Field, ObjectType } from "type-graphql";
import { Entity, Unique, Column } from "typeorm";
import { BaseModel } from "./base.model";

@Entity("user")
@Unique(["email", "username"])
@Unique(["username"])
@ObjectType()
export class User extends BaseModel {
  @Column({ type: "varchar", length: 20, nullable: false })
  @Field(() => String, { nullable: false })
  username: string;

  @Column({ type: "varchar", length: 64, nullable: false, select: false })
  @Field(() => String, { nullable: false })
  email: string;

  @Column({ type: "varchar", length: 500, nullable: false, select: false })
  password: string;

  @Column({ type: "bool", nullable: false, default: false, select: false })
  @Field(() => Boolean, { nullable: true })
  isApproved: boolean;

  @Column({ type: "bool", nullable: false, default: false })
  @Field(() => Boolean, { nullable: false })
  isPro: boolean;
}
