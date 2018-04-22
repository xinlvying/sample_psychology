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

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

export default class Consult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultantList: [
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: '',
          author: '登山涉水',
          authorImg: '',
          viewCount: 34567
        },
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: '',
          author: '登山涉水',
          authorImg: '',
          viewCount: 34567
        },
      ]
    }
  }

  render() {
    const { navigation } = this.props;
    const { consultantList } = this.state;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={AppCommonStyles.pageWrapper}>

        <View style={[AppCommonStyles.cardWrapper, styles.pushArticleContainer]}>
          <View style={AppCommonStyles.cardContainer}>
            <Text style={styles.homeModuleTitle}>专题推荐</Text>
          </View>
        </View>

        {/* 相关文章推荐列表 */}
        {/* <View style={AppCommonStyles.cardWrapper}>
          <View style={AppCommonStyles.cardContainer}>
            <View>
              <Text style={styles.homeModuleTitle}>热门心理</Text>
            </View>

            <View>
              {
                consultantList.length ? consultantList.map((item, index) => {
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
        </View> */}

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

const styles = StyleSheet.create({

  // 专题推送区
  pushArticleContainer: {
    marginTop: 20,
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