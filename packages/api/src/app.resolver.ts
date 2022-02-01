import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
    constructor(private readonly appService: AppService) { }

    @Query(() => String)
    async getHello() {
        return this.appService.getHello();
    }
}