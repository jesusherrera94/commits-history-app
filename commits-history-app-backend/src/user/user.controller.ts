import { Controller, Get, Query} from "@nestjs/common";
import { UserService } from "./user.service";
import { userRequestDTO } from "./dto";

@Controller('user')
export class UserController {
    
    constructor(
        private userService: UserService,
    ) {}

    @Get('getuser')
    getUser(@Query() dto: userRequestDTO) {
        return this.userService.getUser(dto);
    }

}