import { Image } from 'expo-image';
import React from 'react';
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
    return (
        <View style={styles.banner}>
            <Image
                source={image}
                style={styles.bannerImage}
            />
            <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
                <Text style={styles.bannerButtonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
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
});
