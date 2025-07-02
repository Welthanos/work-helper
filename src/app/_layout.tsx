import { Stack } from 'expo-router';

export default function RootLayout() {
   return (
      <Stack>
         <Stack.Screen name='index' options={{ headerShown: false }} />
         <Stack.Screen name='register' options={{ headerShown: false }} />
         <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
         <Stack.Screen name='survey/[id]' options={{ headerShown: true, title: 'Pesquisas' }} />
      </Stack>
   );
}