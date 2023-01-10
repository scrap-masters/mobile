import {ScrollView, Text} from "react-native";
import {useGetFaculties} from "../../api/faculties";
import {Group} from "../../components/Group";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";

export function HomeView(props) {
    const {navigation} = props

    const {data: facultiesData, isLoading} = useGetFaculties()

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4'>
        <Header navigation={navigation} />
        <Group elements={facultiesData?.data} redirect={{
            navigate: navigation.navigate,
            viewName: "Fields"
        }}/>
        <Footer />
    </ScrollView>
}