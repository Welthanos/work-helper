import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

function InitialLayout() {
   const { token, loading } = useAuth();
   const router = useRouter();
   const segments = useSegments();

   useEffect(() => {
      if (loading) return;
      const inAuthGroup = segments[0] === '(auth)';

      if (token && inAuthGroup) router.replace('/(tabs)');
      else if (!token && !inAuthGroup) router.replace('/(auth)');

   }, [token, loading]);

   return (
      <Stack>
         <Stack.Screen name='(auth)' options={{ headerShown: false }} />
         <Stack.Screen name='(tabs)' options={{ headerShown: false }} />

         <Stack.Screen name='survey/[id]' options={{ headerShown: true, title: 'Pesquisas' }} />
         <Stack.Screen name='survey/create' options={{ headerShown: true, title: 'Criar Pesquisa' }} />
         <Stack.Screen name='survey/edit/[id]' options={{ headerShown: true, title: 'Editar Pesquisa' }} />

         <Stack.Screen name='assessment/[id]' options={{ headerShown: true, title: 'Avaliações' }} />
         <Stack.Screen name='assessment/create' options={{ headerShown: true, title: 'Criar Avaliação' }} />
         <Stack.Screen name='assessment/edit/[id]' options={{ headerShown: true, title: 'Editar Avaliação' }} />
      </Stack>
   );
}

export default function RootLayout() {
   return (
      <AuthProvider>
         <InitialLayout />
      </AuthProvider>
   );
}