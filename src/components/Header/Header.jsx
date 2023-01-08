import {Pressable, Text, View} from "react-native";

export function Header(props) {
    const { navigation } = props
    return <View className='bg-black py-8 mb-3 w-screen -ml-4 px-4 flex-row justify-between'>
        <Pressable onPress={() => navigation.navigate("Home")}>
            <Text className='text-white text-lg font-semibold'>Harmonogramy zajęć</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Lecturers")}>
            <Text className='text-white text-lg font-semibold'>Szukaj pracownika</Text>
        </Pressable>
    </View>
}