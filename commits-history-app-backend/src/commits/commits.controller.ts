import { Body, Controller, Get, Headers } from "@nestjs/common";
import { commitsService } from "./commits.service";
import { commitsRequestDTO } from "./dto/commits.dto";

@Controller('commits')
export class commitsController {

    constructor(
        private commitsService: commitsService,
    ) {}

    @Get('getcommits')
    getCommits(@Body() dto: commitsRequestDTO) {
        return this.commitsService.getCommits(dto)
    }

}