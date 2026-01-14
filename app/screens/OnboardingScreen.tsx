import { useNavigation } from '@react-navigation/native';
import React, { JSX, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import type { OnboardingSlide } from '../types/navigation';

const { width } = Dimensions.get('window');

const onboardingData: OnboardingSlide[] = [
  {
    title: 'Welcome Gobars',
    description: 'Find the best grooming experience in your city with just one tap! Don\'t miss out on the haircut or treatment of your dreams. Let\'s start now!',
    image: require('../../assets/images/onboarding1.png'),
  },
  {
    title: 'Looking for barber?',
    description: 'Find the best barbershop around you in seconds, make an appointment, and enjoy the best grooming experience.',
    image: require('../../assets/images/onboarding2.png'),
  },
  {
    title: 'Everything in your hands',
    description: 'With Gobar, find high-quality barbershops, see reviews, and make appointments easily. Achieve your confident appearance!',
    image: require('../../assets/images/onboarding3.png'),
  },
];

export default function OnboardingScreen(): JSX.Element {
  const navigation = useNavigation<any>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper>(null);

  const handleGetStarted = (): void => {
    if (activeIndex < onboardingData.length - 1) {
      swiperRef.current?.scrollBy(1);
    } else {
      navigation.navigate('screens/LoginScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={(index: number) => setActiveIndex(index)}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination}
      >
        {onboardingData.map((item: OnboardingSlide, index: number) => (
          <View key={index} style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={handleGetStarted}
              >
                <Text style={styles.buttonText}>{activeIndex < onboardingData.length - 1 ? 'Next' : 'Get Started'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E7EB',
  },
  slide: {
    flex: 1,
  },
  image: {
    width: width,
    height: '60%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: '#FF9933',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    marginTop: -30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3D3D7A',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  pagination: {
    bottom: 180,
  },
  dot: {
    marginTop: 'auto',
    backgroundColor: '#E6E7EB',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#3D3D7A',
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

