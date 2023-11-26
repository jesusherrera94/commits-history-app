import { Body, Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { userRequestDTO } from "./dto";

@Controller('user')
export class UserController {
    
    constructor(
        private userService: UserService,
    ) {}

    @Get('getuser')
    getUser(@Body() dto: userRequestDTO) {
        return this.userService.getUser(dto);
    }

    @Get('getcommits')
    getCommits() {
        console.log('test method')
        return {test: 'method'}
    }

}