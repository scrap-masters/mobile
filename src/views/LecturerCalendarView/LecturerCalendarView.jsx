import {ScrollView, Text, View} from "react-native";
import {useGetLecturersPlan} from "../../api/lecturers";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Calendar} from "../../components/Calendar";
import {useState} from "react";
import {CalendarAgenda} from "../../components/CalendarAgenda";

export function LecturerCalendarView(props) {
    const {route, navigation} = props
    const {lecturer} = route.params
    const {data, isLoading} = useGetLecturersPlan(lecturer)
    const [selectedDay, setSelectedDay] = useState("")

    const timetableData = data?.data.timetable

    const currentDayLessons = timetableData?.filter(({start}) => start.split("T")[0] === selectedDay)

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4'>
        <Header navigation={navigation}/>
        <Text className='text-xl font-semibold'>{lecturer}</Text>
        <View className='min-h-[65vh]'>
            <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} timetable={timetableData}/>
            <CalendarAgenda lessons={currentDayLessons} forLecturer={true}/>
        </View>
        <Footer/>
    </ScrollView>
}