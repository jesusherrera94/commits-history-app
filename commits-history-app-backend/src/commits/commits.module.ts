import { Module } from '@nestjs/common';
import { commitsController } from './commits.controller';
import { commitsService } from './commits.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    controllers: [commitsController],
    providers: [commitsService],
    imports: [HttpModule]
})
export class CommitsModule {}
