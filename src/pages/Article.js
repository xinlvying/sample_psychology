/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import { ArticleCategoryNavigator } from '../components/navigators/AppNavigators';

import ArticleListItem from '../components/ArticleListItem';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

export default class Article extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation.state.routeName);
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
    };
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
          <View style={AppCommonStyles.cardContainer}>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
