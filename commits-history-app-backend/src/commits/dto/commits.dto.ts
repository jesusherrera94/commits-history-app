import { IsNotEmpty, IsNumber } from "class-validator";

export class commitsRequestDTO {
    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    repo: string;

    @IsNotEmpty()
    perPage: number;
    
    @IsNotEmpty()
    page: number

    token: string
}

export interface commitsDataDTO {
    sha: string;
    author: Object;
    url: string;
    message: string;
    nextUrl: string;
}
