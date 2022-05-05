import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/config";
import Auth from "../Screens/Auth";
import TabNavigator from "./Tabs";

const MainNavigator = () => {

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                
                const uid = user.uid;

            } else {
                setUser(null)
            }
        });
    }, [])

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            {user ?
                <TabNavigator></TabNavigator>
                :
                <Auth />
            }
        </NavigationContainer>
    )
}

export default MainNavigator