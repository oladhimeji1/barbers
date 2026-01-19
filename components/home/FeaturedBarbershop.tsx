import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FeaturedBarbershopProps {
    name?: string;
    location?: string;
    distance?: string;
    rating?: number;
    image?: any;
    onBookingPress?: () => void;
}

export const FeaturedBarbershop: React.FC<FeaturedBarbershopProps> = ({
    name = 'Master piece Barbershop - Haircut styling',
    location = 'Joga Expo Centre',
    distance = '2 km',
    rating = 5.0,
    image = require('../../assets/images/47699.jpg'),
    onBookingPress,
}) => {
    return (
        <View style={styles.featuredCard}>
            <View style={styles.featuredImageContainer}>
                <Image
                    source={image}
                    style={styles.featuredImage}
                />
                <TouchableOpacity style={styles.featuredBookingButton} onPress={onBookingPress}>
                    <Text style={styles.bookingButtonText}>Booking 📅</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.featuredInfo}>
                <Text style={styles.featuredName}>{name}</Text>
                <View style={styles.locationRow}>
                    <Text style={styles.locationIcon}>📍</Text>
                    <Text style={styles.locationText}>
                        {location} ({distance})
                    </Text>
                </View>
                <View style={styles.ratingRow}>
                    <Text style={styles.starIcon}>⭐</Text>
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>
            </View>
            <View style={styles.pagination}>
                <View style={styles.paginationDot} />
                <View style={styles.paginationDot} />
                <View style={styles.paginationDot} />
                <View style={styles.paginationDot} />
                <View style={[styles.paginationDot, styles.paginationDotActive]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    featuredImageContainer: {
        position: 'relative',
    },
    featuredCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginBottom: 15,
        overflow: 'hidden',
        position: 'relative',
    },
    featuredImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    featuredBookingButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#3D3D7A',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderTopLeftRadius: 10,
    },
    featuredInfo: {
        padding: 15,
    },
    featuredName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E1E1E',
        marginBottom: 8,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    locationIcon: {
        fontSize: 16,
        marginRight: 5,
    },
    locationText: {
        fontSize: 12,
        color: '#666666',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        fontSize: 12,
        marginRight: 5,
    },
    ratingText: {
        fontSize: 12,
        color: '#666666',
        fontWeight: '600',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        gap: 8,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
    },
    paginationDotActive: {
        width: 24,
        backgroundColor: '#3D3D7A',
    },
    bookingButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});
