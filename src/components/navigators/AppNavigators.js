import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarTop, TabBarBottom } from 'react-navigation';

import Welcome from '../../layouts/Welcome';
import Home from '../../pages/Home';
import Article from '../../pages/Article';
import Consult from '../../pages/Consult';
import Mine from '../../pages/Mine';

import ArticleDetail from '../../pages/ArticleDetail';

const articleTabs = [
  { title: 'lala', category: 'Recommend' },
  { title: '情绪压力', category: 'Emotion_Pressure' },
  { title: '亲密关系', category: 'Intimacy' },
  { title: '性心理', category: 'SexPsychology' },
  { title: '人际关系', category: 'Relationship' },
  { title: '升学就业', category: 'Job_Graduation' }
]

function setRouteConfigs(tabList) {
  var res = {};
  tabList.map(function (item) {
    Object.defineProperty(res, item.category, {
      enumerable: true,
      configurable: false,
      writable: false,
      value: {
        screen: Article,
        navigationOptions: {
          header: null,
          tabBarLabel: item.title,
        }
      }
    })
  });
  return res;
}

const RouteConfigs = setRouteConfigs(articleTabs);
const TabNavigatorConfig = {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: '#339999',
    inactiveTintColor: '#333',
    indicatorStyle: {
      backgroundColor: '#339999'
    },
    labelStyle: {
      fontSize: 14,
    },
    tabStyle: {
      width: 100,
    },
    style: {
      paddingTop: (Platform.OS === 'ios') ? 16 : null,
      backgroundColor: '#FFF',
    }
  }
}

export const ArticleCategoryNavigator = TabNavigator(RouteConfigs, TabNavigatorConfig)

// 底部tab栏菜单
export const AppTabNavigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        tabBarLabel: '主页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Article: {
      screen: ArticleCategoryNavigator,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        tabBarLabel: '悦读',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-book' : 'ios-book-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Consult: {
      screen: Consult,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        tabBarLabel: '咨询',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Mine: {
      screen: Mine,
      navigationOptions: (props) => {
        return {
          header: null,
          gesturesEnabled: false,
          tabBarLabel: '我的',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name={focused ? 'ios-contact' : 'ios-contact-outline'}
              size={26}
              style={{ color: tintColor }}
            />
          )
        }
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#339999',
      style: {
        backgroundColor: '#FFF',
        borderTopWidth: 2,
        borderTopColor: '#EEE'
      }
    }
  }
);

// app路由跳转
export const AppStackNavigator = StackNavigator({
  // 欢迎页
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  // 底部tab栏首页
  TabNav: {
    screen: AppTabNavigator
  },
  // 文章分类tab栏
  ArticleCategoryNavigator: {
    screen: Article
  },
  // 文章详情页
  ArticleDetail: {
    screen: ArticleDetail,
    navigationOptions: {
      title: '文章详情'
    }
  },
  Consult: {
    screen: Consult
  }
});