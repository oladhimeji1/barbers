import { useNavigation } from 'expo-router';
import React, { JSX, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const serviceFilters = ['All Service', 'Basic haircut', 'Coloring', 'Treat'];

type Barbershop = {
    id: string;
    name: string;
    location: string;
    distance: string;
    rating: number;
    image: string;
};

const exploreBarbershops: Barbershop[] = [
    {
        id: '1',
        name: 'Varcity Barbershop Jogja ex The Varcher',
        location: 'Condongcatur',
        distance: '10 km',
        rating: 4.5,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '2',
        name: 'Twinsky Monkey Barber & Men Stuff',
        location: 'Jl Taman Siswa',
        distance: '8 km',
        rating: 5.0,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '3',
        name: 'Barberman - Haircut styling & massage',
        location: 'J-Walk Centre',
        distance: '17 km',
        rating: 4.5,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '4',
        name: 'Alana Barbershop - Haircut massage & Spa',
        location: 'Banguntapan',
        distance: '5 km',
        rating: 4.5,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '5',
        name: 'Hercha Barbershop - Haircut & Styling',
        location: 'Jalan Kaliurang',
        distance: '8 km',
        rating: 5.0,
        image: require('../assets/images/barber1.jpg'),
    },
    {
        id: '6',
        name: 'Barberking - Haircut styling & massage',
        location: 'Jogja Expo Centre',
        distance: '12 km',
        rating: 4.5,
        image: require('../assets/images/barber1.jpg'),
    },
];

const ExploreBarbersScreen: React.FC = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState<string>('All Service');


    const renderBarbershopCard = (shop: Barbershop): JSX.Element => (
        <TouchableOpacity key={shop.id} style={styles.barbershopCard}>
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
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Explore Barbers</Text>
                    <View style={styles.placeholder} />
                </View>

                {/* Featured Card */}
                <View style={styles.featuredCard}>
                    <Image
                        source={require('../assets/images/barber1.jpg')}
                        style={styles.featuredImage}
                    />
                    <TouchableOpacity style={styles.bookingButton}>
                        <Text style={styles.bookingButtonText}>Booking 📅</Text>
                    </TouchableOpacity>
                    <View style={styles.featuredInfo}>
                        <Text style={styles.featuredName}>
                            Master piece Barbershop - Haircut styling
                        </Text>
                        <View style={styles.locationRow}>
                            <Text style={styles.locationIcon}>📍</Text>
                            <Text style={styles.locationText}>Joga Expo Centre (2 km)</Text>
                        </View>
                        <View style={styles.ratingRow}>
                            <Text style={styles.starIcon}>⭐</Text>
                            <Text style={styles.ratingText}>5.0</Text>
                        </View>
                    </View>
                    <View style={styles.pagination}>
                        <View style={styles.paginationDot} />
                        <View style={styles.paginationDot} />
                        <View style={[styles.paginationDot, styles.paginationDotActive]} />
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search barber's, haircut ser..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholderTextColor="#999999"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => navigation.navigate('./home/Filter')}
                    >
                        <Text style={styles.filterIcon}>⚙️</Text>
                    </TouchableOpacity>
                </View>

                {/* Service Filters */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.filtersContainer}
                    contentContainerStyle={styles.filtersContent}
                >
                    {serviceFilters.map((filter) => (
                        <TouchableOpacity
                            key={filter}
                            style={[
                                styles.filterChip,
                                selectedFilter === filter && styles.filterChipSelected,
                            ]}
                            onPress={() => setSelectedFilter(filter)}
                        >
                            <Text
                                style={[
                                    styles.filterText,
                                    selectedFilter === filter && styles.filterTextSelected,
                                ]}
                            >
                                {filter}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Barbershops List */}
                <View style={styles.listContainer}>
                    {exploreBarbershops.map(renderBarbershopCard)}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    backIcon: {
        fontSize: 24,
        color: '#1E1E1E',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
    placeholder: {
        width: 24,
    },
    featuredCard: {
        marginHorizontal: 10,
        marginBottom: 10,
        overflow: 'hidden',
    },
    featuredImage: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bookingButton: {
        position: 'absolute',
        top: 130,
        right: 15,
        backgroundColor: '#3D3D7A',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    bookingButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    featuredInfo: {
        padding: 15,
    },
    featuredName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E1E1E',
        marginBottom: 8,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    locationIcon: {
        fontSize: 14,
        marginRight: 5,
    },
    locationText: {
        fontSize: 12,
        color: '#666666',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    starIcon: {
        fontSize: 14,
        marginRight: 5,
    },
    ratingText: {
        fontSize: 13,
        color: '#666666',
        fontWeight: '600',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
        gap: 5,
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
    searchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 15,
        gap: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 45,
    },
    searchIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
    },
    filterButton: {
        width: 45,
        height: 45,
        backgroundColor: '#3D3D7A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterIcon: {
        fontSize: 20,
    },
    filtersContainer: {
        marginBottom: 20,
    },
    filtersContent: {
        paddingHorizontal: 20,
        gap: 10,
    },
    filterChip: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
    },
    filterChipSelected: {
        backgroundColor: '#3D3D7A',
        borderColor: '#3D3D7A',
    },
    filterText: {
        fontSize: 14,
        color: '#666666',
    },
    filterTextSelected: {
        color: '#FFFFFF',
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    barbershopCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        paddingHorizontal: 5,
    },
    barbershopImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
    },
    barbershopInfo: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    barbershopName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E1E1E',
        marginBottom: 8,
    },
});

// Object.assign(styles, exploreStyles);

export default ExploreBarbersScreen;