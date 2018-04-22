/**
 * App Theme - Sizes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import AppColors from './colors';

const appContainer = {
  flex: 1,
  backgroundColor: AppColors.appBackground
}

// 页面容器
const pageContainer = {
  flex: 1,
  backgroundColor: AppColors.pageBackground
};

// 区域卡片内容容器
const cardContainer = {
  flex: 1,
  marginTop: 8,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: AppColors.cardBackground
};

export default AppCommonStyles = {
  appContainer,
  pageContainer,
  cardContainer
};