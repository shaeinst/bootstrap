//libraries imports
import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// custom imports
import {ROUTENAMES} from '../../exporter';
import {LoginScreen} from '../../exporter/screen';
import { RootState } from '../../exporter/type';

const {Navigator, Screen} = createNativeStackNavigator();

const RouteAuthentication = () => {
    // login state (authentication state)
    const isSignedOut = useSelector(
        (state: RootState) => state.authentication.isSignedOut,
    );

    return (
        <Navigator
            initialRouteName={ROUTENAMES.AUTH.LOGIN}
            screenOptions={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: isSignedOut ? 'pop' : 'push',
            }}
            /* -------------------------------- */
        >
            <Screen
                name={ROUTENAMES.AUTH.LOGIN}
                options={{headerShown: false}}
                component={LoginScreen}
            />
        </Navigator>
    );
};

export default RouteAuthentication;
