import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInInput } from './inputs/sign-in.input';

@Resolver()
export class AuthResolver {
  @Mutation(() => String)
  async signIn(@Args('data') data: SignInInput) {
    console.log(data);
    return 'Token';
  }
}
