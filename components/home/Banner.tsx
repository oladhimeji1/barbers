import { Image } from 'expo-image';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface BannerProps {
    image?: any;
    buttonText?: string;
    onPress?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
    image = require('../../assets/images/banner.jpg'),
    buttonText = 'Book Now',
    onPress,
}) => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [hasBooking, setHasBooking] = useState<boolean>(true);
    return (
        <>
            {hasBooking ? (
                <View style={styles.bookedCard}>
                    <Text style={styles.bookedTitle}>Top Boyz Salon & Spa</Text>
                    <View style={styles.bookedLocation}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text style={styles.bookedLocationText}>Gwarimpa, Abuja</Text>
                    </View>
                    <View style={styles.bookedDetails}>
                        <View style={styles.bookedSchedule}>
                            <Text style={styles.scheduleIcon}>📅</Text>
                            <View>
                                <Text style={styles.scheduleLabel}>Booking schedule</Text>
                                <Text style={styles.scheduleValue}>20 Jan, 08 : 00 PM</Text>
                            </View>
                        </View>
                        <View style={styles.bookedEstimation}>
                            <Text style={styles.estimationLabel}>Time estimation</Text>
                            <Text style={styles.estimationValue}>~50 mins</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.mapsButton}>
                        <Text style={styles.mapsButtonText}>Maps 📍</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.banner}>
                    <Image
                        source={image}
                        style={styles.bannerImage}
                    />
                    <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
                        <Text style={styles.bannerButtonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    banner: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        height: 170,
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bannerButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#3D3D7A',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
    },
    bannerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    bookedCard: {
        backgroundColor: '#3D3D7A',
        marginHorizontal: 10,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
    },
    bookedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    bookedLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    bookedLocationText: {
        fontSize: 13,
        color: '#E0E0E0',
    },
    bookedDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
    },
    bookedSchedule: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    scheduleIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    scheduleLabel: {
        fontSize: 11,
        color: '#E0E0E0',
        marginBottom: 3,
    },
    scheduleValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    bookedEstimation: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    estimationLabel: {
        fontSize: 11,
        color: '#E0E0E0',
        marginBottom: 3,
    },
    estimationValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    mapsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        borderRadius: 10,
    },
    mapsButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3D3D7A',
    },
    locationIcon: {
        fontSize: 16,
        marginRight: 5,
    },
});
