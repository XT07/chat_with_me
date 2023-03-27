import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tab"
                    component={MyTabs}
                    options={{ headerShown: null }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}