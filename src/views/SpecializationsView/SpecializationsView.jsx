import {ScrollView, Text, View} from "react-native";
import {Group} from "../../components/Group";
import {useGetFieldSpecializations} from "../../api/fields";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

export function SpecializationsView(props) {
    const {navigation, route} = props
    const {id} = route.params

    const {data: specializationsData, isLoading} = useGetFieldSpecializations(id)

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4 flex flex-col flex-1'>
        <Header navigation={navigation}/>
        <View className='min-h-[65vh]'>
            <Group elements={specializationsData.data.specializations} redirect={{
                navigate: navigation.navigate,
                viewName: "Calendar"
            }}/>
        </View>
        <Footer/>
    </ScrollView>
}