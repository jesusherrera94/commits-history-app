import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { userRequestDTO, userResponseDTO } from "./dto";

const GITHUB_API_URL = 'https://api.github.com/'

@Injectable({})
export class UserService {
    
    constructor(private readonly httpService: HttpService) {}

    async getUser(dto: userRequestDTO): Promise<userResponseDTO> {
        const { user } = dto
        const url = `${GITHUB_API_URL}users/${user}`
        let response = await firstValueFrom(this.httpService.get(url))
        const userResponse: userResponseDTO = {
            profileUrl: response.data.html_url,
            name: response.data.name,
            location: response.data.location,
            creationDate: response.data.created_at,
            profileAvatar: response.data.avatar_url
        }
        return userResponse
    }
}
