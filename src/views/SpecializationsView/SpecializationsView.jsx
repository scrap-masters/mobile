import {ScrollView, Text} from "react-native";
import {Group} from "../../components/Group";
import {useGetFieldSpecializations} from "../../api/fields";

export function SpecializationsView(props) {
    const {navigation, route} = props
    const {id} = route.params

    const {data: specializationsData, isLoading} = useGetFieldSpecializations(id)

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4 mt-4'>
        <Group elements={specializationsData.data.specializations} redirect={{
            navigate: navigation.navigate,
            viewName: "Calendar"
        }}/>
    </ScrollView>
}