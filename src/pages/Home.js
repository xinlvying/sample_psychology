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

// 引入API函数
import Api from '../service/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
      recommendList: [],
      articleList: []
    }
  }

  componentWillMount() {

    // 获取轮播banner
    Api.getSwiperBanner(2)
      .then((res) => {
        console.log(res.data)
        this.setState({
          bannerList: [...res.data]
        });
      })

    // 获取专题推荐banner
    Api.getSwiperBanner(2)
      .then(res => {
        this.setState({
          recommendList: [...res.data]
        });
      })

    // 获取文章列表
    Api.getArticleList(1)
      .then(res => {
        this.setState({
          articleList: [...res.data.data]
        });
      })
  }

  render() {
    const { navigation } = this.props;
    const { articleList, bannerList, recommendList } = this.state;
    console.log(articleList);
    if (!bannerList.length || !recommendList.length || !articleList.length) return null;

    return (
      <View style={AppCommonStyles.appContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={AppCommonStyles.pageContainer}>

          {/* 首页banner轮播 */}
          <BannerSwiper
            containerStyle={[AppCommonStyles.cardContainer, styles.cardContainer]}
            parentProps={this.props}
            bannerList={[...bannerList]} />

          {/* 功能按钮组 */}
          <View style={[AppCommonStyles.cardContainer, styles.buttonGroupContainer]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Consult')}>
              <View style={styles.boxContainer}>
                <View style={styles.btnImgContainer}>
                  <Image style={styles.btnImg} source={require('../images/consult_icon.gif')} />
                </View>
                <Text style={styles.boxText}>心理咨询</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Test')}>
              <View style={styles.boxContainer}>
                <View style={styles.btnImgContainer}>
                  <Image style={styles.btnImg} source={require('../images/test_icon.gif')} />
                </View>
                <Text style={styles.boxText}>心理测试</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Article')}>
              <View style={styles.boxContainer}>
                <View style={styles.btnImgContainer}>
                  <Image style={styles.btnImg} source={require('../images/reading_icon.gif')} />
                </View>
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
              {recommendList.length ? recommendList.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('ArticleDetail', { articleId: item.article_id })}>
                    <Image style={styles.scrollItem} source={{ uri: item.img_url }} />
                  </TouchableOpacity>
                );
              }) : ''}
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
    marginTop: 20,
    marginBottom: 20,
    width: AppSizes.container.widthThird,
  },
  btnImgContainer: {
    width: 40,
    height: 40,
    padding: 5,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "#d9f4f4",
    borderRadius: 20,
  },
  btnImg: {
    width: 30,
    height: 30,
  },
  boxText: {
    width: AppSizes.container.widthThird,
    fontSize: 12,
    textAlign: "center",
    color: "#6d707f",
    backgroundColor: "transparent",
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
    color: "#969cb2"
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