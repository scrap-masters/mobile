import {Pressable, Text, View} from "react-native";
import {colors} from "../../constants/colors";
import {useState} from "react";
import SwitchSelector from "react-native-switch-selector";

export function FieldsGroup(props) {
    const {redirect, title, elements = []} = props

    const [typeOfStudies, setTypeOfStudies] = useState("fullTime")

    return <View>
        <View className='mb-2 flex-row items-center'>
            <SwitchSelector
                initial={0}
                options={[{label: "Stacjonarne", value: "fullTime"}, {label: "Zaoczne", value: "partTime"}]}
                onPress={setTypeOfStudies}
            />
        </View>
        {elements.filter(({isFullTime}) => typeOfStudies === "fullTime" ? isFullTime : !isFullTime)
            .map(({name, year, id}, index) => (
                <Pressable
                    key={id}
                    className={`min-h-[25vh] flex justify-center align-center p-16 rounded-xl mb-4 ${colors[index % colors.length]}`}
                    onPress={() => redirect.navigate(redirect.viewName, {id})}
                >
                    <Text className='text-4xl text-white text-center'>{name} - {year}</Text>
                </Pressable>
            ))}
    </View>
}