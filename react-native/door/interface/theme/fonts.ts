/* NOTE:
 * fontWeight can be only type of
 * "400" | "300" | "500" | "600" | "700" | "normal" | "bold" | "100" | "200" | "800" | "900" | undefined'.
 * thats why instead of
 * fontWeight: '400', we are doing
 * fontWeight: '400' as '400'
 **/

export default {
    Inter: {
        fontFamily: 'Inter-VariableFont_slnt,wght',
        'electron-400': {fontFamily: 'Inter-Regular', fontSize: 10},
        'atom-300': {fontFamily: 'Inter-Light', fontSize: 12},
        'atom-400': {fontFamily: 'Inter-Regular', fontSize: 12},
        'atom-500': {fontFamily: 'Inter-Medium', fontSize: 12},
        'element-400': {fontFamily: 'Inter-Regular', fontSize: 14},
        'element-500': {fontFamily: 'Inter-Medium', fontSize: 14},
        'element-600': {fontFamily: 'Inter-SemiBold', fontSize: 14},
        'hint-400': {fontFamily: 'Inter-Regular', fontSize: 16},
        'hint-500': {fontFamily: 'Inter-Medium', fontSize: 16},
        'hint-700': {fontFamily: 'Inter-Bold', fontSize: 16},
        'description-500': {fontFamily: 'Inter-Medium', fontSize: 18},
        'description-600': {fontFamily: 'Inter-SemiBold', fontSize: 18},
        'heading-600': {fontFamily: 'Inter-SemiBold', fontSize: 20},
        'heading-700': {fontFamily: 'Inter-Bold', fontSize: 20},
    },
};
