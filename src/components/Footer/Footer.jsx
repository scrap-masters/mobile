import {View,Text} from "react-native";

export function Footer() {

    return <View className="bg-black py-16 w-screen -ml-4" data-testid="footer">
        <Text className="text-center text-white">
            Copyright &copy;2022,&nbsp;Scrap masters. All rights reserved.
        </Text>
    </View>

}
