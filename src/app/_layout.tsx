import { Stack } from "expo-router";

export default function RootLayout (){
    return(
        <Stack>
            <Stack.Screen name="(shop)"  options={{headerShown:true, title:"Shop"}}/>
        </Stack>
    )
}