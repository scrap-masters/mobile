import {ScrollView,Text} from "react-native";
import {Group} from "../../components/Group";
import {useGetLecturers} from "../../api/lecturers";

export function LecturersView(props) {
    const { navigation } = props

    const { data: lecturersData, isLoading } = useGetLecturers()

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView>
        <Group elements={lecturersData.data.data}}/>
        <Text>Lecturers</Text>
    </ScrollView>
}