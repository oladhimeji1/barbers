import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const historyBarbershops: any[] = [
    {
        id: '5',
        name: 'Varcity Barbershop Jogja ex The Varcher',
        location: 'Condongcatur',
        distance: '10 km',
        rating: 4.5,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '6',
        name: 'Twinsky Monkey Barber & Men Stuff',
        location: 'Jl Taman Siswa',
        distance: '8 km',
        rating: 5.0,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '7',
        name: 'Barberman - Haircut styling & massage',
        location: 'J-Walk Centre',
        distance: '17 km',
        rating: 4.5,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '1',
        name: 'Alana Barbershop - Haircut massage & Spa',
        location: 'Banguntapan',
        distance: '5 km',
        rating: 4.5,
        image: require('../assets/images/barber1.jpg'),
    },
];

const BookingHistoryScreen: React.FC = () => {
    const renderBarbershopCard = (shop: any) => (
        <TouchableOpacity
            key={shop.id}
            style={styles.barbershopCard}
            onPress={() => router.push({
                pathname: '/booking-detail',
                params: {
                    booking: JSON.stringify({
                        id: shop.id,
                        barbershop: shop,
                        dateTime: 'Sun, 15 Jan - 08:00 AM',
                        services: [],
                        barber: { id: '1', name: 'Luther Hammes', specialty: 'Specialist Haircut', image: null },
                        status: 'finished',
                    })
                }
            })}
        >
            <Image source={shop.image} style={styles.barbershopImage} />
            <View style={styles.barbershopInfo}>
                <Text style={styles.barbershopName}>{shop.name}</Text>
                <View style={styles.locationRow}>
                    <Text style={styles.locationIcon}>📍</Text>
                    <Text style={styles.locationText}>
                        {shop.location} ({shop.distance})
                    </Text>
                </View>
                <View style={styles.ratingRow}>
                    <Text style={styles.starIcon}>⭐</Text>
                    <Text style={styles.ratingText}>{shop.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            {/* Header removed for Stack Navigation */}

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => router.back()}
                >
                    <Text style={styles.tabText}>Active booking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, styles.tabActive]}>
                    <Text style={[styles.tabText, styles.tabTextActive]}>History</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {historyBarbershops.map(renderBarbershopCard)}
            </ScrollView>

            {/* Bottom Navigation removed as it's a stack screen */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#3D3D7A',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    logo: {
        width: 80,
        height: 30,
        resizeMode: 'contain',
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        margin: 20,
        borderRadius: 25,
        padding: 5,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 20,
    },
    tabActive: {
        backgroundColor: '#F0F0FF',
    },
    tabText: {
        fontSize: 14,
        color: '#999999',
    },
    tabTextActive: {
        color: '#3D3D7A',
        fontWeight: '600',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    barbershopCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        padding: 15,
        borderRadius: 15,
    },
    barbershopImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    barbershopInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    barbershopName: {
        fontSize: 15,
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
        fontSize: 12,
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
        fontSize: 14,
        marginRight: 5,
    },
    ratingText: {
        fontSize: 13,
        color: '#666666',
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
    },
    navIcon: {
        fontSize: 24,
        marginBottom: 5,
        opacity: 0.5,
    },
    navIconActive: {
        opacity: 1,
    },
    navLabel: {
        fontSize: 12,
        color: '#999999',
    },
    navLabelActive: {
        color: '#3D3D7A',
        fontWeight: '600',
    },
});


export default BookingHistoryScreen;