import { Injectable } from '@nestjs/common';

@Injectable()
export class NestarBatchService {
  getHello(): string {
    return 'Welcom to Nestar-batch API Server!';
  }
}
