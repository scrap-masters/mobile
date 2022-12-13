import {useFetch} from "../utils/reactQuery.utils"
import {apiRoutes} from "../constants/api"
import {pathToUrl} from "../utils/routes.utils"

export const useGetSpecialziations = () =>
    useFetch(apiRoutes.getSpecializations)

export const useGetSpecialization = (id) =>
    useFetch(pathToUrl(apiRoutes.getSpecialization, {id}))

export const useGetSpecializationTimetable = (id) =>
    useFetch(
        pathToUrl(apiRoutes.getSpecializationTimetable, {id})
    )

export const useGetSpecializationLegend = (id) =>
    useFetch(pathToUrl(apiRoutes.getSpecializationLegend, {id}))
