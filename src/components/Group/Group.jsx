import {Pressable, Text} from "react-native";
import {colors} from "../../constants/colors";

export function Group(props) {
    const {redirect, title, elements = []} = props

    return elements.map(({name, id}, index) => (
        <Pressable
            key={id}
            className={`min-h-[25vh] flex justify-center align-center p-16 rounded-xl mb-4 ${colors[index % colors.length]}`}
            onPress={() => redirect.navigate(redirect.viewName, {id})}
        >
            <Text className='text-4xl text-white text-center'>{name}</Text>
        </Pressable>
    ))
}