import React from 'react';
import {Svg, Path} from 'react-native-svg';

type Props = {
    fill?: string;
    stroke?: string;
    width?: string;
    height?: string;
};

const Home = (props: Props) => (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
        <Path
            stroke={props.stroke ? props.stroke : '#14171A'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 22.4875V18.7375M11.275 3.54996L4.5375 8.79996C3.4125 9.67496 2.5 11.5375 2.5 12.95V22.2125C2.5 25.1125 4.8625 27.4875 7.7625 27.4875H22.2375C25.1375 27.4875 27.5 25.1125 27.5 22.225V13.125C27.5 11.6125 26.4875 9.67496 25.25 8.81246L17.525 3.39996C15.775 2.17496 12.9625 2.23746 11.275 3.54996Z"
        />
    </Svg>
);

export default Home;
