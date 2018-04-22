import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
// 自定义轮播组件
import BannerSwiper from '../components/BannerSwiper';
import ArticleListItem from '../components/ArticleListItem';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: 'https://jdxl-img.b0.upaiyun.com/post/8daaff107b2c477885b0d59af276a6de.jpeg',
          author: '登山涉水',
          authorImg: 'https://jdxl-img.b0.upaiyun.com/post/8daaff107b2c477885b0d59af276a6de.jpeg',
          viewCount: 34567
        },
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: 'https://jdxl-img.b0.upaiyun.com/post/8daaff107b2c477885b0d59af276a6de.jpeg',
          author: '登山涉水',
          authorImg: 'https://jdxl-img.b0.upaiyun.com/post/8daaff107b2c477885b0d59af276a6de.jpeg',
          viewCount: 34567
        },
      ]
    }
  }

  render() {
    const { navigation } = this.props;
    const { articleList } = this.state;

    return (
      <View style={AppCommonStyles.appContainer}>
        <StatusBar
          animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
          hidden={false}  //是否隐藏状态栏。  
          backgroundColor={'#FFF'} //状态栏的背景色  
          barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')   
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={AppCommonStyles.pageContainer}>

          {/* 首页banner轮播 */}
          <BannerSwiper
            containerStyle={[AppCommonStyles.cardContainer, styles.cardContainer]}
            parentProps={this.props}
            bannerList={[
              { src: 'https://jdxl-img.b0.upaiyun.com/post/8daaff107b2c477885b0d59af276a6de.jpeg', title: 'jiaolv' },
              { src: 'https://jdxl-img.b0.upaiyun.com/post/d2946958389f4e12bfa3f9e2df5199cb.jpeg', title: 'jiaolv' },
              { src: 'https://jdxl-img.b0.upaiyun.com/post/788ea972eb314d358382b5d3e6526f89.png', title: 'jiaolv' },
            ]} />

          {/* 功能按钮组 */}
          <View style={[AppCommonStyles.cardContainer, styles.buttonGroupContainer]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Consult')}>
              <View style={styles.boxContainer}>
                <Text style={styles.boxText}>心理咨询</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert('2')}>
              <View style={styles.boxContainer}>
                <Text style={styles.boxText}>心理测试</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Article')}>
              <View style={styles.boxContainer}>
                <Text style={styles.boxText}>心理悦读</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* 专题推送区 */}
          <View style={[AppCommonStyles.cardContainer, styles.pushArticleContainer]}>
            <Text style={styles.homeModuleTitle}>专题推荐</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.moduleScrollContainer}>
              <TouchableOpacity

                onPress={() => alert('1')}>
                <Image style={[styles.scrollItem, styles.firstScrollItem]} source={require('../images/banner.png')} />
              </TouchableOpacity>

              <TouchableOpacity

                onPress={() => alert('1')}>
                <Image style={styles.scrollItem} source={require('../images/banner.png')} />
              </TouchableOpacity>

              <TouchableOpacity

                onPress={() => alert('1')}>
                <Image style={styles.scrollItem} source={require('../images/banner.png')} />
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* 相关文章推荐列表 */}
          <View style={AppCommonStyles.cardContainer}>
            <View style={styles.moduleHeader}>
              <Text style={styles.homeModuleTitle}>热门心理</Text>
            </View>

            <View>
              {
                articleList.length ? articleList.map((item, index) => {
                  return (
                    <ArticleListItem
                      key={index}
                      parentProps={this.props}
                      item={item} />
                  );
                }) : ''
              }
            </View>
          </View>

          {/* 底部文字logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoLeftLine}></View>
            <Text style={styles.logoText}>倾心无痕</Text>
            <View style={styles.logoRightLine}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 0
  },

  // 功能按钮组
  buttonGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
    width: AppSizes.screen.width,
  },
  touchBox: {
    width: AppSizes.container.widthThird,
    height: 180,
    backgroundColor: "#fff",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: AppSizes.container.widthThird,
    height: 90,
  },
  boxText: {
    position: "absolute",
    bottom: 15,
    width: AppSizes.container.widthThird,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent"
  },

  // 专题推送区
  pushArticleContainer: {
    height: 120,
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

  moduleHeader: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.pageBackground
  },

  // logo
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: AppSizes.screen.width,
    height: 80,
    backgroundColor: AppColors.cardWrapperBackground,
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