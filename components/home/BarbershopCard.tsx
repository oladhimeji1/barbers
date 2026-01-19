import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Barbershop {
    id: string;
    name: string;
    location: string;
    distance: string;
    rating: number;
    image: any;
}

interface BarbershopCardProps {
    shop: Barbershop;
    isSmall?: boolean;
    onPress?: () => void;
}

export const BarbershopCard: React.FC<BarbershopCardProps> = ({
    shop,
    isSmall = false,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={isSmall ? styles.barbershopCard : styles.recommendedCard}
            onPress={onPress}
        >
            <Image
                source={shop.image}
                style={isSmall ? styles.barbershopImage : styles.recommendedImage}
            />
            <View style={isSmall ? styles.barbershopInfo : styles.recommendedInfo}>
                <Text style={isSmall ? styles.barbershopName : styles.recommendedName}>
                    {shop.name}
                </Text>
                <View style={styles.locationRow}>
                    <Image
                        source={require('../../assets/icons/location.png')}
                        contentFit='contain'
                        style={{ marginRight: 2, tintColor: '#64748B', width: 8, height: 8 }}
                    />
                    <Text style={styles.locationText}>
                        {shop.location} ({shop.distance})
                    </Text>
                </View>
                <View style={styles.ratingRow}>
                    <Text style={styles.starIcon}>⭐</Text>
                    <Text style={styles.ratingText}>{shop.rating}</Text>
                </View>
            </View>
            {!isSmall && (
                <TouchableOpacity style={styles.bookingButton}>
                    <Text style={styles.bookingButtonText}>Booking 📅</Text>
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    barbershopCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden',
    },
    barbershopImage: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    barbershopInfo: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    barbershopName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E1E1E',
        marginBottom: 5,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
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
    recommendedCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 15,
        overflow: 'hidden',
    },
    recommendedImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    recommendedInfo: {
        padding: 12,
    },
    recommendedName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1E1E1E',
        marginBottom: 8,
    },
    bookingButton: {
        position: 'absolute',
        top: 110,
        right: 15,
        backgroundColor: '#3D3D7A',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 8,
    },
    bookingButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});
