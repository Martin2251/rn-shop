import { Stack, Tabs } from "expo-router"
import { Touchable, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {Ionicons} from "@expo/vector-icons"

const CategoryLayout = () =>{
    return (
    <Stack>
        <Stack.Screen
        name="[slug]"
        options={() => ({
        headerShown:true,
         headerLeft:() => (<TouchableOpacity onPress={() => navigaton.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        ),
        })}
        />
    </Stack>
    );
}

export default CategoryLayout