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
  FlatList,
  ScrollView,
  StatusBar
} from 'react-native';
import showToast from '../utils/toast';
import Spinner from 'react-native-loading-spinner-overlay';

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
      articleList: [],
      isRefresh: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.initData()
      .then(() => {
        this.setState({ isLoading: false });
      })
  }

  fetchCategoryCode() {
    return new Promise((resolve, reject) => {
      const code = this.props.navigation.state.key;

      if (code == 'Collection') {
        resolve();
      } else {
        Api.getSingleArticleCategory(code)
          .then(res => {
            console.log(res)
            if (res.data && res.data.length) {
              resolve(res.data[0]._id);
            } else reject('暂无文章分类信息');
          })
          .catch(err => {
            reject(err);
          })
      }
    })
  }

  fetchArticleByCode(categoryId) {
    return new Promise((resolve, reject) => {
      const code = this.props.navigation.state.key;

      if (code == 'Collection') {
        storage.load({
          key: 'loginInfo',
        }).then(ret => {
          Api.getUserCollection(ret.userId)
            .then(res => {
              console.log(res);
              this.setState({ articleList: res.data.articles });
              resolve(res.data.articles);
            })
        }).catch(err => {
          reject(err);
        })
      } else {
        Api.getArticleList(1, categoryId)
          .then(res => {
            console.log(res)
            this.setState({ articleList: res.data.data });

            resolve(res.data.data);
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  }

  async initData() {
    try {
      const categoryId = await this.fetchCategoryCode();
      const articles = await this.fetchArticleByCode(categoryId);
      return articles;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * 下啦刷新
    * @private
    */
  _onRefresh = () => {
    // 不处于 下拉刷新
    if (!this.state.isRefresh) {
      this.initData()
        .then(() => {
          this.setState({ isLoading: false });
        })
    }
  };

  _createListItem = (item) => {
    return (
      <ArticleListItem
        parentProps={this.props}
        item={item} />
    );
  }

  /**
   * 空布局
   */
  _createEmptyView() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>
          暂无文章列表，下拉刷新
        </Text>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { articleList, isLoading } = this.state;
    if (isLoading) return (
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

        <View style={AppCommonStyles.pageContainer}>
          <View style={AppCommonStyles.cardContainer}>
            <FlatList
              // style={AppCommonStyles.cardContainer}
              data={[...articleList]}
              renderItem={({ item }) => this._createListItem(item)}
              refreshing={this.state.isRefresh}
              ListEmptyComponent={this._createEmptyView}
              onRefresh={() => this._onRefresh()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
