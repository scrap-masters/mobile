import {Pressable, Switch, Text, View} from "react-native";
import {colors} from "../../constants/colors";
import {useState} from "react";

export function FieldsGroup(props) {
    const {navigate, title, elements = []} = props

    const [isFullTimeOn, toggleFullTimeOn] = useState(false)
    const toggleSwitch = () => toggleFullTimeOn(prev => !prev)

    return <View>
        <View className='mb-2 flex-row items-center'>
            <Text>Stacjonarne</Text>
            <Switch onValueChange={toggleSwitch} value={isFullTimeOn}
                    trackColor={{false: "#aaa", true: "#aaa"}}
                    className='mx-4'/>
            <Text>Zaoczne</Text>
        </View>
        {elements.filter(({isFullTime}) => !isFullTime === isFullTimeOn).map(({name, year, id}, index) => (
            <Pressable
                key={id}
                className={`min-h-[25vh] flex justify-center align-center p-16 rounded-xl mb-4 ${colors[index % colors.length]}`}
                onPress={() => navigate("Fields", {id})}
            >
                <Text className='text-4xl text-white text-center'>{name} - {year}</Text>
            </Pressable>
        ))}
    </View>
}