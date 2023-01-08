import {ScrollView, Text} from "react-native";
import {useGetFacultyFields} from "../../api/faculties";
import {FieldsGroup} from "../../components/FieldsGroup";
import {SearchBar} from "../../components/SearchBar";
import {useEffect, useState} from "react";

export function FieldsView(props) {
    const {navigation, route} = props
    const {id} = route.params
    const [searchTerm,setSearchTerm] = useState("")

    const {data: fieldsData, isLoading} = useGetFacultyFields(id)
    const [fields,setFields] = useState([])

    useEffect(() => {
        if (searchTerm === "") setFields(fieldsData?.data?.fields)
        else {
            const filteredFields = fieldsData?.data?.fields.filter((field) => field.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setFields(filteredFields)
        }
    },[searchTerm])

    useEffect(() => {
        setFields(fieldsData?.data?.fields)
    },[fieldsData])

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4 mt-4'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <FieldsGroup elements={fields} redirect={{
            navigate: navigation.navigate,
            viewName: "Specializations"
        }}/>
    </ScrollView>
}