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

// 引入API函数
import Api from '../service/api';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

export default class Consult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeek: '',
      filterWeek: '',
      filterWeekday: '',
      filterGender: '',
      consultantList: [],
      consultRecord: [],
      isDone: false
    }
  }

  componentDidMount() {
    const now = new Date();
    const today_date = now.getDate();
    const weekDay = now.getDay() ? now.getDay() : 7;
    let time;
    time = new Date(now.setDate(today_date + 1)).toLocaleDateString();

    this.initConsultantList()
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

    const p1 = Api.getCurrentWeek()
      .then(res => {
        this.setState({ currentWeek: res.data.week, filterWeek: res.data.week });
      })

    const p2 = Api.getConsultantList()
      .then(res => {
        if (res.data && res.data.length) {
          this.setState({ consultantList: [...res.data] });
        } else {
          showToast('暂无咨询师');
          return false;
        }
      })

    const p3 = Api.queryConsultRecordByTime(time)
      .then(res => {
        if (res.data && res.data.length) {
          this.setState({ consultRecord: [...res.data] });
        }
      })

    // let all = Promise.all([p1, p2, p3]);
    // all.then(() => {
    //   this.initConsultantStatus();
    // })
  }

  render() {
    const { consultantList, consultRecord, currentWeek, filterWeek } = this.state;
    let res = this.initConsultantStatus(consultantList, consultRecord, currentWeek, filterWeek);
    const { list, isDone } = res;
    if (!isDone) return null;

    const { navigation } = this.props;
    const data = [[`第${currentWeek}周`, `第${currentWeek + 1}周`], ["全部", "星期一", "星期二", "星期三", "星期四", "星期五"], ["不限", "男", "女"]];

    // // console.log(this.state)

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
                onPress={() => navigation.navigate('Question')}>
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
              handler={(selection, row) => { this.consultantFilter(selection, row, data) }}
              data={data}
            >
              {isDone ?
                <FlatList
                  style={[AppCommonStyles.cardContainer, { marginTop: 0, elevation: 0, }]}
                  data={[...list]}
                  renderItem={
                    ({ item }) => <ConsultantListItem
                      key={item.id}
                      chooseWeek={filterWeek}
                      currentWeek={currentWeek}
                      parentProps={this.props}
                      item={item} />
                  }>
                </FlatList>
                : null}
            </DropdownMenu>
          </View>

        </View>
      </View >
    );
  }

  initConsultantList = async (week) => {
    if (!week) {
      const currentWeekRes = await Api.getCurrentWeek();

      // if(!currentWeekRes.data)
      week = currentWeekRes.data.week;
    }
    const consultantListRes = await Api.getConsultantList({ week });

    return consultantListRes;
  }

  initConsultantStatus(consultantList, consultRecord, currentWeek, filterWeek) {
    const now = new Date();
    const weekDay = now.getDay() ? now.getDay() : 7;
    let temp = [];

    consultantList.length && consultantList.map((consultant, index) => {

      if (filterWeek == currentWeek && consultant.onduty_day < weekDay) {
        for (let [index, elem] of consultant.onduty_time.entries()) {
          if (typeof (elem) == 'object')
            consultant.onduty_time[index] = { time: elem.time, available: false, remark: '已过期' };
          else
            consultant.onduty_time[index] = { time: elem, available: false, remark: '已过期' };
        }
      } else if (filterWeek == currentWeek && consultant.onduty_day == weekDay) {
        for (let [index, elem] of consultant.onduty_time.entries()) {
          if (typeof (elem) == 'object')
            consultant.onduty_time[index] = { time: elem.time, available: false, remark: '请至少提前一天预约' };
          else
            consultant.onduty_time[index] = { time: elem, available: false, remark: '请至少提前一天预约' };
        }
      } else {
        for (let [index, elem] of consultant.onduty_time.entries()) {
          if (typeof (elem) == 'object')
            consultant.onduty_time[index] = { time: elem.time, available: true };
          else
            consultant.onduty_time[index] = { time: elem, available: true };
        }
      }

      let reservations = consultRecord.filter(record => { record.consultant_id == consultant._id && record.consult_week == filterWeek });
      if (reservations.length) {
        reservations.map(reservation => {
          for (let [index, elem] of consultant.onduty_time.entries()) {
            if (elem.time == reservation.consult_time) {
              consultant.onduty_time[index] = { time: reservation.consult_time, available: false, remark: '已预约' };
            }
          }
        })
      }

      temp.push({ key: index.toString(), ...consultant });
    })
    consultantList = [...temp];
    return { list: consultantList, isDone: true };
  }

  consultantFilter(selection, row, data) {
    let querys = {};
    switch (selection) {
      case 0:
        const { consultantList } = this.state;
        let filterWeek = data[selection][row].substring(1, data[selection][row].length - 1)
        this.setState({ consultantList: [...consultantList], filterWeek: filterWeek });
        break;
      case 1:
        this.setState({ filterWeekday: row });
        const { filterGender } = this.state
        querys = filterGender ? { gender: filterGender } : {};
        querys = row ? { ...querys, onduty_day: row } : { ...querys };
        Api.getConsultantList(querys)
          .then(res => {
            if (res.data && res.data.length) {
              this.setState({ consultantList: [...res.data] });
            } else {
              this.setState({ consultantList: [] });
              showToast('暂无咨询师');
              return false;
            }
          })
        break;
      case 2:
        this.setState({ filterGender: row })
        const { filterWeekday } = this.state
        querys = filterWeekday ? { onduty_day: filterWeekday } : {};
        querys = row ? { ...querys, gender: row } : { ...querys };

        Api.getConsultantList(querys)
          .then(res => {
            if (res.data && res.data.length) {
              this.setState({ consultantList: [...res.data] });
            } else {
              this.setState({ consultantList: [] });
              showToast('暂无咨询师');
              return false;
            }
          })
        break;
    }
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