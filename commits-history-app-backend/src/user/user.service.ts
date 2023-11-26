import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { userRequestDTO, userDataDTO } from "./dto";
import requestHandler from "src/utils/responseHandler";

const GITHUB_API_URL = 'https://api.github.com/'

@Injectable({})
export class UserService {
    
    constructor(
        private readonly httpService: HttpService,
        ) {}

    async getUser(dto: userRequestDTO): Promise<userDataDTO> {
        try {
            const { user } = dto
            const url = `${GITHUB_API_URL}users/${user}`
            let userData = await firstValueFrom(this.httpService.get(url))
            
            const response: userDataDTO = {
                profileUrl: userData.data.html_url,
                name: userData.data.name,
                location: userData.data.location,
                creationDate: userData.data.created_at,
                profileAvatar: userData.data.avatar_url
            }

            return response
        } catch (error) {
            const ErrorMessage = `Error getting user info for ${dto.user} - ${error}`
            const statusCode = error.response.status
            requestHandler(statusCode, ErrorMessage)
        }
    }
}
