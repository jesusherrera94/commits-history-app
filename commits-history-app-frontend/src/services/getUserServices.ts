import axios from "axios";
import { userInterface } from "../types/userResponse";

const getUserServices =  (user: string, token: string): Promise<userInterface> => {
    return new Promise((res,rej) => {
        const params = {
            user,
            token //: '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'
        }
        console.log(params)
        axios.get('http://localhost:3000/user/getuser', { params })
        .then((response) =>{ 
            res(response.data)
        })
        .catch((err) => {
            rej(err)
        })
    })
}

export default getUserServices;