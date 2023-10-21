import React, { useMemo, forwardRef, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);

    const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);

    const { dismiss } = useBottomSheetModal()
    return (
        <BottomSheetModal 
            handleIndicatorStyle={{display: 'none'}}
            backgroundStyle={{borderRadius: 0, backgroundColor: Colors.lightGrey}}
            overDragResistanceFactor={0}
            ref={ref} 
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
        >
            <View style={styles.contentContainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity style={styles.toggleActive}>
                        <Text style={styles.activeText}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggleInactive}>
                        <Text style={styles.inActiveText}>Pickup</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.subHeader}>Your Location</Text>
                <Link href={'/(modal)/location-search'} asChild>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Ionicons name='location-outline' size={20} color={Colors.medium} />
                            <Text style={{flex: 1}}>Current Location</Text>
                            <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>
                </Link>

                <Text style={styles.subHeader}>Arrival Time</Text>
                <Link href={'/'} asChild>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Ionicons name='stopwatch-outline' size={20} color={Colors.medium} />
                            <Text style={{flex: 1}}>Now</Text>
                            <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
                        </View>
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </BottomSheetModal>
    )
});

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 32
    },
    toggleActive: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30
    },
    activeText: {
        color: '#fff',
        fontWeight: '700'
    },
    toggleInactive: {
        // backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30
    },
    inActiveText: {
        color: Colors.primary,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 4,
        margin: 16,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    subHeader: {
        fontSize: 16,
        fontWeight: '600',
        margin: 16
    },
    item: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderColor: Colors.grey,
        borderWidth: 1
    }
})

export default BottomSheet;