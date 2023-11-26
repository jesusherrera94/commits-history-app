import { Controller, Get } from "@nestjs/common";

@Controller('user')
export class userController {

    @Get('getuser')
    getUser() {
        console.log('test method')
        return {test: 'method'}
    }

}