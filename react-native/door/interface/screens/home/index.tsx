import {StyleSheet, View} from 'react-native';
import {RouteHome} from '../../../exporter';

const Home = () => {
    return (
        <View style={styles.container}>
            <RouteHome />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;
