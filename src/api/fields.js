import {useFetch} from "../utils/reactQuery.utils"
import {apiRoutes} from "../constants/api"
import {pathToUrl} from "../utils/routes.utils"

export const useGetFiels = () => useFetch(apiRoutes.getFields)

export const useGetField = (id) =>
    useFetch(pathToUrl(apiRoutes.getField, {id}))

export const useGetFieldSpecializations = (id) =>
    useFetch(pathToUrl(apiRoutes.getFieldSpecializations, {id}))
