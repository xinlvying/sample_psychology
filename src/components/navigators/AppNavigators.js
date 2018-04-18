import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator } from 'react-navigation';

import WelcomePage from '@app/layouts/WelcomePage';
import Layout from '@app/layouts/Layout';
import Page1 from '@app/pages/Page1';
import Page2 from '@app/pages/Page2';
import Page3 from '@app/pages/Page3';

export const AppTabNavigator = TabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Page2',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: (props) => {
      console.log(props);
      return {
        tabBarLabel: 'Page3',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
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
    Layout: {
      screen: Layout,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Page1: {
      screen: Page1,
      navigationOptions: ({ navigation }) => ({
        // header: null,
        title: `${navigation.state.params.name}页面名`
      })
    },
    Page2: {
      screen: Page2
    },
    Page3: {
      screen: Page3,
      navigationOptions: (props) => {
        const { state, setParams } = props.navigation;
        console.log(props)
        return {
          title: state.params.title ? state.params.title : 'This is Page3',
          headerRight: (
            <Button
              title={state.params.mode === 'edit' ? '保存' : '编辑'}
              onPress={() => {
                setParams({
                  mode: state.params.mode === 'edit' ? '' : 'edit'
                })
              }}
            />
          )
        }
      }
    },
    TabNav: {
      screen: AppTabNavigator,
      navigationOptions: {
        title: 'this is AppTabNavigator'
      }
    }
  }
);