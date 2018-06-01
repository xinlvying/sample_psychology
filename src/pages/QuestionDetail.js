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


// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

// 引入API函数
import Api from '../service/api';

export default class QuestionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionDetail: {},
      isDone: false
    };
  }

  componentDidMount() {
    const questionId = this.props.navigation.state.params.questionId;
    if (!questionId) {
      showToast('无效问题ID');
      return false;
    }

    Api.getQuestionDetail(questionId)
      .then(res => {
        const { data } = res;
        // console.log(Object.keys(data).length);
        if (Object.keys(data).length) {
          this.setState({
            questionDetail: { ...data },
            isDone: true
          });
        } else showToast('暂无此问题详情');
      })
      .catch(err => {
        showToast(err);
      })
  }

  render() {
    const { navigation } = this.props;
    const { questionDetail, isDone } = this.state;

    if (!isDone) return null;
    const { answers } = questionDetail;

    return (
      <View style={AppCommonStyles.appContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />

        <ScrollView style={AppCommonStyles.pageContainer}>
          <View style={[AppCommonStyles.cardContainer, styles.questionDetailContainer]}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionTitle}>{questionDetail.title}</Text>
              <Text style={styles.content}>{questionDetail.content}</Text>
              <Text style={styles.info}>{questionDetail.create_time}</Text>
            </View>

            <View style={styles.answerContainer}>
              <Text style={styles.answerHeader}>{`全部回答（${answers.length}）`}</Text>

              {
                answers.length ? answers.map(item => {
                  return <View>
                    <View style={styles.answerInfoBox}>
                      <Text style={styles.info}>匿名天使</Text>
                      <Text style={styles.info}>{item.create_time}</Text>
                    </View>
                    <Text style={styles.content}>{item.content}</Text>
                  </View>
                }) : null
              }

              <View style={styles.noMoreBox}>
                <Text style={styles.noMore}>没有更多了</Text>
              </View>
              <View style={styles.statementBox}>
                <Text style={styles.statement}>所有回答仅代表答主个人观点，不代表本平台观点</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate('SubmitAnswer', { question: questionDetail._id })}>
          <View style={styles.boxContainer}>
            <Image style={styles.btnImg} source={require('../images/edit_icon.png')} />
            <Text style={styles.boxText}>回答</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionDetailContainer: {
    marginTop: 0,
    paddingTop: 20
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333'
  },
  content: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 26,
    textAlign: 'left',
    color: '#666'
  },
  info: {
    marginTop: 20,
    fontSize: 14,
    color: '#969CB2',
  },

  answerHeader: {
    marginTop: 20,
    paddingLeft: 10,
    height: 40,
    lineHeight: 40,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: '#f2f2f2'
  },
  answerInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 6
  },

  noMore: {
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    lineHeight: 40,
    fontSize: 12,
    textAlign: 'center',
    color: '#969cb2',
    backgroundColor: '#f7f8fc'
  },
  statement: {
    marginBottom: 20,
    padding: 6,
    fontSize: 14,
    lineHeight: 26,
    color: '#999',
    backgroundColor: '#f5f5f5'
  },

  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
    height: 40,
    width: 80,
    backgroundColor: '#129994'
  },
  btnImg: {
    width: 30,
    height: 30,
  },
  boxText: {
    marginLeft: 10,
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "transparent",
  },
});