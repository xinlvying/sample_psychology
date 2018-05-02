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
  Modal,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
  TouchableHighlight
} from 'react-native';

import showToast from '../utils/toast';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenu from '../components/dropdownmenu/DropDownMenu';

import ConsultantListItem from '../components/ConsultantListItem';

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
    const data = [["第一周", "第二周"], ["全部", "星期一", "星期二", "星期三", "星期四", "星期五"], ["不限", "男", "女"]];

    return (
      <View style={AppCommonStyles.appContainer}>
        <View style={AppCommonStyles.pageContainer}>
          <StatusBar
            animated={true}
            hidden={false}
            backgroundColor={'#FFF'}
            barStyle={'dark-content'}
          />

          <View style={[AppCommonStyles.cardContainer, styles.headerContainer]}>
            <View style={styles.header}>
              <TouchableHighlight
                underlayColor="#eee"
                style={styles.headerItem}
                onPress={() => navigation.navigate('Test')}>
                <View>
                  <View style={styles.title}>
                    <Icon
                      color='#99CCFF'
                      name='ios-contact'
                      size={18} />
                    <Text style={styles.text}>自助测试</Text>
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
                    <Text style={styles.text}>心灵树洞</Text>
                  </View>
                  <Text style={styles.homeModuleTitle}>匿名问答</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <DropdownMenu
              style={{ flex: 1 }}
              bgColor={'white'}
              tintColor={'#666666'}
              activityTintColor={'#39BFB7'}
              handler={(selection, row) => {
                console.log(selection, row)
                showToast(data[selection][row])
              }
              }
              data={data}
            >
              <FlatList
                style={[AppCommonStyles.cardContainer, { marginTop: 0, elevation: 0, }]}
                data={[...consultantList]}
                renderItem={
                  ({ item }) => <ConsultantListItem
                    parentProps={this.props}
                    item={item} />
                }>
              </FlatList>
            </DropdownMenu>
          </View>
        </View>
      </View >
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

  selectBarContainer: {
    // flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: 40,
    // backgroundColor: '#333'
  },
  selectBtns: {
    flex: 1,
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#333'
  },

  box: {
    // position: 'absolute',
    // width: 200,
    // height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});