import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { pathToUrl } from "../utils/routes.utils"

export const useGetLecturers = () =>
    useFetch(apiRoutes.getLecturers)

export const useGetLecturersPlan = (name) =>
    useFetch(
        pathToUrl(apiRoutes.getLecturersPlan, { name })
    )
