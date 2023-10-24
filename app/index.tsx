import React from 'react';
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Categories from '@/Components/Categories';
import Restaurants from '@/Components/Restaurants';
import Colors from '@/constants/Colors';

const Page = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView alwaysBounceVertical={true} contentContainerStyle={{ paddingBottom: 40 }}>
                <Categories />
                <Text style={styles.header}>Top picks in your neighborhood </Text>
                <Restaurants />
                <Text style={styles.header}>Offers near you </Text>
                <Restaurants />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      top: 120,
      backgroundColor: Colors.lightGrey,
      marginBottom: 120
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 8,
      paddingHorizontal: 16,
    },
  });


export default Page;