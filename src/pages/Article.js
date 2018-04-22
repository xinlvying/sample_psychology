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
  Button,
  ScrollView
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
    };
  }

  render() {
    const { navigation } = this.props;
    const { articleList } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={AppCommonStyles.pageWrapper}>
        <View style={AppCommonStyles.cardWrapper}>
          <View style={AppCommonStyles.cardContainer}>
            {/* <View>
              <Text style={styles.homeModuleTitle}>热门心理</Text>
            </View> */}
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
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
