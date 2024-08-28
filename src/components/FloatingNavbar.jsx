import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatingNavbar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            <View style={styles.floating}>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={16} color="#000" />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Task')}>
                <Icon name="file" size={16} color="#000" />
                <Text style={styles.navText}>Tugas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Absent')}>
                <Icon name="check" size={16} color="#000" />
                <Text style={styles.navText}>Absensi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
                <Icon name="user" size={16} color="#000" />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
            </View>
         
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding:10,
        // backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        zIndex: 10, // Ensure it's above other elements
    },
    floating: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        borderRadius: 50,
        backgroundColor: '#fff',
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: 10,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#000',
        fontSize: 12,
    },
});

export default FloatingNavbar;
