import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // For navigation
import { SubmitButton, ButtonText } from '../components/styles'; // Custom button components
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    const navigation = useNavigation(); // Hook to access navigation
    const [error, setError] = React.useState(''); // State for error handling
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    React.useEffect(() => {
        // Function to format date and time
        const updateDateTime = () => {
            const now = new Date();
            const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
            const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
            setDate(now.toLocaleDateString(undefined, optionsDate));
            setTime(now.toLocaleTimeString(undefined, optionsTime));
        };

        // Update date and time on component mount
        updateDateTime();

        // Optionally, set up an interval to update time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleLogout = async () => {
        try {
            // Clear user data from local storage
            await AsyncStorage.removeItem('userData');

            // Navigate back to the login screen
            navigation.replace('Login'); // Replace 'Login' with your actual login screen name
        } catch (err) {
            setError(err.message);
        }
    };

    const handleAbsent = async () => {
        try {
            // Set the timestamp when the user clicked the button
            const timestamp = new Date().getTime();
            await AsyncStorage.setItem('timestamp', timestamp.toString());

            // Perform other actions related to absent
            // ...
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 15 }}>Hi, Dhanu</Text>
            <View style={styles.box1}>
                <Text style={{ color: '#148FFF', fontSize: 18, fontWeight: '500' }}>Absensi</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.iconTextContainer}>
                        <Icon name="calendar" size={20} color="#d7d7d7" style={styles.icon} />
                        <Text style={{ color: '#d7d7d7', marginRight: 10 }}>{date}</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                        <Text style={{ color: '#d7d7d7' }}>{time}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleAbsent} style={styles.submitButton}>
                    <Text style={styles.buttonText}>Clock In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box2}>
                <View style={styles.rowContainer1}>
                    <Text style={{ color: '#148FFF', fontSize: 12, fontWeight: '500' }}>Menu</Text>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>Lihat Semua</Text>
                </View>
                <View style={styles.buttonContainer}>
                    {/* Map through your buttons or manually add them */}
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="clock-o" size={20} color="#d7d7d7" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <Button title="Logout" onPress={handleLogout} color="#FF5722" />
            {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // justifyContent: 'flex-start', // Align content to the start
        // alignItems: 'center',
        // backgroundColor: '#e7e7e7',
        padding: 20,
    },
    submitButton: {
        backgroundColor: '#148FFF',
        borderRadius: 25, // Ensure this is half of the height to make it fully rounded
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20, // Adjust this for horizontal padding
        alignSelf: 'flex-start', // Make button wrap its content
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        marginRight: 5, // Space between the icon and the text
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10,
    },
    rowContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row', // Keep flexDirection for compatibility
        flexWrap: 'wrap', // Wrap buttons to the next line
        justifyContent: 'space-between', // Distribute space evenly
        padding: 10,
        gap: 10, // Space between buttons
    },
    button: {
        width: '20%', // Set width to 23% to account for gaps
        aspectRatio: 1, // Ensures the button is square
        marginBottom: 10, // Space between rows
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    
    box1: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: 10,
    },
    box2: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3: {
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 25,
        elevation: 10, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.7,
        shadowRadius: 8,
    },
    boxText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Home;
