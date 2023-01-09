import {Calendar} from "../../components/Calendar";
import {
    useGetSpecialization,
    useGetSpecializationLegend,
    useGetSpecializationTimetable
} from "../../api/specializations";
import {useEffect, useMemo, useState} from "react";
import {Pressable, Text, View} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import {CalendarAgenda} from "../../components/CalendarAgenda";
import {A} from '@expo/html-elements'

const MyA = ({style, href, children}) => <A style={style} href={href}>{children}</A>

export function CalendarView(props) {
    const {route} = props
    const {id} = route.params
    const [group, setGroup] = useState(null)
    const [selectedDay, setSelectedDay] = useState("")

    const {data} = useGetSpecializationTimetable(id)

    // const {data: legendData} = useGetSpecializationLegend(id)

    const {data: specializationData} = useGetSpecialization(id)

    const timetableData = data?.data.timetable

    const groups = timetableData?.map((event) => event.group)

    const filteredGroups = groups?.filter((group, index) => groups.indexOf(group) === index)

    const filteredTimetable = timetableData?.filter((event) => event.group === group)

    const currentDayLessons = filteredTimetable?.filter(({start}) => start.split("T")[0] === selectedDay)

    const switchOptions = useMemo(() => filteredGroups?.map((group) => ({
        label: group,
        value: group
    })), [filteredGroups])

    useEffect(() => {
        setGroup(data?.data.timetable[0].group)
    }, [data])


    return <View>
        {switchOptions && <SwitchSelector options={switchOptions} initial={0} onPress={setGroup}/>}
        <View className='justify-between items-center flex-row mt-2 mx-2'>
            <Text className='text-xl font-semibold'>{specializationData?.data.name}</Text>
            <MyA href={`https://plan.collegiumwitelona.com.pl/calendar/${id}/${group}`}
                 className='bg-gray-500 p-2 rounded block text-white'>
                Export to CSV
            </MyA>
        </View>
        <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} timetable={filteredTimetable}/>
        <CalendarAgenda lessons={currentDayLessons}/>
    </View>
}