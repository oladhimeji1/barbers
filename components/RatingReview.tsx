import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
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

const quickTags = [
    'Overall good',
    'Good service',
    'Satisfying',
    'Comfortable',
    'Recommended',
    'Cheap',
    'Perfect results',
    'Accurate estimate',
];

const RatingReviewScreen: React.FC = () => {
    const [rating, setRating] = useState<number>(4);
    const [review, setReview] = useState<string>('Overall good');
    const [selectedTags, setSelectedTags] = useState<string[]>(['Overall good', 'Good service']);

    const params = useLocalSearchParams();
    const barbershop = params.barbershop ? JSON.parse(params.barbershop as string) : null;

    if (!barbershop) return null;

    const toggleTag = (tag: string): void => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleSend = (): void => {
        // Submit review
        router.back();
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header removed for Stack Navigation */}

                {/* Barbershop Card */}
                <View style={styles.barbershopCard}>
                    <Image source={barbershop.image} style={styles.barbershopImage} />
                    <View style={styles.barbershopInfo}>
                        <Text style={styles.barbershopName}>{barbershop.name}</Text>
                        <View style={styles.locationRow}>
                            <Text style={styles.locationIcon}>📍</Text>
                            <Text style={styles.locationText}>
                                {barbershop.location} ({barbershop.distance})
                            </Text>
                        </View>
                        <View style={styles.ratingRow}>
                            <Text style={styles.starIcon}>⭐</Text>
                            <Text style={styles.ratingText}>
                                {barbershop.rating} ({barbershop.reviewCount || 24})
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Rating Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Rating</Text>
                    <View style={styles.starsContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <TouchableOpacity key={star} onPress={() => setRating(star)}>
                                <Text style={[styles.star, star <= rating && styles.starFilled]}>
                                    ★
                                </Text>
                            </TouchableOpacity>
                        ))}
                        <Text style={styles.ratingValue}>({rating}.0)</Text>
                    </View>
                </View>

                {/* Review Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Review</Text>
                    <View style={styles.reviewInputContainer}>
                        <TextInput
                            style={styles.reviewInput}
                            value={review}
                            onChangeText={setReview}
                            multiline
                            placeholder="Write your review..."
                            placeholderTextColor="#999999"
                        />
                        {review && (
                            <TouchableOpacity
                                style={styles.clearButton}
                                onPress={() => setReview('')}
                            >
                                <Text style={styles.clearIcon}>✕</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    {/* Quick Tags */}
                    <View style={styles.tagsContainer}>
                        {quickTags.map((tag) => (
                            <TouchableOpacity
                                key={tag}
                                style={[
                                    styles.tag,
                                    selectedTags.includes(tag) && styles.tagSelected,
                                ]}
                                onPress={() => toggleTag(tag)}
                            >
                                <Text
                                    style={[
                                        styles.tagText,
                                        selectedTags.includes(tag) && styles.tagTextSelected,
                                    ]}
                                >
                                    {tag}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Send Button */}
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3D3D7A',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    backIcon: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    placeholder: {
        width: 24,
    },
    barbershopCard: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginHorizontal: 20,
        marginBottom: 20,
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
        color: '#FFFFFF',
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
        color: '#E0E0E0',
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
        color: '#E0E0E0',
    },
    section: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 20,
        borderRadius: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E1E1E',
        marginBottom: 15,
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        fontSize: 40,
        color: '#E0E0E0',
        marginRight: 8,
    },
    starFilled: {
        color: '#FF9933',
    },
    ratingValue: {
        fontSize: 18,
        color: '#666666',
        marginLeft: 10,
    },
    reviewInputContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    reviewInput: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 12,
        padding: 15,
        minHeight: 120,
        textAlignVertical: 'top',
        fontSize: 14,
        color: '#1E1E1E',
    },
    clearButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearIcon: {
        fontSize: 14,
        color: '#666666',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    tag: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
    },
    tagSelected: {
        backgroundColor: '#3D3D7A',
        borderColor: '#3D3D7A',
    },
    tagText: {
        fontSize: 13,
        color: '#666666',
    },
    tagTextSelected: {
        color: '#FFFFFF',
    },
    sendButton: {
        backgroundColor: '#3D3D7A',
        marginHorizontal: 40,
        marginBottom: 30,
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default RatingReviewScreen;