import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        marginTop: 25,
    },
    searchBar: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 1,
        width: '90%',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    itemContainer: {
        borderWidth: 2,

        padding: 10,
        marginHorizontal: 20,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 15,
        marginRight: 50,
        marginLeft: 21,
        fontWeight: 'bold'
    }
});

let originalData = [];

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_688b934f82c1059ed0a6993d2a829089")
            .then((response) => {
                return response.json();
            })
            .then((myJSON) => {
                let schools = myJSON.result.records;
                if (originalData.length < 1) {
                    setMyData(schools);
                    originalData = schools;
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const FilterData = (text) => {
        if (text.trim() !== '') {
            let myFilteredData = originalData.filter((item) =>
                item.school_name.toLowerCase().includes(text.toLowerCase())
            );
            setMyData(myFilteredData);
        } else {
            setMyData(originalData);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
                navigation.navigate("SchoolInformation", { school: item });
            }}
        >
            <Text style={styles.textStyle}>{item.school_name}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <StatusBar />
            <Icon name="school" size={20}/>
            <Text style={styles.title}>SCHOOL INFORMATION</Text>
            <Text style={styles.label}>Search School Name:</Text>
            <TextInput style={styles.searchBar} onChangeText={FilterData} />
            <FlatList data={myData} renderItem={renderItem} keyExtractor={(item) => item.school_name} />
        </View>
    );
};

export default Home;
