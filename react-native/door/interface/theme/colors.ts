import {Appearance} from 'react-native';

const colors = {
    primary: {light: '#1DA1F2', dark: '#1DA1F2'},
    main: {light: '#14171A', dark: '#c9cbcd'},
    background: {light: '#F5F8FA', dark: '#14171A'},
    divider: {light: '#E1E8ED', dark: '#1D2123'},
    dblue: {light: 'rgba(250, 250, 250, 1)', dark:  'rgba(6, 32, 48, 1)'},

    // theme mode independent colors
    common: {
        warning: '#DD1D1D',
        success: '#2BAA20',
        neutral1: '#657786',
        neutral2: '#AAB8C2',
        neutral3: '#E1E8ED',
        black: '#14171A',
        highlight: '#f0882e',
    },
};

interface ColorsInterface {
    primary: string;
    main: string;
    background: string;
    divider: string;
    warning: string;
    success: string;
    neutral1: string;
    neutral2: string;
    neutral3: string;
    black: string;
    dblue: string,
    highlight: string,
}

const COLORS: ColorsInterface =
    Appearance.getColorScheme() === 'dark'
        ? {
              ...colors.common,
              primary: colors.primary.dark,
              main: colors.main.dark,
              background: colors.background.dark,
              divider: colors.divider.dark,
              dblue: colors.dblue.dark,
          }
        : {
              ...colors.common,
              primary: colors.primary.light,
              main: colors.main.light,
              background: colors.background.light,
              divider: colors.divider.light,
              dblue: colors.dblue.light,
          };

export default COLORS;
