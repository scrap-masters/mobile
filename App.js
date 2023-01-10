import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeView} from "./src/views/HomeView";
import {QueryClient, QueryClientProvider} from "react-query";
import {FieldsView} from "./src/views/FieldsView";
import {SpecializationsView} from "./src/views/SpecializationsView";
import {CalendarView} from "./src/views/CalendarView";
import {LecturersView} from "./src/views/LecturersView";
import {LecturerCalendarView} from "./src/views/LecturerCalendarView";

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"Home"} component={HomeView} options={{title: "Collegium Witelona"}}/>
                    <Stack.Screen name={"Fields"} component={FieldsView} options={{title: "Kierunki"}}/>
                    <Stack.Screen name={"Specializations"} component={SpecializationsView} options={{title: "Specializacje"}}/>
                    <Stack.Screen name={"Calendar"} component={CalendarView} options={{title: "Plan zajęć"}}/>
                    <Stack.Screen name={"Lecturers"} component={LecturersView}  options={{title: "Pracownicy"}}/>
                    <Stack.Screen name={"LecturerCalendar"} component={LecturerCalendarView} options={{title: "Plan zajęć"}}/>
                </Stack.Navigator>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
