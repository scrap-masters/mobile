import {Text, View} from "react-native";
import {Calendar as RNCalendar, Agenda, LocaleConfig} from 'react-native-calendars'
import {useMemo} from "react";

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
}
LocaleConfig.defaultLocale = 'pl'

export function Calendar(props) {
    const {setSelectedDay, selectedDay, timetable} = props

    const timetableMarked = useMemo(() => timetable?.reduce((obj, item) => Object.assign(obj, {
        [item.start.split("T")[0]]: {
            marked: true,
            dotColor: "blue"
        }
    }), {}), [timetable])

    const marked = useMemo(() => ({
                ...timetableMarked,
                [selectedDay]: {
                    selected: true,
                    selectedColor: 'blue',
                    selectedTextColor: '#fff'
                }
            }

        ),
        [selectedDay, timetableMarked]
    )

    return <View className='mt-2'>
        <RNCalendar
            onDayPress={(day) =>
                setSelectedDay(day.dateString)
            }
            markedDates={marked}
            enableSwipeMonths
        />
    </View>
}