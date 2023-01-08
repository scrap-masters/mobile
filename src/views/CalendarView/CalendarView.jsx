import { Calendar } from '../../components/Calendar';
import {
  useGetSpecialization,
  useGetSpecializationLegend,
  useGetSpecializationTimetable,
} from '../../api/specializations';
import RNCalendarEvents from 'react-native-calendar-events';
import { useEffect, useMemo, useState } from 'react';
import { Button, Text, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { CalendarAgenda } from '../../components/CalendarAgenda';

export function CalendarView(props) {
  const { route } = props;
  const { id } = route.params;
  const [group, setGroup] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');

  const { data } = useGetSpecializationTimetable(id);

  // const {data: legendData} = useGetSpecializationLegend(id)

  // const {data: specializationData} = useGetSpecialization(id)

  const timetableData = data?.data.timetable;

  const groups = timetableData?.map(event => event.group);

  const filteredGroups = groups?.filter(
    (group, index) => groups.indexOf(group) === index
  );

  const filteredTimetable = timetableData?.filter(
    event => event.group === group
  );

  const currentDayLessons = filteredTimetable?.filter(
    ({ start }) => start.split('T')[0] === selectedDay
  );

  const switchOptions = useMemo(
    () =>
      filteredGroups?.map(group => ({
        label: group,
        value: group,
      })),
    [filteredGroups]
  );

  useEffect(() => {
    setGroup(data?.data.timetable[0].group);
  }, [data]);

  return (
    <View>
      {switchOptions && (
        <SwitchSelector
          options={switchOptions}
          initial={0}
          onPress={setGroup}
        />
      )}
      <Button title="Export Calendar" />
      <Calendar
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        timetable={filteredTimetable}
      />
      <CalendarAgenda lessons={currentDayLessons} />
    </View>
  );
}
