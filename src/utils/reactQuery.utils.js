import {api} from "./api.utils"
import {useQuery} from "react-query"

export const fetcher = async ({queryKey}) => {
    const [url, params] = queryKey
    const response = await api.get(url, {params: {...params}})
    return response.data
}

export const useFetch = (
    url,
    params,
    config
) => {
    return useQuery(
        [url, params],
        ({queryKey}) => fetcher({queryKey}),
        {
            enabled: !!url,
            ...config
        }
    )
}
