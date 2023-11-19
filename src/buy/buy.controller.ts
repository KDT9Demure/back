import { Controller } from '@nestjs/common';
import { BuyService } from './buy.service';

@Controller('buy')
export class BuyController {
    constructor(
        private buyService:BuyService,
    ){}
}
