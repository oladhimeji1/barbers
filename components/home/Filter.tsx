import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Slider from '@react-native-community/slider';
import React, { forwardRef, useMemo, useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const categories = ['Basic haircut', 'Coloring', 'Treatment', 'Massage', 'Kids haircut'];

export interface FilterBottomSheetRef {
    present: () => void;
    dismiss: () => void;
}

interface FilterBottomSheetProps {
    onApply?: (filters: {
        categories: string[];
        rating: number;
        nearestDistance: string;
        farthestDistance: string;
    }) => void;
}

export const FilterBottomSheet = forwardRef<FilterBottomSheetRef, FilterBottomSheetProps>(
    ({ onApply }, ref) => {
        const bottomSheetRef = React.useRef<BottomSheet>(null);
        const snapPoints = useMemo(() => ['75%', '90%'], []);

        const [selectedCategories, setSelectedCategories] = useState<string[]>(['Basic haircut']);
        const [rating, setRating] = useState<number>(4.0);
        const [nearestDistance, setNearestDistance] = useState<string>('0.1');
        const [farthestDistance, setFarthestDistance] = useState<string>('10');

        // Expose methods to parent component
        React.useImperativeHandle(ref, () => ({
            present: () => bottomSheetRef.current?.snapToIndex(0),
            dismiss: () => bottomSheetRef.current?.close(),
        }));

        const toggleCategory = (category: string): void => {
            if (selectedCategories.includes(category)) {
                setSelectedCategories(selectedCategories.filter((c) => c !== category));
            } else {
                setSelectedCategories([...selectedCategories, category]);
            }
        };

        const handleApply = (): void => {
            onApply?.({
                categories: selectedCategories,
                rating,
                nearestDistance,
                farthestDistance,
            });
            bottomSheetRef.current?.close();
        };

        const handleClose = (): void => {
            bottomSheetRef.current?.close();
        };

        return (
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose
                backgroundStyle={styles.bottomSheetBackground}
                handleIndicatorStyle={styles.handleIndicator}
            >
                <BottomSheetScrollView style={styles.content}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.helpButton}>
                            <Text style={styles.helpIcon}>?</Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>Filter</Text>
                        <TouchableOpacity onPress={handleClose}>
                            <Text style={styles.closeIcon}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    {/* General Category */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>General Category</Text>
                        <View style={styles.categoryContainer}>
                            {categories.map((category) => (
                                <TouchableOpacity
                                    key={category}
                                    style={[
                                        styles.categoryChip,
                                        selectedCategories.includes(category) && styles.categoryChipSelected,
                                    ]}
                                    onPress={() => toggleCategory(category)}
                                >
                                    <Text
                                        style={[
                                            styles.categoryText,
                                            selectedCategories.includes(category) && styles.categoryTextSelected,
                                        ]}
                                    >
                                        {category}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Rating Barber */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Rating Barber</Text>
                        <View style={styles.starsContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Text
                                    key={star}
                                    style={[
                                        styles.star,
                                        star <= Math.floor(rating) && styles.starFilled,
                                    ]}
                                >
                                    ★
                                </Text>
                            ))}
                            <Text style={styles.ratingText}>({rating.toFixed(1)})</Text>
                        </View>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={5}
                            step={0.5}
                            value={rating}
                            onValueChange={setRating}
                            minimumTrackTintColor="#3D3D7A"
                            maximumTrackTintColor="#E0E0E0"
                            thumbTintColor="#3D3D7A"
                        />
                    </View>

                    {/* Distance */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Distance</Text>
                        <View style={styles.distanceContainer}>
                            <View style={styles.distanceInput}>
                                <Text style={styles.distanceLabel}>Nearest</Text>
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        style={styles.input}
                                        value={nearestDistance}
                                        onChangeText={setNearestDistance}
                                        keyboardType="numeric"
                                    />
                                    <Text style={styles.unit}>km</Text>
                                </View>
                            </View>
                            <Text style={styles.distanceSeparator}>—</Text>
                            <View style={styles.distanceInput}>
                                <Text style={styles.distanceLabel}>Farthest</Text>
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        style={styles.input}
                                        value={farthestDistance}
                                        onChangeText={setFarthestDistance}
                                        keyboardType="numeric"
                                    />
                                    <Text style={styles.unit}>km</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Apply Button */}
                    <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </BottomSheetScrollView>
            </BottomSheet>
        );
    }
);

const styles = StyleSheet.create({
    bottomSheetBackground: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    handleIndicator: {
        backgroundColor: '#D1D5DB',
        width: 40,
    },
    content: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    helpButton: {
        width: 30,
        height: 30,
        backgroundColor: '#FF9933',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpIcon: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
    closeIcon: {
        fontSize: 20,
        color: '#999999',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E1E1E',
        marginBottom: 15,
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    categoryChip: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
    },
    categoryChipSelected: {
        backgroundColor: '#3D3D7A',
        borderColor: '#3D3D7A',
    },
    categoryText: {
        fontSize: 12,
        color: '#666666',
    },
    categoryTextSelected: {
        color: '#FFFFFF',
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    star: {
        fontSize: 16,
        color: '#E0E0E0',
        marginRight: 5,
    },
    starFilled: {
        color: '#FF9933',
    },
    ratingText: {
        fontSize: 12,
        color: '#666666',
        marginLeft: 5,
    },
    slider: {
        width: '100%',
        height: 20,
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    distanceInput: {
        flex: 1,
    },
    distanceLabel: {
        fontSize: 12,
        color: '#666666',
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3D3D7A',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 40,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: '#1E1E1E',
        fontWeight: '600',
    },
    unit: {
        fontSize: 14,
        color: '#666666',
    },
    distanceSeparator: {
        fontSize: 20,
        color: '#666666',
        marginHorizontal: 15,
    },
    applyButton: {
        backgroundColor: '#3D3D7A',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 16,
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});
