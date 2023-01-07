import {ScrollView, Text} from "react-native";
import {useGetFacultyFields} from "../../api/faculties";
import {FieldsGroup} from "../../components/FieldsGroup";

export function FieldsView(props) {
    const {navigation, route} = props
    const {id} = route.params

    const {data: fieldsData, isLoading} = useGetFacultyFields(id)

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4 mt-4'>
        <FieldsGroup elements={fieldsData.data.fields} redirect={{
            navigate: navigation.navigate,
            viewName: "Specializations"
        }}/>
    </ScrollView>
}