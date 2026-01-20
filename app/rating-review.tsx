import RatingReviewScreen from '@/components/RatingReview';
import { Stack } from 'expo-router';
import React from 'react';

export default function RatingReviewRoute() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Rating & review',
                    headerTintColor: '#FFFFFF',
                    headerStyle: {
                        backgroundColor: '#3D3D7A',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                    },
                }}
            />
            <RatingReviewScreen />
        </>
    );
}
