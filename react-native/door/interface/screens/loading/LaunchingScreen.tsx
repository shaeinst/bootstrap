import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoSTENETS} from '../../../exporter/asset';
import COLORS from '../../theme/colors';

const LaunchLoading = () => {
    return (
        <View style={styles.container}>
            <Text>app launching</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LaunchLoading;
