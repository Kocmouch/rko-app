import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from './index';
import MapScreen from './map';
import SettingsScreen from './settings';

import RKO_Step1 from './rko/step1';
import RKO_Step2 from './rko/step2';
import RKO_Step3DoNN from './rko/step3donn';
import RKO_Step3DoNO from './rko/step3dono';
import GetHelp from './getHelp';
import RKO_Step3DzNN from './rko/step3dznn';
import AED from './aed';
import NeedToHelp from './needtohelp';
import Operator from './operator';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" component={IndexScreen} />
      <Stack.Screen name="map" component={MapScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
      <Stack.Screen name="rko/step1" component={RKO_Step1} />
      <Stack.Screen name="rko/step2" component={RKO_Step2} />
      <Stack.Screen name="rko/step3donn" component={RKO_Step3DoNN} />
      <Stack.Screen name="rko/step3dono" component={RKO_Step3DoNO} />
      <Stack.Screen name="getHelp" component={GetHelp} />
      <Stack.Screen name="rko/step3dznn" component={RKO_Step3DzNN} />
      <Stack.Screen name="aed" component={AED} />
      <Stack.Screen name="needtohelp" component={NeedToHelp} />
      <Stack.Screen name="operator" component={Operator} />
    </Stack.Navigator>
  );
}