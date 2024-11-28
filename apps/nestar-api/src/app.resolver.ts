import { Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";


@Resolver()
export class AppResolver {
    @Query(() => String)
    public sayHello(): string {
        return "GraphQL API Server!";
    }
}