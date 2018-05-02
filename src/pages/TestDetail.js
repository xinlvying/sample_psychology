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
  StatusBar,
  NativeModules,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import showToast from '../utils/toast';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

// 引入API函数
import Api from '../service/api';

export default class TestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0,
      selectValues: {},
      progressingBarWidth: 0,
      isShowBtn: false,
      questionList: [
        {
          title: '我觉得很难让自己安静下来',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          title: '我感到口干舌燥',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          title: '我好像一点都没有感觉到任何愉快、舒畅',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        // {
        //   title: '我感觉呼吸困难（例如：气喘和透不过气来）',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我感到很难主动去开始工作',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我多事情往往做出过敏反应',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我感到颤抖（例如：手抖）',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我觉得自己对不久的将来没有什么可期盼的',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我觉得自己消耗了很多精力',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我担心一些可能让自己恐慌和出丑的场合',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我感到忐忑不安',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
        // {
        //   title: '我感到十分沮丧',
        //   options: [
        //     { des: '从不', value: 0 },
        //     { des: '有时', value: 1 },
        //     { des: '经常', value: 2 },
        //     { des: '总是', value: 3 },
        //   ]
        // },
      ]
    };
  }

  componentDidMount() {
    const { progressingBarWidth, questionList } = this.state;
    this.setState({
      progressingBarWidth: AppSizes.container.width / questionList.length,
    });
  }

  render() {
    const { navigation } = this.props;
    const { questionList, selectIndex, progressingBarWidth, isShowBtn, selectValues } = this.state;
    // console.log(articleDetail);
    // if (!Object.keys(articleDetail).length) return null;

    return (
      <View style={AppCommonStyles.appContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />

        <View style={AppCommonStyles.pageContainer}>
          <View style={[AppCommonStyles.cardContainer, { flex: 0 }]}>
            <View style={styles.actionBar}>
              {selectIndex ? <TouchableOpacity
                onPress={() => { this.goBack() }}
              >
                <Text>{'<- 上一题'}</Text>
              </TouchableOpacity> : null}

              <View style={styles.count}>
                <Text style={{ color: '#39BFB7' }}>{selectIndex + 1}</Text>
                <Text>{`/${questionList.length}`}</Text>
              </View>
            </View>
            <View style={styles.progressBar}><View style={[styles.progressingBar, { width: progressingBarWidth }]}></View></View>
          </View>
          {
            questionList.length ? questionList.map((question, index) => {
              if (index == selectIndex)
                return <View key={index} style={[AppCommonStyles.cardContainer, { marginTop: 20 }]}>
                  <Text>请根据你的实际情况，选择最适合的选项</Text>
                  <Text style={{ marginTop: 20 }}>{question.title}</Text>

                  <RadioGroup
                    style={{ marginTop: 20 }}
                    selectedIndex={selectValues[selectIndex]}
                    onSelect={(i, value) => this.onSelect(i, value)}
                  >
                    {question.options.length ? question.options.map((option, i) => {
                      return <RadioButton
                        key={i}
                        value={option.value} >
                        <Text>{option.des}</Text>
                      </RadioButton>
                    }) : ''}
                  </RadioGroup>
                </View>
            }) : ''
          }
          {isShowBtn ? <TouchableOpacity
          // onPress={() => { this.goBack() }}
          >
            <Text style={{ height: 40, lineHeight: 40, textAlign: 'center', borderRadius: 4, color: '#fff', backgroundColor: '#129994' }}>提交测试</Text>
          </TouchableOpacity> : null}
        </View>
      </View>
    );
  }

  onSelect(index, value) {
    let { selectIndex, progressingBarWidth, questionList, selectValues } = this.state;
    showToast(selectIndex + 1);
    if (selectIndex + 1 == questionList.length) {
      this.setState({
        isShowBtn: true,
      })
    } else {
      selectValues[selectIndex] = value;
      window.setTimeout(() => {
        this.setState({
          selectValues: { ...selectValues },
          selectIndex: selectIndex + 1,
          progressingBarWidth: progressingBarWidth + AppSizes.container.width / questionList.length
        });
        LayoutAnimation.spring();
      }, 0);
    }
  }

  goBack() {
    const { selectIndex, questionList } = this.state;
    let width = selectIndex ? AppSizes.container.width / questionList.length * selectIndex : AppSizes.container.width / questionList.length;

    window.setTimeout(() => {
      this.setState({
        selectIndex: selectIndex - 1,
        progressingBarWidth: width
      });
      LayoutAnimation.spring();
    }, 0);
  }
}

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  count: {
    flexDirection: 'row',
  },
  progressBar: {
    width: AppSizes.container.width,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#d2d2d2'
  },
  progressingBar: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#39BFB7'
  }
});