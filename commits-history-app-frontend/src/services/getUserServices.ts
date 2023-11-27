import axios from "axios";
import { userInterface } from "../types/userResponse";

const getUserServices =  (user: string, token: string): Promise<userInterface> => {
    return new Promise((res,rej) => {
        const params = {
            user,
            token
        }
        axios.get(`${import.meta.env.VITE_BACKEND_PORT}user/getuser`, { params })
        .then((response) =>{ 
            res(response.data)
        })
        .catch((err) => {
            console.log(JSON.stringify(err))
            rej(err)
        })
    })
}

export default getUserServices;