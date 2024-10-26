import { Stack, Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

const CategoryLayout = () =>{
    return (
    <Stack>
        <Stack.Screen
        name="index"
        options={{headerShown:false}}
        />
    </Stack>
    )
}

export default CategoryLayout