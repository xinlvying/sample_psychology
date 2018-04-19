import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator } from 'react-navigation';

import WelcomePage from '@app/layouts/WelcomePage';
import HomePage from '@app/pages/HomePage';
import Article from '@app/pages/Article';
import Consult from '@app/pages/Consult';
import Mine from '@app/pages/Mine';

// 底部tab栏菜单
export const AppTabNavigator = TabNavigator({
  HomePage: {
    screen: HomePage,
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
    screen: Article,
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
      console.log(props);
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
})

export const AppStackNavigator = StackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: () => ({
        header: null
      })
    },
    TabNav: {
      screen: AppTabNavigator
    }
  }
);