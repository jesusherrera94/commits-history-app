import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { commitsDataDTO, commitsRequestDTO } from "./dto/commits.dto";
import requestHandler from "src/utils/responseHandler";

const GITHUB_API_URL = 'https://api.github.com/'

@Injectable({})
export class commitsService {

    constructor(private readonly httpService: HttpService) {}

    async getCommits(dto: commitsRequestDTO): Promise<commitsDataDTO> {
        try {
            const { user, repo, perPage, page, token } = dto

            const headers = {
                Authorization: `Bearer ${token}`,
              };
            const params: object = {
                per_page: perPage,
                page
            }
            const url = `${GITHUB_API_URL}repos/${user}/${repo}/commits`
            let userData = await firstValueFrom(this.httpService.get(url, { params, headers }))
            
            let nextUrl: string = '';
            const pages: string = userData.headers.link
            const pagesRemaining: Boolean = pages && pages.includes(`rel=\"next\"`);
           

            if (pagesRemaining) {
                nextUrl = pages.match(/(?<=<)([\S]*)(?=>; rel="Next")/i)[0];
            }

            const response: commitsDataDTO = userData.data.map((obj) => {
                return {
                    sha: obj.sha,
                    author: obj.commit.author,
                    url: obj.html_url,
                    message: obj.commit.message,
                    nextUrl
                }
            });
    
            return response
        } catch (error) {
            const ErrorMessage = `Error getting user info for ${dto.user} - ${error}`
            const statusCode = error.response.status
            requestHandler(statusCode, ErrorMessage)
        }
    }

}