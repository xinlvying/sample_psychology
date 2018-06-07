import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import showToast from '../utils/toast';


// 公共样式
import { AppColors, AppFonts, AppSizes, AppCommonStyles } from '../style';

// 引入API函数
import Api from '../service/api';

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';


var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
})
// 全局变量
global.storage = storage;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  launchImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: AppSizes.screen.width,
    height: AppSizes.screen.height
  }
});

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.smsTimer = null;
    this.countdownTimer = null;
    this.state = {
      timer: '获取验证码',
      timerUnit: "",
      skipTimer: 3,
      couldGetSms: true,
      login_phone: '',
      isLogin: false,
      isDone: false,
      sms_code: ''
    };
    // // console.log(props);
  }

  componentWillMount() {
    const { navigation } = this.props;

    storage.load({
      key: 'loginInfo',
    }).then(ret => {
      this.countDownTimer();

      let reg = /(\d{3})\d{4}(\d{4})/;
      this.setState({
        isLogin: ret ? true : false,
        isDone: true,
        login_phone: ret.loginPhone.replace(reg, '$1****$2'),
      });

    }).catch(err => {
      this.setState({
        isLogin: false,
        isDone: true
      })
    })
  }

  componentWillUnmount() {
    this.smsTimer && clearTimeout(this.smsTimer);
    this.countdownTimer && clearTimeout(this.countdownTimer);
  }

  render() {
    const { navigation } = this.props;
    const { timer, timerUnit, couldGetSms, isLogin, isDone, login_phone, skipTimer } = this.state;
    // // console.log(isLogin, isDone)
    if (!isDone) return false;

    // // console.log(isDone, isLogin);

    return (<View style={AppCommonStyles.appContainer}>
      <View style={[AppCommonStyles.pageContainer, { justifyContent: 'center' }]}>
        <StatusBar
          hidden={isLogin ? true : false}
        />

        <View style={[AppCommonStyles.cardContainer, { marginTop: 0 }]}>
          <View style={[{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 50, marginTop: 0 }]}>
            <Image style={{ width: 50, height: 50 }} source={require('@app/images/consult_icon.gif')}></Image>
            <Image style={{ width: 50, height: 50 }} source={require('@app/images/reading_icon.gif')}></Image>
            <Image style={{ width: 50, height: 50 }} source={require('@app/images/test_icon.gif')}></Image>
          </View>

          {
            isLogin ?
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
                  <Text style={{ fontSize: 14, color: '#129994' }}>{`您好！${login_phone}`}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('TabNav')}>
                    <Text style={{ paddingLeft: 10, paddingRight: 10, height: 30, lineHeight: 30, textAlign: 'center', color: '#129994' }}>{`${skipTimer} s 立即跳过`}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.handleLogout}>
                    <Text style={{ paddingLeft: 10, paddingRight: 10, height: 30, lineHeight: 30, textAlign: 'center', color: '#129994' }}>退出账号</Text>
                  </TouchableOpacity>
                </View>
              </View> :
              <View style={[styles.container]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
                  <Text style={{ fontSize: 14, color: '#129994' }}>手机 *</Text>
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#d2d2d2"
                    style={{ flex: 1, height: 50, marginLeft: 10, padding: 0, color: '#333' }}
                    onChangeText={(text) => this.setState({ login_phone: text })}
                  />
                  <TouchableOpacity
                    disabled={!couldGetSms}
                    onPress={() => this.getSms()}>
                    <Text style={{ paddingLeft: 10, paddingRight: 10, height: 30, lineHeight: 30, textAlign: 'center', color: '#129994', borderLeftWidth: 1, borderLeftColor: '#d2d2d2' }}>{timer + timerUnit}</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
                  <Text style={{ fontSize: 14, color: '#129994' }}>验证码 *</Text>
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#d2d2d2"
                    style={{ flex: 1, height: 50, marginLeft: 10, padding: 0, color: '#333' }}
                    onChangeText={(text) => this.setState({ sms_code: text })}
                  />
                </View>

                <TouchableOpacity
                  onPress={this.handleLogin}>
                  <Text style={{ height: 50, lineHeight: 50, textAlign: 'center', borderRadius: 4, color: '#fff', backgroundColor: '#129994' }}>登录</Text>
                </TouchableOpacity>
              </View>
          }


        </View>

      </View >
    </View >
    );
  }

  // 自动跳转主页倒计时
  countDownTimer = () => {
    const { navigation } = this.props;
    let { skipTimer } = this.state;

    this.countdownTimer = setTimeout(() => {
      if (skipTimer == 0) {
        // clearTimeout(t1);
        navigation.navigate('TabNav');
        return false;
      }
      this.setState({ skipTimer: skipTimer - 1 });
      this.countDownTimer();
    }, 1000);
  }

  // 注销
  handleLogout = () => {
    storage.remove({
      key: 'loginInfo'
    });

    this.countdownTimer && clearTimeout(this.countdownTimer);
    // // console.log(this.countdownTimer);

    this.setState({ isLogin: false });
  }


  // 获取验证码倒计时
  setTimer = () => {
    const { timer } = this.state;

    if (timer) {
      this.smsTimer = window.setTimeout(() => {
        this.setState({
          timer: (~~timer ? timer : 59) - 1,
          timerUnit: "s",
        })
        this.setTimer();
      }, 1000);
      this.setState({
        couldGetSms: false
      })
    }
    else {
      this.setState({
        timer: '重新获取',
        timerUnit: "",
        couldGetSms: true
      })
    }
  }

  // 获取短信验证码
  getSms = () => {
    const { login_phone } = this.state;
    // console.log(login_phone);
    Api.getSms({ login_phone })
      .then(res => {
        showToast('验证码已发送，请查收');
        this.setTimer();
      })
      .catch(err => {
        showToast(err);
      })
  }

  // 登录
  handleLogin = () => {
    const { navigation } = this.props;
    const { login_phone, sms_code } = this.state;

    if (!login_phone || !sms_code) {
      showToast('缺少手机号或验证码');
      return false;
    }

    Api.login({ login_phone, sms_code })
      .then(res => {
        const { code } = res;
        if (code == -1) showToast(res.debug);
        else {
          // console.log(res);
          //存储用户手机
          storage.save({
            key: 'loginInfo',
            data: {
              loginPhone: login_phone,
              userId: res.data._id
            },
            expires: null
          });

          setTimeout(() => {
            navigation.navigate('TabNav');
          }, 500);
        }
      })
      .catch(err => {
        showToast(err);
      })
  }
}