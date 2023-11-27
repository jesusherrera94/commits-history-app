import axios from "axios";
import { commitsInterface } from "../types/commitsResponse";

const getCommitsService =  (user: string, repo: string, token: string, perPage: string, page: string): Promise<Array<commitsInterface>> => {
    return new Promise((res,rej) => {
        const params = {
            user,
            repo,
            perPage,
            page,
            token
        }
        axios.get(`${import.meta.env.VITE_BACKEND_PORT}commits/getcommits`, { params })
        .then((response) =>{ 
            res(response.data)
        })
        .catch((err) => {
            rej(err)
        })
    })
}

export default getCommitsService;