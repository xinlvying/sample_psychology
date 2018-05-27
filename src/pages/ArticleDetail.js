import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  Button,
  WebView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import showToast from '../utils/toast';

import FitImage from "react-native-fit-image";
import Markdown, { getUniqueID } from 'react-native-markdown-renderer';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

// 引入API函数
import Api from '../service/api';

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleDetail: {},
      mark: 0
    };
  }

  componentWillMount() {
    const articleId = this.props.navigation.state.params.articleId;

    if (!articleId) {
      showToast('无效文章ID');
      return false;
    }

    Api.getArticleDetail(articleId)
      .then(res => {
        if (Object.keys(res.data).length) {
          this.setState({ articleDetail: res.data });
        } else showToast('暂无此文章详情');
      })
      .catch(err => {
        showToast(err);
      })
  }


  componentWillUnmount() {
    const { mark } = this.state;
    console.log(mark);
  }

  render() {
    const { navigation } = this.props;
    const { articleDetail } = this.state;
    // console.log(articleDetail);
    if (!Object.keys(articleDetail).length) return null;

    return (
      <View style={AppCommonStyles.appContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />

        <ScrollView style={AppCommonStyles.pageContainer}>
          <View style={[AppCommonStyles.cardContainer, styles.articleContainer]}>
            {/* 文章头，包含标题，作者 */}
            <View>
              <Text style={styles.articleTitle}>{articleDetail.title}</Text>
              <View style={styles.author}>
                <Image style={styles.authorImg} source={{ uri: 'http://192.168.2.1:8000/img/upload_9fc093fcfe541096cd218da3c3d93e17.png' }} />
                <Text style={styles.authorName}>{articleDetail.author}</Text>
              </View>
            </View>

            {/* 文章主体 */}
            <View style={styles.articleBody}>
              <Markdown
                rules={markdownRules}
                style={markdownStyles}>
                {articleDetail.content}
              </Markdown>
            </View>

            {/* 功能按钮组 */}
            <View style={[AppCommonStyles.cardContainer, styles.buttonGroupContainer]}>
              <TouchableOpacity
                onPress={this.handleCollect}>
                <View style={styles.boxContainer}>
                  <View style={styles.btnImgContainer}>
                    <Image style={styles.btnImg} source={require('../images/collection_icon.png')} />
                  </View>
                  <Text style={styles.boxText}>收藏</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.handleAppreciate}>
                <View style={styles.boxContainer}>
                  <View style={styles.btnImgContainer}>
                    <Image style={styles.btnImg} source={require('../images/appreciate_icon.png')} />
                  </View>
                  <Text style={styles.boxText}>点赞</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.notIntrested}>
                <View style={styles.boxContainer}>
                  <View style={styles.btnImgContainer}>
                    <Image style={styles.btnImg} source={require('../images/not_intrested_icon.png')} />
                  </View>
                  <Text style={styles.boxText}>不感兴趣</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }

  // 收藏文章
  handleCollect = () => {
    let { mark } = this.state;
    mark += 6;
    this.setState({ mark: mark });
    showToast('收藏成功！');
  }

  // 点赞文章
  handleAppreciate = () => {
    let { mark } = this.state;
    mark += 4;
    this.setState({ mark: mark });
  }

  // 不感兴趣
  notIntrested = () => {
    let { mark } = this.state;
    mark -= 4;
    this.setState({ mark: mark });
  }

}

const styles = StyleSheet.create({
  articleContainer: {
    marginTop: 0,
    paddingTop: 20
  },
  articleTitle: {
    fontSize: AppFonts.h2.fontSize,
    lineHeight: AppFonts.h2.lineHeight,
    color: AppColors.textTitle
  },
  author: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImg: {
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 15
  },
  authorName: {
    fontSize: 12,
    color: AppColors.textSecondary
  },
  articleBody: {
    marginTop: 30,
    // color: '#333'
  },


  // 功能按钮组
  buttonGroupContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    // width: AppSizes.screen.width,
  },
  touchBox: {
    width: AppSizes.container.widthThird,
    height: 180,
    backgroundColor: "#fff",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    width: AppSizes.container.widthThird,
  },
  btnImgContainer: {
    width: 40,
    height: 40,
    padding: 5,
    marginBottom: 6,
    // borderWidth: 1,
    // borderColor: "#d9f4f4",
    borderRadius: 20,
  },
  btnImg: {
    width: 30,
    height: 30,
  },
  boxText: {
    width: AppSizes.container.widthThird,
    fontSize: 12,
    textAlign: "center",
    color: "#6d707f",
    backgroundColor: "transparent",
  },
});

const markdownRules = {
  text: (node, children, parent, styles) =>
    <Text key={getUniqueID()} style={markdownStyles.text}>
      {node.content}
    </Text>,
  image: (node, children, parent, styles) => {
    // const index = node.attributes.src.indexOf(':');
    const imageSrc = `http:${node.attributes.src}`;
    console.log(imageSrc)
    return (
      <FitImage
        resizeMode="contain"
        indicator={true}
        key={node.key}
        style={markdownStyles.image}
        source={{ uri: imageSrc }}
      />
    );
  },
}

// markdown styles
const markdownStyles = {
  // 链接
  link: {
    fontWeight: 'bold',
    color: AppColors.textTitle,
    textDecorationLine: 'underline'
  },
  mailTo: {
    fontWeight: 'bold',
    color: AppColors.textTitle,
    textDecorationLine: 'underline'
  },
  del: {
    textDecorationLine: 'line-through'
  },
  // 段落
  text: {
    color: AppColors.textTitle,
    fontSize: AppFonts.base.size,
    fontFamily: AppFonts.base.family,
    lineHeight: Platform.OS == 'ios' ? AppFonts.h3.lineHeight : AppFonts.h2.lineHeight
  },
  // 粗体
  strong: {
    fontWeight: '900',
    marginTop: 0,
    marginBottom: 10
  },
  // 引用
  blockQuoteSection: {
    padding: 10,
    paddingTop: 5,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: AppColors.textPrimary
  },
  blockQuoteSectionBar: {
    height: null,
    backgroundColor: AppColors.textMuted
  },
  // 行内代码块
  inlineCode: {
    margin: 3,
    padding: 3,
    fontFamily: 'Courier',
    fontWeight: '200',
    color: AppColors.brand.black
  },
  // 图片
  image: {
    flex: 1,
    width: AppSizes.container.width,
    height: 166,
    marginBottom: 0
  },
  heading1: {
    ...AppFonts.h1,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  },
  heading2: {
    ...AppFonts.h2,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  },
  heading3: {
    ...AppFonts.h3,
    color: AppColors.textTitle,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10
  },
  heading4: {
    ...AppFonts.h4,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  },
  heading5: {
    ...AppFonts.h5,
    color: AppColors.textTitle,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 10
  }
}