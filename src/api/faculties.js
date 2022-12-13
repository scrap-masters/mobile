import {useFetch} from "../utils/reactQuery.utils"
import {apiRoutes} from "../constants/api"
import {pathToUrl} from "../utils/routes.utils"

export const useGetFaculties = () =>
    useFetch(apiRoutes.getFaculties)

export const useGetFaculty = (id) =>
    useFetch(pathToUrl(apiRoutes.getFaculty, {id}))

export const useGetFacultyFields = (id) =>
    useFetch(pathToUrl(apiRoutes.getFacultyFields, {id}))
