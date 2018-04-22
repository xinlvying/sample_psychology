/**
 * App Theme - Sizes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {

  // Window Dimensions
  screen: {
    height: screenHeight,
    width: screenWidth,

    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
  },

  // Page Container
  container: {
    width: screenWidth - 40,
    widthHalf: (screenWidth - 40) * 0.5,
    widthThird: (screenWidth - 40) * 0.333,
    widthTwoThirds: (screenWidth - 40) * 0.666,
    widthQuarter: (screenWidth - 40) * 0.25,
    widthThreeQuarters: (screenWidth - 40) * 0.75,
  },

  // Navbar
  navbarHeight: (Platform.OS === 'ios') ? 50 : 50,
  statusBarHeight: (Platform.OS === 'ios') ? 16 : 24,
};
