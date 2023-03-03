import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import App from './App';
import {reduxStore} from './exporter';
import {LaunchingScreen} from './exporter/screen';
import {StyleSheet} from 'react-native/types';

const Index = () => {
    const [appLaunching, setAppLaunching] = useState(true);

    useEffect(() => {
        // show app launching screen for some millisecond
        setTimeout(() => {
            setAppLaunching(false);
        }, 250);
    }, []);

    return (
        <>
            {appLaunching ? (
                // when app is launching (i.e launching screen. can be use to show logo)
                <LaunchingScreen />
            ) : (
                // when app is launched
                <GestureHandlerRootView style={styles.container}>
                    <Provider store={reduxStore}>
                        <App />
                    </Provider>
                </GestureHandlerRootView>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Index;
