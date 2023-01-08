import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeView} from "./src/views/HomeView";
import {QueryClient, QueryClientProvider} from "react-query";
import {FieldsView} from "./src/views/FieldsView";
import {SpecializationsView} from "./src/views/SpecializationsView";
import {CalendarView} from "./src/views/CalendarView";
import {LecturersView} from "./src/views/LecturersView";

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"Home"} component={HomeView}/>
                    <Stack.Screen name={"Fields"} component={FieldsView}/>
                    <Stack.Screen name={"Specializations"} component={SpecializationsView}/>
                    <Stack.Screen name={"Calendar"} component={CalendarView}/>
                    <Stack.Screen name={"Lecturers"} component={LecturersView} />
                    <Stack.Screen name={"LecturerCalendar"} component={CalendarView}/>
                </Stack.Navigator>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
