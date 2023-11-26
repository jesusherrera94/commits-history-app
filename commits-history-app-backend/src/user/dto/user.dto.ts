import { IsNotEmpty } from "class-validator";

export class userRequestDTO {
    @IsNotEmpty()
    user: string;
}

export interface userDataDTO {
    profileUrl: string;
    name: string;
    location: string;
    creationDate: string;
    profileAvatar: string;
}
