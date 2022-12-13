import axios from "axios"

// THIS PROBABLY SHOULD BE IN .ENV FILE
const baseURL = "https://backend.scrapmasters.site/api/v1"

export const api = {
    get: (url, params) =>
        axios.get(baseURL + url, {
            ...params
        })
}
