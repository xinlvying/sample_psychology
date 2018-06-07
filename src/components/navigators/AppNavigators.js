import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarTop, TabBarBottom } from 'react-navigation';

import Welcome from '../../layouts/Welcome';
import Home from '../../pages/Home';
import Article from '../../pages/Article';
import Consult from '../../pages/Consult';
import Test from '../../pages/Test';
import Question from '../../pages/Question';

import ArticleDetail from '../../pages/ArticleDetail';
import Reservation from '../../pages/Reservation';
import QuestionDetail from '../../pages/QuestionDetail';
import SubmitQuestion from '../../pages/SubmitQuestion';
import SubmitAnswer from '../../pages/SubmitAnswer';

const articleTabs = [
  { id: 1, title: '我的收藏', name: 'Collection' },
  { id: 2, title: '情绪压力', name: 'Emotion_Pressure' },
  { id: 3, title: '亲密关系', name: 'Love' },
  { id: 4, title: '性心理', name: 'Sex' },
  { id: 5, title: '家庭关系', name: 'Family_Relationship' },
  { id: 6, title: '行为问题', name: 'Behavior_Problem' },
  { id: 7, title: '人际关系', name: 'Relationship' },
  { id: 8, title: '咨询小科普', name: 'Consult_Tips_Popularization' },
  { id: 9, title: '个人成长', name: 'Personal_Development' }
]

function setRouteConfigs(tabList) {
  var res = {};
  tabList.map(function (item) {
    res[item.name] = {
      screen: Article,
      navigationOptions: {
        header: null,
        tabBarLabel: item.title,
      }
    }
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

// 文章分类导航菜单
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
    }
  },
  {
    tabBarComponent: TabBarBottom,
    animationEnabled: true,
    // backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转 
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#39BFB7',
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

  // 文章详情页
  ArticleDetail: {
    screen: ArticleDetail,
    navigationOptions: {
      title: '文章详情'
    }
  },
  Test: {
    screen: Test,
    navigationOptions: {
      title: '测试详情'
    }
  },
  Reservation: {
    screen: Reservation,
    navigationOptions: {
      header: null
    }
  },
  Question: {
    screen: Question,
    navigationOptions: {
      title: '匿名问答'
    }
  },
  QuestionDetail: {
    screen: QuestionDetail,
    navigationOptions: {
      title: '问题详情'
    }
  },
  SubmitQuestion: {
    screen: SubmitQuestion,
    navigationOptions: {
      title: '说出你的心声'
    }
  },
  SubmitAnswer: {
    screen: SubmitAnswer,
    navigationOptions: {
      title: '发表你的看法'
    }
  }
});