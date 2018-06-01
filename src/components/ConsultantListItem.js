import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  Picker,
  TextInput,
  TouchableOpacity
} from 'react-native';

// 公共样式
import { AppColors, AppFonts, AppSizes, AppCommonStyles } from '../style';

export default class ConsultantListItem extends Component {

  render() {
    const { navigation } = this.props.parentProps;
    const { item, chooseWeek, currentWeek } = this.props;
    // // console.log(this.props);

    return (
      <View style={defaultStyles.listItem}>
        <Image style={defaultStyles.consultantPoster} source={{ uri: item.photo }} />
        <View style={defaultStyles.consultantInfo}>
          <Text style={defaultStyles.consultantName}>{item.name}</Text>
          <Text style={defaultStyles.consultantDes}>{item.description}</Text>
          <View style={defaultStyles.actionBtns}>
            {item.onduty_time.map((time, index) => {
              return <TouchableOpacity
                key={index}
                disabled={!time.available ? true : false}
                onPress={() => {
                  navigation.navigate('Reservation', {
                    currentWeek: currentWeek,
                    chooseWeek: chooseWeek,
                    consultantId: item._id,
                    chooseWeekday: item.onduty_day,
                    chooseTime: time.time
                  })
                }}>
                <Text
                  style={
                    !time.available ? [defaultStyles.consultantTime, { backgroundColor: '#ffa500' }]
                      : defaultStyles.consultantTime}>
                  {!time.available ? time.remark : `周${item.onduty_day}【${time.time}】`}
                </Text>
              </TouchableOpacity>
            })}
          </View>
        </View >
      </View >
    );
  }
}

const defaultStyles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.pageBackground,
  },
  consultantPoster: {
    flex: 0,
    marginRight: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  consultantInfo: {
    flex: 1,
  },
  consultantName: {
    fontSize: 16,
    lineHeight: 22,
    color: '#40434c',
  },
  consultantDes: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: AppFonts.h3.lineHeight,
    color: '#6b707f'
  },
  consultantInfoText: {
    fontSize: 12,
    color: AppColors.textDefault
  },
  actionBtns: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  consultantTime: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    height: 24,
    fontSize: 10,
    borderRadius: 10,
    color: '#FFF',
    backgroundColor: '#39BFB7'
  }
});