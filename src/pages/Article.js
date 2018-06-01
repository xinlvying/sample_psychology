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
import showToast from '../utils/toast';

import { ArticleCategoryNavigator } from '../components/navigators/AppNavigators';

import ArticleListItem from '../components/ArticleListItem';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

// 引入API函数
import Api from '../service/api';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      articleList: []
    };
  }

  componentWillMount() {
    const code = this.props.navigation.state.key;

    Api.getSingleArticleCategory(code)
      .then(res => {
        if (res.data && res.data.length) {
          this.setState({ categoryId: res.data[0]._id });
          // 获取文章列表
          Api.getArticleList(1, this.state.categoryId)
            .then(res => {
              if (res.data.data && res.data.data.length) {
                this.setState({
                  articleList: [...res.data.data]
                });
              } else showToast('暂无文章分类信息');
            })
            .catch(res => {
              showToast(err)
            })
        } else showToast('暂无文章分类信息');
      })
      .catch(err => {
        showToast(err)
      })
  }

  render() {
    const { navigation } = this.props;
    const { articleList } = this.state;
    if (!articleList.length) return null;
    // console.log(this.props.navigation.state);

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
