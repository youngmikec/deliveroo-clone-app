import { 
    View, 
    Text,
    SafeAreaView, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    TextInput,
} from "react-native";
import React, { useRef } from 'react'
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Link } from "expo-router";
import BottomSheet from "./BottomSheet";


const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons name="ios-search" style={styles.searchIcon} size={20} color={Colors.mediumDark} />
                <TextInput style={styles.input} placeholder="Restaurant, groceries, dishes" />
            </View>
            <Link href={'/(modal)/filter'} asChild>
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="options-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
)

const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null)
    const openModal = () => {
        bottomSheetRef.current?.present();
    }

  return (
    <SafeAreaView style={styles.safeArea}>
        <BottomSheet ref={bottomSheetRef} />
        <View style={styles.container}>
            <TouchableOpacity onPress={openModal}>
                <Image style={styles.bike} source={require('../assets/images/bike.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
                <Text style={styles.title}>Delivery . Now</Text>
                <View style={styles.locationName}>
                    <Text style={styles.subTitle}>Nigeria</Text>
                    <Ionicons name="chevron-down" size={20} color={Colors.primary} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
                <Ionicons name="person-outline" size={20} color={Colors.primary} />
            </TouchableOpacity>
        </View>
        <SearchBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        height: 90,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: "flex-end",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    bike: {
        width: 30,
        height: 30
    },
    title: {
        fontSize: 14,
        color: Colors.medium
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50
    },
    searchContainer: {
        height: 60,
        backgroundColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        gap: 20,
        paddingHorizontal: 20,
        alignItem: 'center'
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        paddingLeft: 10
    },
    input: {
        padding: 10,
        color: Colors.mediumDark
    },
    optionButton: {
        padding: 10,
        borderRadius: 50
    }
})

export default CustomHeader;