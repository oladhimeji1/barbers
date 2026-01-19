import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FindNearbyProps {
    onFindPress?: () => void;
}

export const FindNearby: React.FC<FindNearbyProps> = ({ onFindPress }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Find a barber nearby</Text>
            <View style={styles.mapContainer}>
                <Image
                    source={require('../../assets/images/Maps.png')}
                    style={styles.mapImage}
                />
                <TouchableOpacity style={styles.findNowButton} onPress={onFindPress}>
                    <View style={styles.findNowTextContainer}>
                        <Text style={styles.findNowText}>Find now</Text>
                        <Text>🔍</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E1E1E',
        marginBottom: 15,
    },
    mapContainer: {
        height: 200,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
    },
    mapImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    findNowButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#3D3D7A',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderTopLeftRadius: 12,
    },
    findNowText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    findNowTextContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 5,
    },
});
