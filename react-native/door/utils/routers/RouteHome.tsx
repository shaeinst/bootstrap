import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TimelineScreen} from '../../exporter/screen';
import {ROUTENAMES} from '../../exporter';

const {Navigator, Screen} = createNativeStackNavigator();

const RouteHome = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                animationDuration: 200,
            }}
            initialRouteName={ROUTENAMES.HOME.TIMELINE}
            /* -------------------------------- */
        >
            <Screen
                name={ROUTENAMES.HOME.TIMELINE}
                component={TimelineScreen}
            />
        </Navigator>
    );
};

export default RouteHome;
