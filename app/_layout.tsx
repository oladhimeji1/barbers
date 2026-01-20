import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        initialRouteName="screens/OnboardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="screens/OnboardingScreen" />
        <Stack.Screen name="screens/LoginScreen" />
        <Stack.Screen name="screens/RegisterScreen" />
        <Stack.Screen name="screens/ForgotPasswordScreen" />
        <Stack.Screen name="screens/AuthenticationScreen" />
      </Stack>
    </GestureHandlerRootView>
  );
}

