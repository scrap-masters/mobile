import {FlatList, Pressable, ScrollView, Text, View} from "react-native";
import {useGetLecturers} from "../../api/lecturers";
import {useEffect, useState} from "react";
import {SearchBar} from "../../components/SearchBar";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

export function LecturersView(props) {
    const {navigation} = props
    const [searchTerm, setSearchTerm] = useState("")
    const [lecturers, setLecturers] = useState([])

    const {data: lecturersData, isLoading} = useGetLecturers()

    useEffect(() => {
        if (!isLoading) setLecturers(lecturersData.data)
    }, [lecturersData])

    useEffect(() => {
        if (searchTerm === "") {
            setLecturers(lecturersData?.data)
        } else {
            setLecturers(lecturersData?.data?.filter((lecturer) =>
                lecturer.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        }
    }, [searchTerm, lecturersData])

    const renderItem = ({item}) => <Item item={item}/>

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4'>
        <Header/>
        <SearchBar placeholder='Szukaj pracownika...' searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <View className='min-h-[55vh]'>
            {lecturers?.map((lecturer) =>
                <Pressable className='mb-1' key={lecturer} onPress={() => navigation.navigate("LecturerCalendar", {lecturer})}>
                    <Text className='text-blue-500 font-medium text-xl'>{lecturer}</Text>
                </Pressable>)}
        </View>
        <Footer/>
    </ScrollView>
}