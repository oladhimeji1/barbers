import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Barbershop, BarbershopCard } from './BarbershopCard';
import { FeaturedBarbershop } from './FeaturedBarbershop';

interface RecommendedBarbershopsProps {
    barbershops: Barbershop[];
    onSeeAllPress?: () => void;
}

export const RecommendedBarbershops: React.FC<RecommendedBarbershopsProps> = ({
    barbershops,
    onSeeAllPress,
}) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Most recommended</Text>

            <FeaturedBarbershop />

            {barbershops.slice(1).map((shop) => (
                <BarbershopCard key={shop.id} shop={shop} isSmall={true} />
            ))}

            <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAllPress}>
                <Text style={styles.seeAllText}>See All ↗</Text>
            </TouchableOpacity>
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
