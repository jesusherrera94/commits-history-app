import { Controller, Get, Query } from "@nestjs/common";
import { commitsService } from "./commits.service";
import { commitsRequestDTO } from "./dto/commits.dto";

@Controller('commits')
export class commitsController {

    constructor(
        private commitsService: commitsService,
    ) {}

    @Get('getcommits')
    getCommits(@Query() dto: commitsRequestDTO) {
        console.log(dto)
        return this.commitsService.getCommits(dto)
    }

}