import axios from "axios";
import { commitsArray, commitsInterface } from "../types/commitsResponse";

const getCommitsService =  (user: string, repo: string, token: string, perPage: string, page: string): Promise<Array<commitsInterface>> => {
    return new Promise((res,rej) => {
        const params = {
            user,
            repo,
            perPage,
            page,
            token
        }
        console.log(params)
        axios.get('http://localhost:3000/commits/getcommits', { params })
        .then((response) =>{ 
            res(response.data)
        })
        .catch((err) => {
            rej(err)
        })
    })
}

export default getCommitsService;