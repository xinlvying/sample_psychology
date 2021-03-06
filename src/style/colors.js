/**
 * App Theme - Colors
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

const app = {
  appBackground: '#FFF', // APP背景
  pageBackground: '#F1F3F8',// 页面容器背景
  cardBackground: '#FFF' // 区域卡片内容容器背景
};

const brand = {
  brand: {
    primary: '#0d86ff',
    secondary: '#262626',
    black: '#000'
  },
};

const text = {
  textTitle: '#555',
  textDefault: '#AAA',
  textPrimary: '#EEE',
  textSecondary: '#333333',
  textLink: '#009688',
  textMuted: '#c8c7cc'
};

export default {
  ...app,
  ...brand,
  ...text
};
