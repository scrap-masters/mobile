import {Calendar} from "../../components/Calendar";
import {
    useGetSpecialization,
    useGetSpecializationLegend,
    useGetSpecializationTimetable
} from "../../api/specializations";
import {useEffect, useMemo, useState} from "react";
import {Text, View} from "react-native";
import SwitchSelector from "react-native-switch-selector";

export function CalendarView(props) {
    const {route} = props
    const {id} = route.params
    const [group, setGroup] = useState(null)

    const {data} = useGetSpecializationTimetable(id)

    // const {data: legendData} = useGetSpecializationLegend(id)

    // const {data: specializationData} = useGetSpecialization(id)

    const timetableData = data?.data.timetable

    const groups = timetableData?.map((event) => event.group)

    const filteredGroups = groups?.filter((group, index) => groups.indexOf(group) === index)

    const filteredTimetable = timetableData?.filter((event) => event.group === group)

    const switchOptions = useMemo(() => filteredGroups?.map((group) => ({
        label: group,
        value: group
    })), [filteredGroups])

    // useEffect(() => {
    //     setGroup(data?.data.timetable[0].group)
    // }, [data])

    return <View>
        {switchOptions && <SwitchSelector options={switchOptions} initial={0} onPress={setGroup}/>}
        <Calendar/>
    </View>
}