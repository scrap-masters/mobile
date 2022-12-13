import {ScrollView, Text} from "react-native";
import {useGetFaculties} from "../../api/faculties";
import {Group} from "../../components/Group";

export function HomeView(props) {
    const {navigation} = props

    const {data: facultiesData, isLoading} = useGetFaculties()

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4 mt-4'>
        <Group elements={facultiesData.data} navigate={navigation.navigate}/>
    </ScrollView>
}