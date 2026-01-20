import BookingHistoryScreen from '@/components/BookingHistory';
import { Stack } from 'expo-router';
import React from 'react';

export default function BookingHistoryRoute() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Booking History',
                    headerBackTitleVisible: false,
                    headerTintColor: '#1E1E1E',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#1E1E1E',
                    },
                }}
            />
            <BookingHistoryScreen />
        </>
    );
}
