import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeView} from "./src/views/HomeView";
import {QueryClient, QueryClientProvider} from "react-query";
import {FieldsView} from "./src/views/FieldsView";

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"Home"} component={HomeView}/>
                    <Stack.Screen name={"Fields"} component={FieldsView}/>
                </Stack.Navigator>
                <StatusBar style="auto"/>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
