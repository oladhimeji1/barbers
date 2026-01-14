import { Stack } from 'expo-router';

export default function App() {
  return (
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
  );
}

