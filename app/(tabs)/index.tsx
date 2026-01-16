// screens/HomeScreen.tsx
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React, { JSX, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Barbershop {
  id: string;
  name: string;
  location: string;
  distance: string;
  rating: number;
  image: any;
}

const { width } = Dimensions.get('window');

const nearestBarbershops: Barbershop[] = [
  {
    id: '1',
    name: 'Alana Barbershop - Haircut massage & Spa',
    location: 'Banguntapan',
    distance: '5 km',
    rating: 4.5,
    image: require('../../assets/images/barber1.jpg'),
  },
  {
    id: '2',
    name: 'Hercha Barbershop - Haircut & Styling',
    location: 'Jalan Kaliurang',
    distance: '8 km',
    rating: 5.0,
    image: require('../../assets/images/barber2.jpg'),
  },
  {
    id: '3',
    name: 'Barberking - Haircut styling & massage',
    location: 'Jogja Expo Centre',
    distance: '12 km',
    rating: 4.5,
    image: require('../../assets/images/barber3.jpg'),
  },
];

const recommendedBarbershops: Barbershop[] = [
  {
    id: '4',
    name: 'Master piece Barbershop - Haircut styling',
    location: 'Joga Expo Centre',
    distance: '2 km',
    rating: 5.0,
    image: require('../../assets/images/barber-login.png'),
  },
  {
    id: '5',
    name: 'Varcity Barbershop Jogja ex The Varcher',
    location: 'Condongcatur',
    distance: '10 km',
    rating: 4.5,
    image: require('../../assets/images/barber-login.png'),
  },
  {
    id: '6',
    name: 'Twinsky Monkey Barber & Men Stuff',
    location: 'Jl Taman Siswa',
    distance: '8 km',
    rating: 5.0,
    image: require('../../assets/images/barber-login.png'),
  },
  {
    id: '7',
    name: 'Barberman - Haircut styling & massage',
    location: 'C-Walk Centre',
    distance: '17 km',
    rating: 4.5,
    image: require('../../assets/images/barber-login.png'),
  },
];

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const renderBarbershopCard = (shop: Barbershop, isSmall: boolean = false): JSX.Element => (
    <TouchableOpacity
      key={shop.id}
      style={isSmall ? styles.barbershopCard : styles.recommendedCard}
    >
      <Image source={shop.image} style={isSmall ? styles.barbershopImage : styles.recommendedImage} />
      <View style={isSmall ? styles.barbershopInfo : styles.recommendedInfo}>
        <Text style={isSmall ? styles.barbershopName : styles.recommendedName}>
          {shop.name}
        </Text>
        <View style={styles.locationRow}>
          <Image
                source={require('../../assets/icons/location.png')}
                contentFit='contain'
                style={{marginRight: 2, tintColor: '#64748B', width: 8, height: 8}}/>
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <View style={styles.locationContainer}>
                <Image
                source={require('../../assets/icons/location.png')}
                contentFit='contain'
                style={{marginRight: 2, tintColor: '#64748B', width: 8, height: 8}}/>
                <Text style={styles.cityName}>Gwarimpa</Text>
              </View>
                <Text style={styles.userName}>Joe Samanta</Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/barber-login.png')}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={require('../../assets/images/banner.jpg')}
            style={styles.bannerImage}
          />
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Booking Now</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image
                source={require('../../assets/icons/search.png')}
                contentFit='cover'
                style={{marginRight: 4, tintColor: '#64748B', width: 16, height: 16}}/>
            <TextInput
              style={styles.searchInput}
              placeholder="Search barber's, haircut ser..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#999999"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Image
                source={require('../../assets/icons/filter.png')}
                contentFit='cover'
                style={{marginRight: 4, tintColor: '#ffff', width: 16, height: 16}}/>
          </TouchableOpacity>
        </View>

        {/* Nearest Barbershop */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearest Babershop</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All ↗</Text>
          </TouchableOpacity>
          </View>
          {nearestBarbershops.map((shop) => renderBarbershopCard(shop, true))}
        </View>

        {/* Most Recommended */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most recommended</Text>
          
          {/* Featured Card */}
          <View style={styles.featuredCard}>
            <Image
              source={require('../../assets/images/barber-login.png')}
              style={styles.featuredImage}
            />
            <TouchableOpacity style={styles.featuredBookingButton}>
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
              <View style={styles.paginationDot} />
              <View style={styles.paginationDot} />
              <View style={[styles.paginationDot, styles.paginationDotActive]} />
            </View>
          </View>

          {/* Other Recommended */}
          {recommendedBarbershops.slice(1).map((shop) => renderBarbershopCard(shop, true))}

          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All ↗</Text>
          </TouchableOpacity>
        </View>

        {/* Find a barber nearby */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Find a barber nearby</Text>
          <View style={styles.mapContainer}>
            <Image
              source={require('../../assets/images/barber-login.png')}
              style={styles.mapImage}
            />
            <TouchableOpacity style={styles.findNowButton}>
              <Text style={styles.findNowText}>Find now 🔍</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#1E1E1E',
  },
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
  locationIcon: {
    fontSize: 16,
    marginRight: 5,
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
  banner: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: 200,
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
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
    gap: 10,
    width: '100%',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF0F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    width: '100%',
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
    width: 50,
    height: 50,
    backgroundColor: '#363062',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 24,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  barbershopCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  barbershopImage: {
    width: 100,
    height: 100,
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
    marginBottom: 8,
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
    fontSize: 14,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '600',
  },
  seeAllButton: {
    borderColor: '#3D3D7A',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  seeAllText: {
    color: '#3D3D7A',
    fontSize: 13,
    fontWeight: '600',
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  featuredBookingButton: {
    position: 'absolute',
    top: 160,
    right: 20,
    backgroundColor: '#3D3D7A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  featuredInfo: {
    padding: 15,
  },
  featuredName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
    marginBottom: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 8,
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
    bottom: 20,
    right: 20,
    backgroundColor: '#3D3D7A',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 12,
  },
  findNowText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;

