import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

// 公共样式
import { AppColors, AppFonts, AppSizes, AppCommonStyles } from '../style';

export default class ArticleListItem extends Component {
  /**
  * 默认 Props
  */
  static defaultProps = {
    parentProps: null,      // 父组件参数，主要取用navigation参数
    item: []                // 文章数据
  };

  constructor(props) {
    super(props);
    this.state = {
      item: { ...props.item }
    }
  }

  render() {
    const { parentProps } = this.props;
    const { item } = this.state;
    console.log("item")

    return (
      <TouchableOpacity
        style={defaultStyles.listItem}
        onPress={() => parentProps.navigation.navigate('ArticleDetail', { articleId: item._id })}>
        <View>
          <View style={defaultStyles.article}>
            <View style={defaultStyles.articleTitleAndDes}>
              <Text numberOfLines={2} style={defaultStyles.articleTitle}>{item.title}</Text>
              <Text numberOfLines={2} style={defaultStyles.articleDes}>{item.description}</Text>
            </View>
            <Image style={defaultStyles.articlePoster} source={{ uri: item.thumb }} />
          </View>
          <View style={defaultStyles.articleInfo}>
            <View style={defaultStyles.authorWrapper}>
              <Image style={defaultStyles.authorImg} source={{ uri: item.authorImg }} />
              <Text style={defaultStyles.articleInfoText}>{item.author}</Text>
            </View>
            <Text style={defaultStyles.articleInfoText}>{item.meta ? item.meta.views : ''}阅读·{item.category.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const defaultStyles = StyleSheet.create({
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.pageBackground,
  },
  article: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  articleTitleAndDes: {
    flex: 1,
    marginRight: 14
  },
  articleTitle: {
    fontSize: AppFonts.h2.fontSize,
    lineHeight: AppFonts.h2.lineHeight,
    color: AppColors.textTitle
  },
  articleDes: {
    marginTop: 10,
    height: 60,
    fontSize: AppFonts.h5.fontSize,
    lineHeight: AppFonts.h3.lineHeight,
    color: AppColors.textDefault
  },
  articlePoster: {
    flex: 0,
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  articleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    height: 20
  },
  authorWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImg: {
    flex: 0,
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 10
  },
  articleInfoText: {
    fontSize: 12,
    color: AppColors.textDefault
  },
});