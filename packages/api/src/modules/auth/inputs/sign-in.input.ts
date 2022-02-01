import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignInInput {
    @IsEmail()
    @MinLength(1)
    @MaxLength(64)
    @Field({ nullable: false, description: 'User email' })
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Field({ nullable: false, description: 'User password' })
    password: string;
}