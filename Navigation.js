import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home.js";
import SchoolInformation from "./SchoolInformation.js";
import GreenPlan from "./GreenPlan.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SchoolInformation" component={SchoolInformation} />
                <Stack.Screen name="GreenPlan" component={GreenPlan} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
