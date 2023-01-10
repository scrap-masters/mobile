import axios from "axios"
import { API_URL } from '@env'

const baseURL = API_URL

export const api = {
    get: (url, params) =>
        axios.get(baseURL + url, {
            ...params
        })
}
