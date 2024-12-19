import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemberService } from '../member/member.service';
import { AuthService } from '../auth/auth.service';
import { Follower, Following } from '../../libs/dto/follow/follow';

@Injectable()
export class FollowService {
        constructor(
            @InjectModel("Follow") private readonly followModel: Model<Follower | Following>, 
            private memberService: MemberService,
            private authService: AuthService,
    ) {}
}
