import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
// 轮播组件
import Swiper from 'react-native-swiper';

// 公共样式
import { AppColors, AppSizes } from '../style';

export default class BannerSwiper extends Component {
  /**
  * 默认 Props
  */
  static defaultProps = {
    parentProps: null,      // 父组件参数，主要取用navigation参数
    containerStyle: null,   // swiper父容器样式
    paginationStyle: null,  // swiper分页样式
    bannerImgStyle: null,   // 轮播图片样式
    showsButtons: false,    // 是否显示轮播切换按钮
    autoplay: true,         // 是否自动播放
    bannerList: []          // 轮播数据源数组
  };

  constructor(props) {
    super(props);
    this.state = {
      bannerList: [...props.bannerList]
    };
  }
  render() {
    const { parentProps } = this.props;
    const { bannerList } = this.state;

    return (
      < View style={[defaultStyles.swiperContainer, this.props.containerStyle]} >
        {/* 首页banner轮播 */}
        <Swiper
          paginationStyle={[defaultStyles.paginationStyle, this.props.paginationStyle]}
          showsButtons={this.props.showsButtons}
          autoplay={this.props.autoplay}
        >
          {bannerList.length ? bannerList.map((item, index) => {
            return (
              <TouchableHighlight
                key={index}
                underlayColor="transparent"
                onPress={() => parentProps.navigation.navigate('ArticleDetail', { articleId: item.article_id })}>
                < Image style={[defaultStyles.bannerImg, this.props.bannerImgStyle]} source={{ uri: item.img_url }} />
              </TouchableHighlight>);
          }) : ''}
        </Swiper>
      </View >
    );
  }
}


const defaultStyles = StyleSheet.create({
  // 轮播父容器
  swiperContainer: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 150,
  },
  paginationStyle: {
    bottom: 8
  },
  bannerImg: {
    width: AppSizes.container.width,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 6,
  },
});