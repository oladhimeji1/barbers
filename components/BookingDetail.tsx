import { router, useLocalSearchParams } from 'expo-router';
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

const BookingDetailScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const booking = params.booking ? JSON.parse(params.booking as string) : null;

    const mockServices = [
        {
            id: '1',
            name: 'Basic haircut',
            description: 'Basic haircut & vitamint',
            price: 20,
            image: require('../assets/images/barber1.jpg'),
        },
        {
            id: '2',
            name: 'Massage',
            description: 'Extra massage',
            price: 10,
            image: require('../assets/images/barber1.jpg'),
        },
    ];

    const mockBarber = {
        id: '1',
        name: 'Luther Hammes',
        specialty: 'Specialist Haircut',
        image: require('../assets/images/barber1.jpg'),
    };

    // const { booking } = route.params;
    const subtotal = 30;
    const discount = 5;
    const total = subtotal - discount;

    if (!booking) return null;


    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header removed for Stack Navigation */}

                {/* Barbershop Card */}
                <View style={styles.barbershopCard}>
                    <Image source={booking.barbershop.image} style={styles.barbershopImage} />
                    <View style={styles.barbershopInfo}>
                        <Text style={styles.barbershopName}>
                            Master piece Barbershop - Haircut styling
                        </Text>
                        <View style={styles.locationRow}>
                            <Text style={styles.locationIcon}>📍</Text>
                            <Text style={styles.locationText}>
                                Jogaj Expo Centre (2km)
                            </Text>
                            <Text style={styles.starIcon}>⭐</Text>
                            <Text style={styles.ratingText}>5.0</Text>
                        </View>
                    </View>
                </View>

                {/* Date & Time */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionIcon}>📅</Text>
                        <Text style={styles.sectionTitle}>Date & time</Text>
                    </View>
                    <Text style={styles.sectionContent}>Sun, 15 Jan - 08:00 AM</Text>
                </View>

                {/* Services Selected */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionIcon}>✂️</Text>
                        <Text style={styles.sectionTitle}>Service selected</Text>
                    </View>
                    {mockServices.map((service) => (
                        <View key={service.id} style={styles.serviceItem}>
                            <Image source={service.image} style={styles.serviceImage} />
                            <View style={styles.serviceInfo}>
                                <Text style={styles.serviceName}>{service.name}</Text>
                                <Text style={styles.serviceDescription}>{service.description}</Text>
                            </View>
                            <Text style={styles.servicePrice}>${service.price}</Text>
                        </View>
                    ))}
                </View>

                {/* Master Barber */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionIcon}>👤</Text>
                        <Text style={styles.sectionTitle}>Master barber</Text>
                    </View>
                    <View style={styles.barberItem}>
                        <Image source={mockBarber.image} style={styles.barberImage} />
                        <View style={styles.barberInfo}>
                            <Text style={styles.barberName}>{mockBarber.name}</Text>
                            <Text style={styles.barberSpecialty}>{mockBarber.specialty}</Text>
                        </View>
                    </View>
                </View>

                {/* Payment Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Payment summary</Text>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Basic haircut</Text>
                        <Text style={styles.summaryValue}>${mockServices[0].price}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Extra massage</Text>
                        <Text style={styles.summaryValue}>${mockServices[1].price}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Coupon discount</Text>
                        <Text style={styles.summaryValue}>- ${discount}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total price</Text>
                        <Text style={styles.totalValue}>${total}</Text>
                    </View>
                </View>

                {/* Rating Button */}
                <TouchableOpacity
                    style={styles.ratingButton}
                    onPress={() => router.push({
                        pathname: '/rating-review',
                        params: { barbershop: JSON.stringify(booking.barbershop) }
                    })}
                >
                    <Text style={styles.ratingButtonText}>Rating & review 👍</Text>
                </TouchableOpacity>
            </ScrollView>
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
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    backIcon: {
        fontSize: 24,
        color: '#1E1E1E',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
    placeholder: {
        width: 24,
    },
    barbershopCard: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        marginBottom: 20,
    },
    barbershopImage: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginBottom: 15,
    },
    barbershopInfo: {
        alignItems: 'center',
    },
    barbershopName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E1E1E',
        marginBottom: 8,
        textAlign: 'center',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        fontSize: 14,
        marginRight: 5,
    },
    locationText: {
        fontSize: 13,
        color: '#666666',
        marginRight: 15,
    },
    starIcon: {
        fontSize: 14,
        marginRight: 5,
    },
    ratingText: {
        fontSize: 13,
        color: '#666666',
    },
    section: {
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        padding: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E1E1E',
    },
    sectionContent: {
        fontSize: 14,
        color: '#666666',
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    serviceImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    serviceInfo: {
        flex: 1,
    },
    serviceName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1E1E1E',
        marginBottom: 3,
    },
    serviceDescription: {
        fontSize: 12,
        color: '#999999',
    },
    servicePrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E1E1E',
    },
    barberItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    barberImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    barberInfo: {
        flex: 1,
    },
    barberName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1E1E1E',
        marginBottom: 3,
    },
    barberSpecialty: {
        fontSize: 12,
        color: '#999999',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#666666',
    },
    summaryValue: {
        fontSize: 14,
        color: '#666666',
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 15,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E1E1E',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
    ratingButton: {
        backgroundColor: '#3D3D7A',
        marginHorizontal: 20,
        marginBottom: 30,
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
    },
    ratingButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});


export default BookingDetailScreen;