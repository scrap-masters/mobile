import {Text, View} from "react-native";

const Item = ({item, forLecturer}) => {
    return <View className='flex flex-row bg-white rounded w-full p-2 my-2'>
        <View className='justify-center items-center w-1/5'>
            <Text className='text-lg font-semibold'>{item.start.split("T")[1].slice(0, 5)}</Text>
            <Text className='text-lg font-semibold'>-</Text>
            <Text className='text-lg font-semibold'>{item.end.split("T")[1].slice(0, 5)}</Text>
        </View>
        <View className='w-4/5 flex-col justify-between'>
            <View className='flex-row'>
                <Text className='text-xl'>{item.title} ({item.type})</Text>
                <Text className='ml-auto text-2xl font-bold'>{item.room}</Text>
            </View>
            <View>
                <Text className='text-lg'>{forLecturer && item.group}</Text>
            </View>
        </View>
    </View>
}

export function CalendarAgenda(props) {
    const {lessons, forLecturer = false} = props

    return <View>
        {lessons?.map((lesson) => <Item key={lesson.id} forLecturer={forLecturer} item={lesson}/>)}
    </View>

}