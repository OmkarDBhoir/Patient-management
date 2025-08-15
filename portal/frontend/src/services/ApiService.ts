import axios from "axios";
import { BaseConstants } from "../Utils/BaseConstants";


const apiService = axios.create({
    baseURL: BaseConstants.BASE_URL,
    withCredentials: true,
    headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
    },
});


export default apiService;