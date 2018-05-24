/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import showToast from '../utils/toast';

import QuestionListItem from '../components/QuestionListItem';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

// 引入API函数
import Api from '../service/api';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      isDone: false
    };
  }

  componentDidMount() {
    Api.queryQuestions()
      .then(res => {
        const { pagination, data } = res.data;
        pagination.total && this.setState({
          questionList: [...data],
          isDone: true
        });
        !pagination.total && showToast('暂无问题')
      })
  }

  render() {
    const { questionList, isDone } = this.state;
    const { navigation } = this.props;

    if (!isDone) return null;

    return (
      <View style={AppCommonStyles.appContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />

        <View style={AppCommonStyles.pageContainer}>
          <View style={[AppCommonStyles.cardContainer, { elevation: 0 }]}>
            <FlatList
              data={[...questionList]}
              renderItem={
                ({ item }) => <QuestionListItem
                  key={item.id}
                  parentProps={this.props}
                  item={item} />
              }>
            </FlatList>

            <TouchableOpacity
              onPress={() => { navigation.navigate('SubmitQuestion') }}>
              <Text style={styles.addQuestionBtn}>提问</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addQuestionBtn: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    backgroundColor: '#129994',
    borderRadius: 4,
    color: '#fff'
  }
});