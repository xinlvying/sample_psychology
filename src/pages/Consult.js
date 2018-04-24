import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  Picker,
  PickerIOS,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenu from 'react-native-dropdown-menu';
import ArticleListItem from '../components/ArticleListItem';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

export default class Consult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultantList: [
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: '',
          author: '登山涉水',
          authorImg: '',
          viewCount: 34567
        },
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: '',
          author: '登山涉水',
          authorImg: '',
          viewCount: 34567
        },
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: '',
          author: '登山涉水',
          authorImg: '',
          viewCount: 34567
        },
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: '',
          author: '登山涉水',
          authorImg: '',
          viewCount: 34567
        },
        {
          id: '1',
          category: '文章',
          title: '这是一篇文章！',
          describe: '这是一篇文章！这是一篇文章！这是一篇文章！',
          poster: '',
          author: '登山涉水',
          authorImg: '',
          viewCount: 34567
        },
      ]
    }
  }

  render() {
    const { navigation } = this.props;
    const { consultantList } = this.state;
    const data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];

    return (
      <View style={AppCommonStyles.appContainer}>
        <View style={AppCommonStyles.pageContainer}>
          <StatusBar
            animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
            hidden={false}  //是否隐藏状态栏。  
            backgroundColor={'#FFF'} //状态栏的背景色  
            barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')   
          />

          <View style={[AppCommonStyles.cardContainer, styles.headerContainer]}>
            <View style={styles.header}>
              <TouchableHighlight
                underlayColor="#eee"
                style={styles.headerItem}
                onPress={() => navigation.navigate('ArticleDetail')}>
                <View>
                  <View style={styles.title}>
                    <Icon
                      color='#99CCFF'
                      name='ios-contact'
                      size={18} />
                    <Text style={styles.text}>自助评估</Text>
                  </View>
                  <Text style={styles.homeModuleTitle}>抑郁|焦虑|压力</Text>
                </View>
              </TouchableHighlight>

              <View style={styles.line}></View>

              <TouchableHighlight
                underlayColor="#eee"
                style={styles.headerItem}
                onPress={() => navigation.navigate('ArticleDetail')}>
                <View>
                  <View style={styles.title}>
                    <Icon
                      color='#FFCC99'
                      name='ios-document'
                      size={18} />
                    <Text style={styles.text}>心理测试</Text>
                  </View>
                  <Text style={styles.homeModuleTitle}>更多趣味测试</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <DropdownMenu style={{ flex: 1 }}
            // checkImage={require('./img/check.png')}    //set the icon of the selected item, default is a check mark
            bgColor={'#FFF'}                            //the background color of the head, default is grey
            tintColor={'#555'}                        //the text color of the head, default is white
            selectItemColor={'#339999'}                    //the text color of the selected item, default is red
            data={data}
            maxHeight={410}                            // the max height of the menu
            handler={(selection, row) => alert(data[selection][row])}>
            {/* 相关文章推荐列表 */}
            <FlatList
              style={[AppCommonStyles.cardContainer, { marginTop: 0, elevation: 0, }]}
              data={[...consultantList]}
              renderItem={
                ({ item }) => <ArticleListItem
                  parentProps={this.props}
                  item={item} />
              }>
            </FlatList>
          </DropdownMenu>


          {/* 底部文字logo */}
          {/* <View style={styles.logoContainer}>
          <View style={styles.logoLeftLine}></View>
          <Text style={styles.logoText}>倾心无痕</Text>
          <View style={styles.logoRightLine}></View>
        </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  headerContainer: {
    flex: 0,
    marginTop: 0,
    marginBottom: 8,
    paddingTop: 20,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.pageBackground
  },
  // 咨询页header

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: 2,
    height: 50,
    backgroundColor: AppColors.pageBackground
  },
  headerItem: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  text: {
    marginLeft: 8,
    fontSize: AppFonts.h5.fontSize,
    color: AppColors.textTitle
  },
  homeModuleTitle: {
    fontSize: 12,
    lineHeight: AppFonts.h5.lineHeight,
    textAlign: 'center',
    color: AppColors.textDefault
  },
});