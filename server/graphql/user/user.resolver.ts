import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Mutation,
  Args,
  FieldResolver,
  Info,
  Root,
} from "type-graphql";
import { User } from "~/server/entities/user.entity";
import { CreateUserInput } from "./dto/user-create.input";

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  me() {
    return {};
  }
  @Mutation(() => User)
  async createUser(
    @Arg('data') data: CreateUserInput,
    @Ctx() ctx: any,
    @Info() info: any,
    @Root() root: any
  ): Promise<User> {
    const user = new User();
    user.username = data.username;
    user.email = data.email;
    user.password = data.password;
    user.isPro = data.isPro;
    user.isApproved = data.isApproved;
    await user.save();
    return user;
  }
}
