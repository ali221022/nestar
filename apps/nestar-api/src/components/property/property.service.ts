import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ViewService } from '../view/view.service';
import { AuthService } from '../auth/auth.service';
import { Model } from 'mongoose';

@Injectable()
export class PropertyService {
    constructor(
        @InjectModel("Property") private readonly propertyModel: Model<null>, 
        private authService: AuthService,
        private viewService: ViewService,
) {}

}
