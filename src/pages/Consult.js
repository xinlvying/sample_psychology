import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

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

          <View style={[AppCommonStyles.cardContainer, styles.cardContainer]}>
            <View style={styles.headerContainer}>
              <TouchableHighlight
                underlayColor="#eee"
                style={styles.headerItem}
                onPress={() => navigation.navigate('ArticleDetail')}>
                <View>
                  <View style={styles.title}>
                    <Icon
                      color='#99CCFF'
                      name='ios-contact'
                      size={18} />
                    <Text style={styles.text}>自助评估</Text>
                  </View>
                  <Text style={styles.homeModuleTitle}>抑郁|焦虑|压力</Text>
                </View>
              </TouchableHighlight>

              <View style={styles.line}></View>

              <TouchableHighlight
                underlayColor="#eee"
                style={styles.headerItem}
                onPress={() => navigation.navigate('ArticleDetail')}>
                <View>
                  <View style={styles.title}>
                    <Icon
                      color='#FFCC99'
                      name='ios-document'
                      size={18} />
                    <Text style={styles.text}>心理测试</Text>
                  </View>
                  <Text style={styles.homeModuleTitle}>更多趣味测试</Text>
                </View>
              </TouchableHighlight>
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
          {/* <View style={styles.logoContainer}>
          <View style={styles.logoLeftLine}></View>
          <Text style={styles.logoText}>倾心无痕</Text>
          <View style={styles.logoRightLine}></View>
        </View> */}
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cardContainer: {
    marginTop: 0,
    paddingTop: 20,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.pageBackground
  },
  // 咨询页header

  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: 2,
    height: 50,
    backgroundColor: AppColors.pageBackground
  },
  headerItem: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  text: {
    marginLeft: 8,
    fontSize: AppFonts.h5.fontSize,
    color: AppColors.textTitle
  },
  homeModuleTitle: {
    fontSize: 12,
    lineHeight: AppFonts.h5.lineHeight,
    textAlign: 'center',
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