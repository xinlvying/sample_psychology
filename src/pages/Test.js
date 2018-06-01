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

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0,
      selectValues: [],
      progressingBarWidth: 0,
      resultsBarWidth: 0,
      isShowBtn: false,
      isShowResult: false,
      testResults: { D: {}, A: {}, P: {} },
      questionList: [
        {
          id: 1,
          title: '我觉得很难让自己安静下来',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 2,
          title: '我感到口干舌燥',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 3,
          title: '我好像一点都没有感觉到任何愉快、舒畅',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 4,
          title: '我感觉呼吸困难（例如：气喘和透不过气来）',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 5,
          title: '我感到很难主动去开始工作',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 6,
          title: '我对事情往往做出过敏反应',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 7,
          title: '我感到颤抖（例如：手抖）',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 8,
          title: '我觉得自己消耗了很多精力',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 9,
          title: ' 我担心一些可能让自己恐慌或出丑的场合',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 10,
          title: '我觉得自己对不久的将来没有什么可期盼的',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 11,
          title: '我感到忐忑不安',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 12,
          title: '我感到很难放松自己',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 13,
          title: '我感到忧郁沮丧',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 14,
          title: '我无法容忍任何阻碍我继续工作的事情',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 15,
          title: '我感到快要崩溃了',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 16,
          title: '我对任何事情都不能产生热情',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 17,
          title: '我觉得自己不怎么配做人',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 18,
          title: '我发觉自己很容易被触怒',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 19,
          title: '即使在没有明显的体力活动时，我也感到心律不正常',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 20,
          title: '我无缘无故地感到害怕',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
        {
          id: 21,
          title: '我感到生命毫无意义',
          options: [
            { des: '从不', value: 0 },
            { des: '有时', value: 1 },
            { des: '经常', value: 2 },
            { des: '总是', value: 3 },
          ]
        },
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
    const { questionList, selectIndex, progressingBarWidth, isShowBtn, selectValues, testResults, isShowResult } = this.state;
    const { D, P, A } = testResults;
    // // console.log(articleDetail);
    // if (!Object.keys(articleDetail).length) return null;

    return (
      <View style={AppCommonStyles.appContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />
        {!isShowResult ?
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
                  return <View key={index} style={[AppCommonStyles.cardContainer, { marginTop: 0 }]}>
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
              onPress={() => { this.submitResult() }}
            >
              <Text style={{ height: 40, lineHeight: 40, textAlign: 'center', borderRadius: 4, color: '#fff', backgroundColor: '#129994' }}>提交测试</Text>
            </TouchableOpacity> : null}
          </View> : null
        }
        {isShowResult ?
          <ScrollView style={AppCommonStyles.cardContainer}>
            <Text style={{ marginTop: 20 }}>本次测试结果：</Text>
            <Text style={{ marginTop: 20 }}>特殊说明：</Text>
            <Text style={{ marginTop: 10, fontSize: 12, lineHeight: AppFonts.h5.lineHeight }}>1、抑郁／焦虑／压力三个维度的区间值划分不同，所以可能会出现分数相近／相同，但程度不同的情况哦！</Text>
            <Text style={{ marginTop: 10, fontSize: 12, lineHeight: AppFonts.h5.lineHeight }}>1、本测试为自助测试，其结果仅供用户自评参考，不代表正式诊断！</Text>

            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text>抑郁水平： {D.label}</Text>
                <Text style={{ marginLeft: 6, color: D.color }}>{D.value}</Text>
                <Text>/42</Text>
              </View>
              <View style={styles.progressBar}><View style={[styles.progressingBar, { width: AppSizes.container.width / 42 * D.value, backgroundColor: D.color }]}></View></View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text>焦虑水平： {A.label}</Text>
                <Text style={{ marginLeft: 6, color: A.color }}>{A.value}</Text>
                <Text>/42</Text>
              </View>
              <View style={styles.progressBar}><View style={[styles.progressingBar, { width: AppSizes.container.width / 42 * A.value, backgroundColor: A.color }]}></View></View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text>压力水平： {P.label}</Text>
                <Text style={{ marginLeft: 6, color: P.color }}>{P.value}</Text>
                <Text>/42</Text>
              </View>
              <View style={[styles.progressBar, { marginTop: 6 }]}><View style={[styles.progressingBar, { width: AppSizes.container.width / 42 * P.value, backgroundColor: P.color }]}></View></View>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text>如何改善</Text>

              <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#333' }}>正念练习</Text>
                <Text style={{ marginTop: 10, fontSize: 12, lineHeight: AppFonts.h5.lineHeight }}>正念是指用完整的思维和心灵，用身体和感官的全部资源去感觉，去更深入的观察。通过正念练习，可以使紧张的情绪得到缓解，从而获得身心的平静。想象你正坐在河边，看着水上的落叶缓缓地随波流转，现在开始关注头脑中出现的每一个念头，把它们写在一片片落叶上，然后看着这些落叶随波漂流。如果感觉到有什么想法阻止你想象河水的流动，留意一下是什么，把它写在落叶上，然后继续……</Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#333' }}>呼吸练习</Text>
                <Text style={{ marginTop: 10, fontSize: 12, lineHeight: AppFonts.h5.lineHeight }}>当感到抑郁、焦虑或者压力山大的时候，一个让自己冷静的简单方法就是把注意力放在呼吸上。通常情绪起伏较大的时候，我们吸气比呼气快。所以为了使我们冷静，需要颠倒这种情况，也就是呼气时间比吸气时间长，做到用力吸气，轻轻呼气。</Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#333' }}>学会冥想</Text>
                <Text style={{ marginTop: 10, fontSize: 12, lineHeight: AppFonts.h5.lineHeight }}>人在受到情绪困扰的时候，很容易在消极的想法里面沉迷深陷。很多研究证实，在这样的情形下，做冥想会很有帮助。当大脑无法停止转动的时候，把注意力放在身体上，比如摸一下身边的物体，动动脚趾头，去走一走，或者去做件小事情。目的是，关注你身体的感觉，而借此将注意力放在当下。</Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#333' }}>寻求专业的心理帮助</Text>
                <Text style={{ marginTop: 10, fontSize: 12, lineHeight: AppFonts.h5.lineHeight }}>关注心理健康是一个长期的过程，如果你尝试了很多办法仍无法改善或减轻你的心理困扰，我们建议你及时寻求专业的心理帮助。你可以在专业心理服务的帮助下，获得心理健康专业评估及情感支持、找到影响你心理健康的原因和改善、解决心理困扰的方法。</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Consult')}>
                  <Text style={{ marginTop: 10, height: 40, lineHeight: 40, textAlign: 'center', color: '#fff', backgroundColor: '#129994', borderRadius: 4 }}>点我预约 》</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('TabNav')}>
                  <Text style={{ marginTop: 10, marginBottom: 40, height: 40, lineHeight: 40, textAlign: 'center', borderWidth: 1, borderColor: '#d2d2d2', borderRadius: 4, color: '#999' }}>返回主页</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView> : null
        }

      </View >
    );
  }

  // 题目切换
  onSelect(index, value) {
    let { selectIndex, progressingBarWidth, questionList, selectValues } = this.state;
    // 回答最后一题时显示提交测试按钮
    if (selectIndex + 1 == questionList.length) {
      selectValues[selectIndex] = value;
      this.setState({
        isShowBtn: true
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
        isShowBtn: false,
        selectIndex: selectIndex - 1,
        progressingBarWidth: width
      });
      LayoutAnimation.spring();
    }, 0);
  }

  submitResult() {
    const { selectValues } = this.state;
    let D = 0, P = 0, A = 0, tempObj = { D: {}, P: {}, A: {} };

    for (let i in selectValues) {
      switch (parseInt(i)) {
        case 2:
        case 4:
        case 9:
        case 12:
        case 15:
        case 16:
        case 20:
          D = (D + selectValues[i]);
          break;

        case 1:
        case 3:
        case 6:
        case 8:
        case 14:
        case 18:
        case 19:
          A = (A + selectValues[i]);
          break;

        case 0:
        case 5:
        case 7:
        case 10:
        case 11:
        case 13:
        case 17:
          P = (P + selectValues[i]);
          break;
      }
    }
    D = D * 2;
    A = A * 2;
    P = P * 2;

    tempObj.D['value'] = D;
    tempObj.A['value'] = A;
    tempObj.P['value'] = P;
    // console.log(D, P, A);
    if (D <= 9) {
      tempObj.D['label'] = '正常';
      tempObj.D['color'] = '#39BFB7';
    }
    if (D >= 10 && D <= 13) {
      tempObj.D['label'] = '轻微抑郁';
      tempObj.D['color'] = '#b0f200';
    }
    if (D >= 14 && D <= 20) {
      tempObj.D['label'] = '中度抑郁';
      tempObj.D['color'] = '#f2d700';
    }
    if (D >= 21 && D <= 27) {
      tempObj.D['label'] = '重度抑郁';
      tempObj.D['color'] = '#f2a200';
    }
    if (D >= 28) {
      tempObj.D['label'] = '极端抑郁';
      tempObj.D['color'] = '#f25400';
    }

    if (A <= 7) {
      tempObj.A['label'] = '正常';
      tempObj.A['color'] = '#39BFB7';
    }
    if (A >= 8 && A <= 9) {
      tempObj.A['label'] = '轻微焦虑';
      tempObj.A['color'] = '#b0f200';
    }
    if (A >= 10 && A <= 14) {
      tempObj.A['label'] = '中度焦虑';
      tempObj.A['color'] = '#f2d700';
    }
    if (A >= 15 && A <= 19) {
      tempObj.A['label'] = '重度焦虑';
      tempObj.A['color'] = '#f2a200';
    }
    if (A >= 20) {
      tempObj.A['label'] = '极端焦虑';
      tempObj.A['color'] = '#f25400';
    }

    if (P <= 14) {
      tempObj.P['label'] = '正常';
      tempObj.P['color'] = '#39BFB7';
    }
    if (P >= 15 && P <= 18) {
      tempObj.P['label'] = '轻微压力';
      tempObj.P['color'] = '#b0f200';
    }
    if (P >= 19 && P <= 25) {
      tempObj.P['label'] = '中度压力';
      tempObj.P['color'] = '#f2d700';
    }
    if (P >= 26 && P <= 33) {
      tempObj.P['label'] = '重度压力';
      tempObj.P['color'] = '#f2a200';
    }
    if (P >= 37) {
      tempObj.P['label'] = '极端压力';
      tempObj.P['color'] = '#f25400';
    }
    // console.log(tempObj)

    this.setState({
      isShowResult: true,
      testResults: { ...tempObj }
    })
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
    height: 8,
    borderRadius: 8,
    backgroundColor: '#d2d2d2'
  },
  progressingBar: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#39BFB7'
  }
});