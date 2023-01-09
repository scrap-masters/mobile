import {TextInput, View} from "react-native";

export function SearchBar(props) {
    const {searchTerm,setSearchTerm, placeholder} = props

    return <View className='my-3'>
        <TextInput className='bg-white px-2 py-4 rounded-xl text-md' value={searchTerm} onChangeText={setSearchTerm} placeholder={placeholder} />
    </View>
}