import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

// 公共样式
import { AppColors, AppFonts, AppSizes, AppCommonStyles } from '../style';

export default class ArticleList extends Component {
  /**
  * 默认 Props
  */
  static defaultProps = {
    parentProps: null,      // 父组件参数，主要取用navigation参数
    // containerStyle: null,   // swiper父容器样式
    // paginationStyle: null,  // swiper分页样式
    // bannerImgStyle: null,   // 轮播图片样式
    // showsButtons: false,    // 是否显示轮播切换按钮
    // autoplay: true,         // 是否自动播放
    // bannerList: []          // 轮播数据源数组
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   bannerList: [...props.bannerList]
    // };
  }
  render() {
    const { parentProps } = this.props;
    // const { bannerList } = this.state;
    console.log(this)

    return (
      <View style={[AppCommonStyles.cardContainer, defaultStyles.articleListContainer]}>
        {/* <View style={defaultStyles.listHeader}>
          <Text style={defaultStyles.listHeaderTitle}>热门心理</Text>
        </View>

        <View>

        </View> */}
      </View>
    );
  }
}


const defaultStyles = StyleSheet.create({
  // 文章列表
  articleListContainer: {
    marginTop: 20
  },
  listHeaderTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: AppFonts.h5.fontSize,
    lineHeight: AppFonts.h5.lineHeight,
    color: AppColors.textTitle
  }
});