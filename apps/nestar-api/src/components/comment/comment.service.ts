import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { ViewService } from '../view/view.service';
import { MemberService } from '../member/member.service';

@Injectable()
export class CommentService {
    constructor(
            @InjectModel("Comment") private readonly commnetModel: Model<Comment>, 
            private memberService: MemberService,
    ) {}
    
}
