/**
 * App Theme - Sizes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import AppColors from './colors';

// 页面容器
const pageWrapper = {
  flex: 1,
  backgroundColor: AppColors.appBackground
};

// 区域卡片外层包裹容器
const cardWrapper = {
  flex: 1,
  backgroundColor: AppColors.cardWrapperBackground
};

// 区域卡片内容容器
const cardContainer = {
  flex: 1,
  marginTop: 8,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: AppColors.cardContainerBackground
};

export default AppCommonStyles = {
  pageWrapper,
  cardWrapper,
  cardContainer
};