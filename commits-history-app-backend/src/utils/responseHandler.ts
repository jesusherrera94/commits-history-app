import { ForbiddenException, NotFoundException, UnauthorizedException } from "@nestjs/common";

const requestHandler = (statusCode: number, errorMessage: string) => {
    if (statusCode == 404) throw new NotFoundException(errorMessage);
    if (statusCode == 401) throw new UnauthorizedException(errorMessage);
    if (statusCode == 403) throw new ForbiddenException(errorMessage);
    if (statusCode == 500 || statusCode == 503) throw new ForbiddenException(errorMessage);
}

export default requestHandler