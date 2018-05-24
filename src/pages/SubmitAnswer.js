import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// 公共样式
import { AppColors, AppFonts, AppSizes, AppCommonStyles } from '../style';

import Api from '../service/api';
import showToast from '../utils/toast';

import AlertModel from '../components/AlertModel';

export default class SubmitAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      question: props.navigation.state.params.question
    }
  }

  render() {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    return (<View style={AppCommonStyles.appContainer}>
      <View style={AppCommonStyles.pageContainer}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={!modalVisible ? '#FFF' : 'rgba(51, 51, 51, 0.6)'}
          barStyle={'dark-content'}
        />
        <View style={AppCommonStyles.cardContainer}>
          <View>
            <Text style={styles.inputTitle}>回答 *</Text>
            <View style={[styles.imputGroup, styles.contentInputBox]}>
              <TextInput
                multiline={true}
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                style={[styles.inputBox, styles.contentInputBox]}
                placeholder="提供你的回答，助人自助，互助成长"
                onChangeText={(text) => this.setState({ content: text })}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.submitAnswer(!this.state.modalVisible)
            }}>
            <Text style={{ height: 40, lineHeight: 40, textAlign: 'center', borderRadius: 4, color: '#fff', backgroundColor: '#129994' }}>发布问题</Text>
          </TouchableOpacity>
        </View>
      </View>
      {modalVisible ? <AlertModel
        handler={this.handleModelBtnClick}
        modalVisible={modalVisible}
        content={'回答提交成功！请等待工作人员审核！'} /> : null}
    </View>);
  }

  handleModelBtnClick = (visible) => {
    const { navigation } = this.props;
    this.setState({ ...this.state, modalVisible: visible });
    navigation.navigate('Question');
  }

  // 提交问题
  submitAnswer() {
    const { question, content } = this.state;

    if (!question || !content) {
      showToast('缺少问题ID或回答！');
      return false;
    }

    Api.addAnswer({ question, content })
      .then(res => {
        if (res.code == 0) {
          this.setState({ modalVisible: true });
        }
      })
  }
}

const styles = StyleSheet.create({
  imputGroup: {
    height: 40,
    borderWidth: 1,
    borderColor: '#d2d2d2',
    marginBottom: 10,
    paddingLeft: 6,
    paddingRight: 6
  },
  inputTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    color: '#129994'
  },
  inputBox: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    padding: 0,
    color: '#333'
  },
  contentInputBox: {
    height: 200
  }
})