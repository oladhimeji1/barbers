import BookingDetailScreen from '@/components/BookingDetail';
import { Stack } from 'expo-router';
import React from 'react';

export default function BookingDetailRoute() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Detail Barber',
                    headerBackButtonDisplayMode: 'generic',
                    headerTintColor: '#1E1E1E',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#1E1E1E',
                    },
                }}
            />
            <BookingDetailScreen />
        </>
    );
}
