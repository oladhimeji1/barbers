// screens/HomeScreen.tsx
import type { Barbershop } from '@/components/home';
import { FilterBottomSheet, FilterBottomSheetRef } from '@/components/home/Filter';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { lazy, Suspense, useRef, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
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
    name: 'Top Boyz Salon & Spa',
    location: 'Gwarimpa, Abuja',
    distance: '5 km',
    rating: 4.5,
    image: require('../../assets/images/barber1.jpg'),
  },
  {
    id: '2',
    name: 'Davido Barbershop',
    location: 'Gwarimpa, Abuja',
    distance: '8 km',
    rating: 5.0,
    image: require('../../assets/images/barber2.jpg'),
  },
  {
    id: '3',
    name: 'Number 1 barbers shop',
    location: 'Gwarimpa, Abuja',
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
  const filterSheetRef = useRef<FilterBottomSheetRef>(null);

  const handlePresentFilter = () => {
    filterSheetRef.current?.present();
  };

  const handleSeeAll = () => {
    router.push('/explore');
  };

  const handleRefresh = () => {
    // console.log('refreshing');
  };

  return (
    <SafeAreaView style={styles.container}>
      <RefreshControl refreshing={false} onRefresh={handleRefresh}></RefreshControl>
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
            onFilterPress={handlePresentFilter}
          />
        </Suspense>

        {/* Nearest Barbershops */}
        <Suspense fallback={<LoadingFallback />}>
          <NearestBarbershops
            barbershops={nearestBarbershops}
            onSeeAllPress={handleSeeAll}
          />
        </Suspense>

        {/* Most Recommended */}
        <Suspense fallback={<LoadingFallback />}>
          <RecommendedBarbershops
            barbershops={recommendedBarbershops}
            onSeeAllPress={handleSeeAll}
          />
        </Suspense>

        {/* Find a barber nearby */}
        <Suspense fallback={<LoadingFallback />}>
          <FindNearby />
        </Suspense>
      </ScrollView>
      <FilterBottomSheet ref={filterSheetRef} />
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
