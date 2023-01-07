import {Text, View} from "react-native";
import {Calendar as RNCalendar, Agenda, LocaleConfig} from 'react-native-calendars'

LocaleConfig.locales['pl'] = {
    monthNames: [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień"
    ],
    dayNames: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
    dayNamesShort: ['Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.', 'Nd.'],
    today: "Dzisiaj",
    // monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
}
LocaleConfig.defaultLocale = 'pl'

const lessonOne = {key: 'lessonOne', color: 'red'}
const lessonTwo = {key: "lessonTwo", color: "purple"}

export function Calendar() {
    return <View className='mt-2'>
        <RNCalendar
            markingType={'multi-dot'}
            markedDates={{
                '2023-01-04': {dots: [lessonOne]},
                "2023-01-03": {dots: [lessonOne, lessonTwo]}
            }}
        />
        {/*<Agenda items={{}} />*/}
    </View>
}