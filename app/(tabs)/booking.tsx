import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import type { BookingScreenProps, BookingData } from '../types/navigation';

type BookingTab = 'active' | 'history';
type BookingStatus = 'booked' | 'waiting' | 'on_process' | 'finished';
type BookingData = {
  id: string;
  barbershop: {
    id: string;
    name: string;
    location: string;
    distance: string;
    rating: number;
    reviewCount: number;
    image: string;
  };
  dateTime: string;
  services: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
  barber: {
    id: string;
    name: string;
    specialty: string;
    image: string;
  };
  status: BookingStatus;
  timeEstimation: string;
};

const mockBooking: BookingData = {
  id: '1',
  barbershop: {
    id: '4',
    name: 'Master piece Barbershop...',
    location: 'Jogja Expo Centre',
    distance: '2 km',
    rating: 5.0,
    reviewCount: 24,
    image: require('../../assets/images/barber1.jpg'),
  },
  dateTime: 'Sun, 15 Jan - 08:00 AM',
  services: [
    {
      id: '1',
      name: 'Basic haircut',
      description: 'Basic haircut & vitamint',
      price: 20,
      image: require('../../assets/images/barber1.jpg'),
    },
    {
      id: '2',
      name: 'Massage',
      description: 'Extra massage',
      price: 10,
      image: require('../../assets/images/barber1.jpg'),
    },
  ],
  barber: {
    id: '1',
    name: 'Luther Hammes',
    specialty: 'Specialist Haircut',
    image: require('../../assets/images/barber1.jpg'),
  },
  status: 'booked',
  timeEstimation: '~50 Menit',
};

const BookingScreen: React.FC = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<BookingTab>('active');
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>('booked');

  const getStatusStep = (): number => {
    const steps = { booked: 1, waiting: 2, on_process: 3, finished: 4 };
    return steps[bookingStatus];
  };

  const renderStatusBar = () => {
    const currentStep = getStatusStep();

    return (
      <View style={styles.statusContainer}>
        <View style={styles.statusIcons}>
          <View style={styles.statusIcon}>
            <Text>📅</Text>
          </View>
          <View style={styles.statusIcon}>
            <Text>🕐</Text>
          </View>
          <View style={styles.statusIcon}>
            <Text>✂️</Text>
          </View>
          <View style={styles.statusIcon}>
            <Text>✓</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${(currentStep - 1) * 33.33}%` }]} />
          </View>
          <View style={[styles.progressDot, { left: `${(currentStep - 1) * 33.33}%` }]} />
        </View>

        <View style={styles.statusLabels}>
          <TouchableOpacity
            style={[styles.statusLabel, bookingStatus === 'booked' && styles.statusLabelActive]}
            onPress={() => setBookingStatus('booked')}
          >
            <Text style={[styles.statusLabelText, bookingStatus === 'booked' && styles.statusLabelTextActive]}>
              Booked
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusLabel, bookingStatus === 'waiting' && styles.statusLabelActive]}
            onPress={() => setBookingStatus('waiting')}
          >
            <Text style={[styles.statusLabelText, bookingStatus === 'waiting' && styles.statusLabelTextActive]}>
              Waiting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusLabel, bookingStatus === 'on_process' && styles.statusLabelActive]}
            onPress={() => setBookingStatus('on_process')}
          >
            <Text style={[styles.statusLabelText, bookingStatus === 'on_process' && styles.statusLabelTextActive]}>
              On Process
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusLabel, bookingStatus === 'finished' && styles.statusLabelActive]}
            onPress={() => setBookingStatus('finished')}
          >
            <Text style={[styles.statusLabelText, bookingStatus === 'finished' && styles.statusLabelTextActive]}>
              Finished
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderFinishedContent = () => (
    <View style={styles.finishedContainer}>
      <View style={styles.checkmarkBadge}>
        <Text style={styles.checkmark}>✓</Text>
      </View>
      <Text style={styles.finishedTitle}>Service Finished</Text>
      <Text style={styles.finishedDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
      <TouchableOpacity
        style={styles.ratingButton}
        onPress={() => navigation.navigate('/')}
      >
        <Text style={styles.ratingButtonText}>Rating & review 👍</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Booking</Text>
        <Image source={require('../../assets/images/barber1.jpg')} style={styles.logo} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'active' && styles.tabActive]}
          onPress={() => setActiveTab('active')}
        >
          <Text style={[styles.tabText, activeTab === 'active' && styles.tabTextActive]}>
            Active booking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'history' && styles.tabActive]}
          onPress={() => {
            setActiveTab('history');
            navigation.navigate('BookingHistory');
          }}
        >
          <Text style={[styles.tabText, activeTab === 'history' && styles.tabTextActive]}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderStatusBar()}

        {/* Barbershop Card */}
        <View style={styles.barbershopCard}>
          <Image source={mockBooking.barbershop.image} style={styles.barbershopImage} />
          <View style={styles.barbershopInfo}>
            <Text style={styles.barbershopName}>{mockBooking.barbershop.name}</Text>
            <View style={styles.locationRow}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.locationText}>
                {mockBooking.barbershop.location} ({mockBooking.barbershop.distance})
              </Text>
            </View>
            <View style={styles.ratingRow}>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.ratingText}>
                {mockBooking.barbershop.rating} ({mockBooking.barbershop.reviewCount})
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>📍</Text>
            <Text style={styles.actionText}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionText}>Chat</Text>
          </TouchableOpacity>
          {bookingStatus !== 'finished' && (
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>

        {bookingStatus === 'finished' ? (
          renderFinishedContent()
        ) : (
          <>
            {/* Time Estimation (only for waiting status) */}
            {bookingStatus === 'waiting' && (
              <View style={styles.timeEstimation}>
                <View style={styles.timeIcon}>
                  <Text>🕐</Text>
                </View>
                <Text style={styles.timeLabel}>Time Estimation</Text>
                <Text style={styles.timeValue}>{mockBooking.timeEstimation}</Text>
              </View>
            )}

            {/* On Process (only for on_process status) */}
            {bookingStatus === 'on_process' && (
              <View style={styles.onProcessCard}>
                <View style={styles.processIcon}>
                  <Text>✂️</Text>
                </View>
                <Text style={styles.processLabel}>On process</Text>
                <Text style={styles.processTime}>30 Menit</Text>
              </View>
            )}

            {/* Date & Time */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>📅</Text>
                <Text style={styles.sectionTitle}>Date & time</Text>
              </View>
              <Text style={styles.sectionContent}>{mockBooking.dateTime}</Text>
            </View>

            {/* Services Selected */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>✂️</Text>
                <Text style={styles.sectionTitle}>Service selected</Text>
              </View>
              {mockBooking.services.map((service) => (
                <View key={service.id} style={styles.serviceItem}>
                  <Image source={service.image} style={styles.serviceImage} />
                  <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>{service.name}</Text>
                    <Text style={styles.serviceDescription}>{service.description}</Text>
                  </View>
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
                <Image source={mockBooking.barber.image} style={styles.barberImage} />
                <View style={styles.barberInfo}>
                  <Text style={styles.barberName}>{mockBooking.barber.name}</Text>
                  <Text style={styles.barberSpecialty}>{mockBooking.barber.specialty}</Text>
                </View>
              </View>
            </View>
          </>
        )}
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#3D3D7A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 15,
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
    paddingVertical: 10,
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
  statusContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginBottom: 17,
    padding: 10,
    borderRadius: 10,
  },
  statusIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  progressBarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  progressBarFill: {
    height: 4,
    backgroundColor: '#FF9933',
    borderRadius: 2,
  },
  progressDot: {
    position: 'absolute',
    top: -6,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#3D3D7A',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  statusLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusLabel: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusLabelActive: {
    backgroundColor: '#3D3D7A',
  },
  statusLabelText: {
    fontSize: 12,
    color: '#999999',
  },
  statusLabelTextActive: {
    color: '#FFFFFF',
  },
  barbershopCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
  },
  barbershopImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  barbershopInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  barbershopName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 5,
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
  actionButtons: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 10,
    gap: 8,
  },
  actionIcon: {
    fontSize: 20,
  },
  actionText: {
    fontSize: 14,
    color: '#3D3D7A',
    fontWeight: '600',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#983333ff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  timeEstimation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  timeIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  timeLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  timeValue: {
    fontSize: 14,
    color: '#666666',
  },
  onProcessCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0FF',
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  processIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  processLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#3D3D7A',
  },
  processTime: {
    fontSize: 14,
    color: '#3D3D7A',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
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
    marginBottom: 12,
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
  finishedContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  checkmarkBadge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#3D3D7A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkmark: {
    fontSize: 60,
    color: '#FFFFFF',
  },
  finishedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 10,
  },
  finishedDescription: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  ratingButton: {
    backgroundColor: '#3D3D7A',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
  },
  ratingButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
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

export default BookingScreen;