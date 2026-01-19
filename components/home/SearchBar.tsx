import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    onFilterPress?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = "Search barber's, haircut ser...",
    onFilterPress,
}) => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <Image
                    source={require('../../assets/icons/search.png')}
                    contentFit='cover'
                    style={{ marginRight: 4, tintColor: '#64748B', width: 16, height: 16 }}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor="#999999"
                />
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
                <Image
                    source={require('../../assets/icons/filter.png')}
                    contentFit='cover'
                    style={{ marginRight: 4, tintColor: '#ffff', width: 16, height: 16 }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
        paddingHorizontal: 10,
        height: 40,
        width: '100%',
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
    },
    filterButton: {
        width: 40,
        height: 40,
        backgroundColor: '#363062',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
