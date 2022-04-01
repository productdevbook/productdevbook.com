import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false, description: "User email" })
  username: string;

  @IsEmail()
  @MinLength(1)
  @MaxLength(64)
  @Field(() => String, { nullable: false, description: "User email" })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Field(() => String, { nullable: false, description: "User password" })
  password: string;

  @Field(() => Boolean, { nullable: false, description: "User email" })
  isPro: boolean;


  @Field(() => Boolean, { nullable: false, description: "User email" })
  isApproved: boolean;

}
