import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar
} from 'react-native';

// 公共样式
import { AppColors, AppSizes } from '@app/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  launchImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: AppSizes.screen.width,
    height: AppSizes.screen.height
  }
});

export default class Welcome extends Component {

  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate('TabNav');
    }, 1666);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}  //是否隐藏状态栏。  
        />
        <Image style={styles.launchImage} source={require('@app/images/launch-image.png')}></Image>
      </View>
    );
  }
}