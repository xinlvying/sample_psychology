import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
// 轮播组件
import Swiper from 'react-native-swiper';

// 公共样式
import { AppColors, AppSizes, AppFonts } from '../style';

const styles = StyleSheet.create({
  // 页面容器
  pageContainer: {
    flex: 1,
    backgroundColor: AppColors.cardBackground
  },
  cardBackground: {
    flex: 1,
    marginTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: AppColors.cardBackground
  },

  // 轮播父容器
  swiperContainer: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 100,
    backgroundColor: AppColors.cardBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // wrapper: {
  // backgroundColor: '#888'
  // },
  paginationStyle: {
    bottom: 8
  },
  bannerImg: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
  },

  // 功能按钮组
  buttonGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingRight: 20,
    width: AppSizes.screen.width,
    backgroundColor: AppColors.cardBackground,
    // borderTopWidth: Util.pixel,
    // borderTopColor: "#ccc",
    // borderLeftWidth: Util.pixel,
    // borderLeftColor: "#ccc",
    // borderRightWidth: Util.pixel,
    // borderRightColor: "#ccc",
  },
  touchBox: {
    width: (AppSizes.screen.width - 40) / 3 - 0.33334,
    height: 180,
    backgroundColor: "#fff",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: (AppSizes.screen.width - 40) / 3,
    height: 90,
  },
  boxText: {
    position: "absolute",
    bottom: 15,
    width: (AppSizes.screen.width - 40) / 3,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent"
  },

  // 专题推送区
  pushArticleContainer: {
    height: 120,
    backgroundColor: AppColors.background,
  },
  homeModuleTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: AppFonts.h5.fontSize,
    lineHeight: AppFonts.h5.lineHeight,
    color: AppColors.textTitle
  },
  moduleScrollContainer: {
    flex: 1,
    // paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  scrollItem: {
    flex: 1,
    marginLeft: 10,
    width: 140,
    borderRadius: 6,
    backgroundColor: '#999'
  },
  firstScrollItem: {
    marginLeft: 0
  },

  // 相关文章列表
  articleListContainer: {
    flex: 1,
    height: 300,
    backgroundColor: AppColors.background,
  },
  articleItem: {
    paddingTop: 20,
    paddingBottom: 20,
    // height: 150,
    // backgroundColor: '#333',
    borderTopWidth: 1,
    borderTopColor: AppColors.background,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.background,
  },
  article: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  articleTitleAndDes: {
    flex: 1,
    marginRight: 14
  },
  articleTitle: {
    fontSize: AppFonts.h2.fontSize,
    lineHeight: AppFonts.h2.lineHeight,
    color: AppColors.textTitle
  },
  articleDes: {
    marginTop: 10,
    fontSize: AppFonts.h5.fontSize,
    lineHeight: AppFonts.h3.lineHeight,
    color: AppColors.textDefault
  },
  articlePoster: {
    flex: 0,
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  articleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 20
  },
  authorWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImg: {
    flex: 0,
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 10
  },
  articleInfoText: {
    fontSize: 12,
    color: AppColors.textDefault
  },


  // logo
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: AppSizes.screen.width,
    height: 80,
    backgroundColor: AppColors.background,
  },
  logoLeftLine: {
    marginRight: 10,
    width: 50,
    height: 1,
    backgroundColor: '#666'
  },
  logoRightLine: {
    marginLeft: 10,
    width: 50,
    height: 1,
    backgroundColor: '#666'
  },
  logoText: {
    fontSize: AppFonts.h1.fontSize,
    lineHeight: AppFonts.h1.lineHeight,
    color: AppColors.textTitle
  }
});

export default class HomePage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.pageContainer}>

        {/* 首页banner轮播 */}
        <View style={styles.swiperContainer}>
          <Swiper
            style={styles.wrapper}
            paginationStyle={styles.paginationStyle}
            showsButtons={false}
            autoplay
          >
            <Image style={styles.bannerImg} source={require('../images/banner.png')} />
            <Image style={styles.bannerImg} source={require('../images/banner.png')} />
          </Swiper>
        </View>

        {/* 功能按钮组 */}
        <View style={styles.buttonGroupContainer}>
          <TouchableHighlight
            underlayColor="#eee"
            onPress={() => alert('1')}>
            <View style={styles.boxContainer}>
              <Text style={styles.boxText}>心理咨询</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#eee"
            onPress={() => alert('2')}>
            <View style={styles.boxContainer}>
              <Text style={styles.boxText}>心理测试</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#eee"
            onPress={() => alert('4')}>
            <View style={styles.boxContainer}>
              <Text style={styles.boxText}>心理悦读</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#eee"
            onPress={() => alert('5')}>
            <View style={styles.boxContainer}>
              <Text style={styles.boxText}>心理动态</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#eee"
            onPress={() => alert('6')}>
            <View style={styles.boxContainer}>
              <Text style={styles.boxText}>匿名树洞</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#eee"
            onPress={() => alert('3')}>
            <View style={styles.boxContainer}>
              <Text style={styles.boxText}>尽请期待</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/* 专题推送区 */}
        <View style={styles.pushArticleContainer}>
          <View style={styles.cardBackground}>
            <Text style={styles.homeModuleTitle}>专题推荐</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.moduleScrollContainer}>
              <TouchableHighlight
                underlayColor="#eee"
                onPress={() => alert('1')}>
                <Image style={[styles.scrollItem, styles.firstScrollItem]} source={require('../images/banner.png')} />
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="#eee"
                onPress={() => alert('1')}>
                <Image style={styles.scrollItem} source={require('../images/banner.png')} />
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="#eee"
                onPress={() => alert('1')}>
                <Image style={styles.scrollItem} source={require('../images/banner.png')} />
              </TouchableHighlight>
            </ScrollView>
          </View>
        </View>

        {/* 相关文章推荐列表 */}
        <View style={styles.articleListContainer}>
          <View style={styles.cardBackground}>
            <Text style={styles.homeModuleTitle}>热门心理</Text>

            <TouchableHighlight
              underlayColor="#eee"
              onPress={() => alert('1')}>
              <View style={styles.articleItem}>
                <View style={styles.article}>
                  <View style={styles.articleTitleAndDes}>
                    <Text style={styles.articleTitle}>这是一篇文章的标题！</Text>
                    <Text style={styles.articleDes}>这是一篇文章的简介！这是一篇文章的简介！这是一篇文章的简介！这是一篇文章的简介！</Text>
                  </View>
                  <Image style={styles.articlePoster} source={require('../images/banner.png')} />
                </View>
                <View style={styles.articleInfo}>
                  <View style={styles.authorWrapper}>
                    <Image style={styles.authorImg} source={require('../images/banner.png')} />
                    <Text style={styles.articleInfoText}>倾心无痕</Text>
                  </View>
                  <View>
                    <Text style={styles.articleInfoText}>45634阅读·文章</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* 底部文字logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoLeftLine}></View>
          <Text style={styles.logoText}>倾心无痕</Text>
          <View style={styles.logoRightLine}></View>
        </View>
      </ScrollView>
    );
  }
}