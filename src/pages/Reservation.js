import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  Picker,
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

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    const { chooseWeek, consultantId, chooseWeekday, chooseTime, currentWeek } = this.props.navigation.state.params;

    this.state = {
      modalVisible: false,
      currentWeek: currentWeek,
      chooseWeek: chooseWeek,
      chooseWeekday: chooseWeekday,
      chooseTime: chooseTime,
      consultantId: consultantId
    }
    console.log(chooseWeek)
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
        <ScrollView style={[AppCommonStyles.cardContainer, { marginTop: 0 }]}>
          <View>
            <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 14, color: '#129994' }}>请完善以下必要信息，我们将对你提交的数据进行严格保密！</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>电话 *</Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#333' }}
                placeholder="手机号，必填"
                onChangeText={(text) => this.setState({ visitor_tel: text })}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>周次 *</Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                editable={false}
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#333' }}
                defaultValue={`第 ${this.state.chooseWeek} 周`}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>星期 *</Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                editable={false}
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#333' }}
                defaultValue={`星期 ${this.state.chooseWeekday}`}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>时间 *</Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                editable={false}
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#333' }}
                defaultValue={this.state.chooseTime}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>性别</Text>
              <Picker
                mode="dropdown"
                prompt="性别，选填"
                selectedValue={this.state.visitor_gender}
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0 }}
                onValueChange={(text) => this.setState({ visitor_gender: text })}>
                <Picker.Item label="选填" value="" />
                <Picker.Item label="男" value="1" />
                <Picker.Item label="女" value="2" />
              </Picker>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>学院</Text>
              <Picker
                mode="dropdown"
                prompt="所在学院，选填"
                selectedValue={this.state.visitor_college}
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0 }}
                onValueChange={(text) => this.setState({ visitor_college: text })}>
                <Picker.Item label="选填" value="" />
                <Picker.Item label="通信与信息工程学院" value="1" />
                <Picker.Item label="计算机科学与技术学院" value="2" />
                <Picker.Item label="自动化学院" value="3" />
                <Picker.Item label="先进制造工程学院" value="4" />
                <Picker.Item label="光电工程学院/重庆国际半导体学院" value="5" />
                <Picker.Item label="软件工程学院" value="6" />
                <Picker.Item label="生物信息学院" value="7" />
                <Picker.Item label="理学院" value="8" />
                <Picker.Item label="经济管理学院/现代邮政学院" value="9" />
                <Picker.Item label="传媒艺术学院" value="10" />
                <Picker.Item label="外国语学院" value="11" />
                <Picker.Item label="国际学院" value="12" />
                <Picker.Item label="网络空间安全与信息法学院" value="13" />
                <Picker.Item label="体育学院" value="13" />
              </Picker>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>年级</Text>
              <Picker
                mode="dropdown"
                prompt="所在年级，选填"
                selectedValue={this.state.visitor_grade}
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0 }}
                onValueChange={(text) => this.setState({ visitor_grade: text })}>
                <Picker.Item label="选填" value="" />
                <Picker.Item label="大一" value="1" />
                <Picker.Item label="大二" value="2" />
                <Picker.Item label="大三" value="3" />
                <Picker.Item label="大四" value="4" />
              </Picker>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>备注  </Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#333' }}
                placeholder="若您有其他需求，请一定告诉我们，选填"
                onChangeText={(text) => this.setState({ remark: text })}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                this.saveReservation(!this.state.modalVisible)
              }}>
              <Text style={{ height: 40, lineHeight: 40, textAlign: 'center', borderRadius: 4, color: '#fff', backgroundColor: '#129994' }}>立即预约</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { navigation.navigate('Consult') }}>
              <Text style={{ marginTop: 10, height: 40, lineHeight: 40, textAlign: 'center', borderWidth: 1, borderColor: '#d2d2d2', borderRadius: 4, color: '#999' }}>取消</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {modalVisible ? <AlertModel
        handler={this.handleModelBtnClick}
        modalVisible={modalVisible}
        content={'预约请求提交成功！工作人员将通过您登记的联系方式与您取得联系并确定具体事项！'} /> : null}
    </View>);
  }

  handleModelBtnClick = (visible) => {
    const { navigation } = this.props;
    this.setState({ ...this.state, modalVisible: visible });
    navigation.navigate('Consult');
  }

  // 保存预约信息
  saveReservation() {
    const now = new Date();
    const today_weekday = now.getDay() ? now.getDay() : now.getDay() + 7;
    const today_date = now.getDate();
    let consult_date, days;
    console.log(this.state)
    if (this.state.chooseWeek == this.state.currentWeek) {
      days = parseInt(this.state.chooseWeekday) - today_weekday;
    } else {
      days = 7 - today_weekday + parseInt(this.state.chooseWeekday);
    }
    console.log(days)

    consult_date = new Date(now.setDate(today_date + days)).toLocaleDateString();
    let params = {
      // 咨询师名称
      consultant_id: this.state.consultantId,

      // 来访人电话
      visitor_tel: this.state.visitor_tel,

      // 来访人性别
      visitor_gender: this.state.visitor_gender,

      // 来访人年级
      visitor_grade: this.state.visitor_grade,

      // 来访人学院
      visitor_college: this.state.visitor_college,

      // 咨询周次
      consult_week: this.state.chooseWeek,

      // 咨询星期
      consult_weekday: this.state.chooseWeekday,

      // 咨询时间
      consult_date: consult_date,

      // 咨询时间
      consult_time: this.state.chooseTime,
      // 备注
      remark: this.state.visitor_gender,
    };

    if (!params.consultant_id || !params.visitor_tel || !params.consult_week || !params.consult_weekday || !params.consult_time) {
      showToast('缺少必要参数！');
      return false;
    }

    Api.addConsultRecord(params)
      .then(res => {
        if (res.code == 0) {
          this.setState({ modalVisible: true });
        }
      })
  }
}