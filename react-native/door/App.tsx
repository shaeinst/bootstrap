// libraries imports
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
// custom imports
import {COLORS} from './exporter';
import {InitialAuthScreen, InitialHomeScreen} from './exporter/screen';
import {RootState} from './exporter/type';

const App = () => {
    const isThemeDark = useColorScheme() === 'dark';

    const isSignedIn = useSelector(
        (state: RootState) => state.authentication.isSignedIn,
    );

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.background}
                barStyle={isThemeDark ? 'light-content' : 'dark-content'}
            />

            <NavigationContainer>
                {isSignedIn ? (
                    // if user is signed in (Home screen)
                    <InitialHomeScreen />
                ) : (
                    // if user is not signed in (Authentication screeen)
                    <InitialAuthScreen />
                )}
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});
export default App;
