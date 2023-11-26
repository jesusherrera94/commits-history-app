import axios from "axios";
import { userInterface } from "../types/userResponse";

const getUserServices =  (): Promise<userInterface> => {
    return new Promise((res,rej) => {
        axios.get('http://localhost:3000/user/getuser')
        .then((response) =>{
             res(response.data)
        })
        .catch((err) => {
            rej(err)
        })
    })
}

export default getUserServices;