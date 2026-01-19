// screens/HomeScreen.tsx
import type { Barbershop } from '@/components/home';
import { StatusBar } from 'expo-status-bar';
import React, { lazy, Suspense, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Lazy load components for better performance
const Header = lazy(() => import('@/components/home/Header').then(module => ({ default: module.Header })));
const Banner = lazy(() => import('@/components/home/Banner').then(module => ({ default: module.Banner })));
const SearchBar = lazy(() => import('@/components/home/SearchBar').then(module => ({ default: module.SearchBar })));
const NearestBarbershops = lazy(() => import('@/components/home/NearestBarbershops').then(module => ({ default: module.NearestBarbershops })));
const RecommendedBarbershops = lazy(() => import('@/components/home/RecommendedBarbershops').then(module => ({ default: module.RecommendedBarbershops })));
const FindNearby = lazy(() => import('@/components/home/FindNearby').then(module => ({ default: module.FindNearby })));

// Mock data
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
    image: require('../../assets/images/7720.jpg'),
  },
  {
    id: '5',
    name: 'Varcity Barbershop Jogja ex The Varcher',
    location: 'Condongcatur',
    distance: '10 km',
    rating: 4.5,
    image: require('../../assets/images/7720.jpg'),
  },
  {
    id: '6',
    name: 'Twinsky Monkey Barber & Men Stuff',
    location: 'Jl Taman Siswa',
    distance: '8 km',
    rating: 5.0,
    image: require('../../assets/images/barber2.jpg'),
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

// Loading fallback component
const LoadingFallback = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="small" color="#3D3D7A" />
  </View>
);

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Suspense fallback={<LoadingFallback />}>
          <Header />
        </Suspense>

        {/* Banner */}
        <Suspense fallback={<LoadingFallback />}>
          <Banner />
        </Suspense>

        {/* Search Bar */}
        <Suspense fallback={<LoadingFallback />}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </Suspense>

        {/* Nearest Barbershops */}
        <Suspense fallback={<LoadingFallback />}>
          <NearestBarbershops barbershops={nearestBarbershops} />
        </Suspense>

        {/* Most Recommended */}
        <Suspense fallback={<LoadingFallback />}>
          <RecommendedBarbershops barbershops={recommendedBarbershops} />
        </Suspense>

        {/* Find a barber nearby */}
        <Suspense fallback={<LoadingFallback />}>
          <FindNearby />
        </Suspense>
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
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
