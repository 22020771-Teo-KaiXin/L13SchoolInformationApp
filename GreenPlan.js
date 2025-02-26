import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0fdf4',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        elevation: 5,
        width: '90%'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    bullet: {
        fontSize: 16,
        marginBottom: 10
    }
});

const GreenPlan = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Strengthening Green Efforts in All Schools</Text>

            <View style={styles.card}>
                <Icon name="leaf" size={20}/>
                <Text style={styles.header}>2030 Targets:</Text>
                <Text style={styles.bullet}>• Achieve a two-thirds reduction of net carbon emissions from the schools sector.</Text>
                <Text style={styles.bullet}>• At least 20% of schools to be carbon neutral.</Text>
            </View>
        </View>
    );
};

export default GreenPlan;
