import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    card: {
        width: '90%',
        backgroundColor: 'white',
        padding: 10,
        elevation: 5,
        borderWidth: 2,
    },
    schoolName: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexWrap: 'wrap'
    },
    mrtRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    busRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    value: {
        fontSize: 16,
        flexWrap: 'wrap',
        width: '100%'
    },
    GreenPlanLink: {
        marginTop: 20,
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    Links: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

const SchoolInformation = ({ navigation, route }) => {
    const { school } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.schoolName}>{school.school_name}</Text>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Address:</Text>
                    <Text
                        style={styles.Links}
                        onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.address)}`)}
                    >
                        {school.address}
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Postal Code:</Text>
                    <Text style={styles.value}>{school.postal_code}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Tel:</Text>
                    <Text style={styles.Links} onPress={() => Linking.openURL(`tel:${school.telephone_no}`)}>
                        {school.telephone_no}
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.Links} onPress={() => Linking.openURL(`mailto:${school.email_address}`)}>
                        {school.email_address}
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Principal:</Text>
                    <Text style={styles.value}>{school.principal_name}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>School Type:</Text>
                    <Text style={styles.value}>{school.type_code}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Nature:</Text>
                    <Text style={styles.value}>{school.nature_code}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Session:</Text>
                    <Text style={styles.value}>{school.session_code}</Text>
                </View>

                <View style={styles.mrtRow}>
                    <Text style={styles.label}>Nearest MRT:</Text>
                    <Text style={styles.value}>{school.mrt_desc}</Text>
                </View>

                <View style={styles.busRow}>
                    <Text style={styles.label}>Bus Services:</Text>
                    <Text style={styles.value}>{school.bus_desc}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Website:</Text>
                    <Text
                        style={styles.Links}
                        onPress={() => Linking.openURL(school.url_address)}
                    >
                        {school.url_address}
                    </Text>
                </View>
            </View>

            <Text style={styles.GreenPlanLink} onPress={() => navigation.navigate('GreenPlan')}>
                Click here to know more about the schools Green Plan ➜
            </Text>
        </View>
    );
};

export default SchoolInformation;

