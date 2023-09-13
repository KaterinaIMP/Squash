const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Video1 from "./screens/Video1";
import Video2 from "./screens/Video2";
import MyTrainingProgram from "./screens/MyTrainingProgram";
import Video3 from "./screens/Video3";
import Video4 from "./screens/Video4";
import Video5 from "./screens/Video5";
import MyTrainingProgram1 from "./screens/MyTrainingProgram1";
import Video6 from "./screens/Video6";
import MyTrainingProgram2 from "./screens/MyTrainingProgram2";
import MyTrainingProgram3 from "./screens/MyTrainingProgram3";
import MyTrainingProgram4 from "./screens/MyTrainingProgram4";
import MyTrainingProgram5 from "./screens/MyTrainingProgram5";
import MyTrainingProgram6 from "./screens/MyTrainingProgram6";
import MyTrainingProgram7 from "./screens/MyTrainingProgram7";
import MyTrainingProgram8 from "./screens/MyTrainingProgram8";
import MyTrainingProgram9 from "./screens/MyTrainingProgram9";
import MyTrainingProgram10 from "./screens/MyTrainingProgram10";
import Profile from "./screens/Profile";
import MyTrainingProgram11 from "./screens/MyTrainingProgram11";
import MyTrainingProgram12 from "./screens/MyTrainingProgram12";
import Video7 from "./screens/Video7";
import Video8 from "./screens/Video8";
import Video9 from "./screens/Video9";
import Video10 from "./screens/Video10";
import Player from "./screens/Player";
import Player1 from "./screens/Player1";
import Player2 from "./screens/Player2";
import Player3 from "./screens/Player3";
import MyTrainingProgram13 from "./screens/MyTrainingProgram13";
import PlayerCoach from "./screens/PlayerCoach";
import Sex from "./screens/Sex";
import DataInput from "./screens/DataInput";
import RegistrationAuthorization from "./screens/RegistrationAuthorization";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Video1"
              component={Video1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video2"
              component={Video2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram"
              component={MyTrainingProgram}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video3"
              component={Video3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video4"
              component={Video4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video5"
              component={Video5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram1"
              component={MyTrainingProgram1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video6"
              component={Video6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram2"
              component={MyTrainingProgram2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram3"
              component={MyTrainingProgram3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram4"
              component={MyTrainingProgram4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram5"
              component={MyTrainingProgram5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram6"
              component={MyTrainingProgram6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram7"
              component={MyTrainingProgram7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram8"
              component={MyTrainingProgram8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram9"
              component={MyTrainingProgram9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram10"
              component={MyTrainingProgram10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram11"
              component={MyTrainingProgram11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram12"
              component={MyTrainingProgram12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video7"
              component={Video7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video8"
              component={Video8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video9"
              component={Video9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video10"
              component={Video10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Player"
              component={Player}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Player1"
              component={Player1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Player2"
              component={Player2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Player3"
              component={Player3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrainingProgram13"
              component={MyTrainingProgram13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlayerCoach"
              component={PlayerCoach}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sex"
              component={Sex}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataInput"
              component={DataInput}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistrationAuthorization"
              component={RegistrationAuthorization}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
