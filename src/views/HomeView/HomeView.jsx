import {ScrollView, Text} from "react-native";
import {useGetFaculties} from "../../api/faculties";
import {Group} from "../../components/Group";
import {WebView} from 'react-native-webview'


export function HomeView(props) {
    const {navigation} = props

    const {data: facultiesData, isLoading} = useGetFaculties()

    if (isLoading) return <Text>Loading...</Text>

    return <ScrollView className='px-4 mt-4'>
        <WebView className='w-[200px] h-[200px] border'
                 source={{uri: 'https://plan.collegiumwitelona.com.pl/calendar/51'}}
                 // onFileDownload={(nativeEvent) => {
                 //     const {downloadUrl} = nativeEvent
                 //     console.log(downloadUrl)
                 // }
                 // }
        />
        <Group elements={facultiesData.data} redirect={{
            navigate: navigation.navigate,
            viewName: "Fields"
        }}/>
    </ScrollView>
}