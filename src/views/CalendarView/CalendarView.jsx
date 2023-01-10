import {Calendar} from "../../components/Calendar";
import {
    useGetSpecialization,
    useGetSpecializationLegend,
    useGetSpecializationTimetable
} from "../../api/specializations";
import {useEffect, useMemo, useState} from "react";
import { ScrollView, Text, View} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import {CalendarAgenda} from "../../components/CalendarAgenda";
import {A} from '@expo/html-elements'
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

const MyA = ({style, href, children}) => <A style={style} href={href}>{children}</A>

export function CalendarView(props) {
    const {route, navigation} = props
    const {id} = route.params
    const [group, setGroup] = useState(null)
    const [selectedDay, setSelectedDay] = useState("")

    const {data} = useGetSpecializationTimetable(id)

    const {data: legendData} = useGetSpecializationLegend(id)

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


    return <ScrollView className='px-4'>
        <Header navigation={navigation} />
        <View className='justify-between items-center flex-row my-2'>
            <Text className='text-xl font-semibold'>{specializationData?.data.name}</Text>
            <MyA href={`https://plan.collegiumwitelona.com.pl/calendar/${id}/${group}`}
                 className='bg-gray-500 p-2 rounded block text-white'>
                Export to CSV
            </MyA>
        </View>
        {switchOptions && <SwitchSelector options={switchOptions} initial={0} onPress={setGroup}/>}
        <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} timetable={filteredTimetable}/>
        <CalendarAgenda lessons={currentDayLessons}/>
        <View className='mb-6 mt-4'>
            {legendData?.data?.legend.map((item) => (
                <View className='flex-row' key={item.id}>
                    <View className='w-1/4 p-2 border-2 border-gray-500 justify-center items-center'>
                        <Text className='font-bold'>{item.slug}</Text>
                    </View>
                    <View className='w-3/4 p-2 border-y-2 border-r-2 border-gray-500'>
                        <Text>{item.fullName}</Text>
                    </View>
                </View>))}
        </View>
        <Footer />
    </ScrollView>
}