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
import Spinner from 'react-native-loading-spinner-overlay';

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

  componentDidMount() {

    storage.sync = {
      // sync方法的名字必须和所存数据的key完全相同
      // 方法接受的参数为一整个object，所有参数从object中解构取出
      // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
      bannerList(params) {
        let { id, resolve, reject } = params;
        Api.getSwiperBanner(1)
          .then((res) => {
            storage.save({
              key: 'bannerList',
              data: [...res.data],
              expires: 3
            });
            resolve && resolve(res.data);
          }).catch(err => {
            console.log(err);
            reject && reject(new Error(err));
          })
      },

      recommendList(params) {
        let { id, resolve, reject } = params;
        Api.getSwiperBanner(2)
          .then(res => {
            storage.save({
              key: 'recommendList',
              data: [...res.data],
              expires: 3
            });
            console.log(res);
            resolve && resolve(res.data);
          }).catch(err => {
            console.log(err);
            reject && reject(new Error(err));
          })
      },

      articleList(params) {
        let { id, resolve, reject } = params;
        Api.getArticleList(1)
          .then(res => {
            storage.save({
              key: 'articleList',
              data: [...res.data.data],
              expires: 3
            });
            resolve && resolve(res.data);
          }).catch(err => {
            console.log(err);
            reject && reject(new Error(err));
          })
      }
    }
    // 使用和load方法一样的参数读取批量数据，但是参数是以数组的方式提供。
    // 会在需要时分别调用相应的sync方法，最后统一返回一个有序数组。
    storage.getBatchData([
      {
        key: 'bannerList',
        // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
        autoSync: true,

        // syncInBackground(默认为true)意味着如果数据过期，
        // 在调用sync方法的同时先返回已经过期的数据。
        // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
        syncInBackground: true,
      },
      {
        key: 'recommendList',
        autoSync: true,
        syncInBackground: true,
      },
      {
        key: 'articleList',
        autoSync: true,
        syncInBackground: true,
      }
    ])
      .then(results => {
        let [bannerList, recommendList, articleList] = results;
        console.log(articleList, bannerList, recommendList)

        this.setState({
          bannerList: [...bannerList],
          recommendList: [...recommendList],
          articleList: [...articleList]
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 空布局
   */
  _createEmptyView() {
    return (
      <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>
          暂无列表数据，下啦刷新
        </Text>
      </View>
    );
  }

  /**
  * 创建头部布局
  */
  _createListHeader() {
    return (
      <View style={styles.headView}>
        <Text style={{ color: 'white' }}>
          头部布局
        </Text>
      </View>
    )
  }

  /**
   * 创建头部布局
   */
  _createListFooter() {
    return (
      <View style={styles.footerView}>
        <Text style={{ color: 'white' }}>
          底部底部
        </Text>
      </View>
    )
  }


  render() {
    const { navigation } = this.props;
    const { articleList, bannerList, recommendList } = this.state;
    console.log(articleList, bannerList, recommendList)

    if (!bannerList.length || !recommendList.length || !articleList.length) return (
      <Spinner cancelable={true} visible={true} textContent={"拼命加载中..."} color={"rgba(51, 51, 51, 0.6)"} overlayColor={'transparent'} textStyle={{ color: 'rgba(51, 51, 51, 0.6)', fontSize: 12 }} />
    );

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