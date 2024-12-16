import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BoardArticleService } from './board-article.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Query, UseGuards } from '@nestjs/common';
import { BoardArticle, BoardArticles } from '../../libs/dto/board-article/board-article';
import { BoardArticleInput, BoardArticlesInquiry } from '../../libs/dto/board-article/board-article.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { WithoutGuard } from '../auth/guards/without.guard';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { BoardArticleUpdate } from '../../libs/dto/board-article/board-article.update';

@Resolver()
export class BoardArticleResolver {
     constructor(private readonly boardArticleService: BoardArticleService) {}

      @UseGuards(AuthGuard)
        @Mutation((returns) => BoardArticle)
        public async createBoardArticle(
         @Args("input") input: BoardArticleInput,
         @AuthMember("_id") memberId: ObjectId,
        ): Promise<BoardArticle> {
          console.log("Mutation: createBoardArticle");
          return await this.boardArticleService.createBoardArticle(memberId, input);
        } 
     
        @UseGuards(WithoutGuard)
        @Mutation((returns) => BoardArticle)
        public async getBoardArticle(
         @Args("articleId") input: string,
         @Query("_id") memberId: ObjectId,
        ): Promise<BoardArticle> {
          console.log("Query: getBoardArticle");
          const articleId =shapeIntoMongoObjectId(input);
          return await this.boardArticleService.getBoardArticle(memberId, articleId);
        } 

        @UseGuards(AuthGuard)
        @Mutation(() => BoardArticle)
        public async updateBoardArticle(
         @Args("input") input: BoardArticleUpdate,
         @AuthMember("_id") memberId: ObjectId,
        ): Promise<BoardArticle> {
          console.log("Mutation: updateBoardArticle");
          input._id = shapeIntoMongoObjectId(input._id);
          return await this.boardArticleService.updateBoardArticle(memberId, input);
        } 

        @UseGuards(WithoutGuard)
        @Mutation((returns) => BoardArticles)
        public async getBoardArticles(
         @Args("input") input: BoardArticlesInquiry,
         @Query("_id") memberId: ObjectId,
        ): Promise<BoardArticles> {
          console.log("Query: getBoardArticles");
          return await this.boardArticleService.getBoardArticles(memberId, input);
        } 

    
}
