import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
    location?: string;
    userName?: string;
    profileImage?: any;
}

export const Header: React.FC<HeaderProps> = ({
    location = 'Gwarimpa',
    userName = 'Joe Samanta',
    profileImage = require('../../assets/images/2151155329.jpg'),
}) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerTop}>
                <View>
                    <View style={styles.locationContainer}>
                        <Image
                            source={require('../../assets/icons/location.png')}
                            contentFit='contain'
                            style={{ marginRight: 2, tintColor: '#64748B', width: 8, height: 8 }}
                        />
                        <Text style={styles.cityName}>{location}</Text>
                    </View>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={profileImage}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 12,
        color: '#666666',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 22.5,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
});
