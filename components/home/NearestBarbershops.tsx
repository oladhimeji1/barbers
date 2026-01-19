import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Barbershop, BarbershopCard } from './BarbershopCard';

interface NearestBarbershopsProps {
    barbershops: Barbershop[];
    onSeeAllPress?: () => void;
}

export const NearestBarbershops: React.FC<NearestBarbershopsProps> = ({
    barbershops,
    onSeeAllPress,
}) => {
    return (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Nearest Babershop</Text>
                <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAllPress}>
                    <Text style={styles.seeAllText}>See All ↗</Text>
                </TouchableOpacity>
            </View>
            {barbershops.map((shop) => (
                <BarbershopCard key={shop.id} shop={shop} isSmall={true} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E1E1E',
        marginBottom: 15,
    },
    seeAllButton: {
        borderColor: '#3D3D7A',
        alignItems: 'center',
        flexDirection: 'row',
    },
    seeAllText: {
        color: '#3D3D7A',
        fontSize: 13,
        fontWeight: '600',
    },
});
