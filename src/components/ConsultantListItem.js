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
  /**
  * 默认 Props
  */
  static defaultProps = {
    parentProps: null,      // 父组件参数，主要取用navigation参数
    item: []                // 文章数据
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      language: 'JavaScript',
      item: { ...props.item }
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { parentProps } = this.props;
    const { item } = this.state;

    return (
      <View style={defaultStyles.listItem}>
        <Image style={defaultStyles.consultantPoster} source={{ uri: 'http://192.168.2.1:8000/img/upload_9fc093fcfe541096cd218da3c3d93e17.png' }} />
        <View style={defaultStyles.consultantInfo}>
          <Text style={defaultStyles.consultantName}>张三</Text>
          <Text style={defaultStyles.consultantDes}>中国心理学会注册心理师 X-14-069  英国诺丁汉大学人际关系硕士 MA in Human Relations  中美精神分析联盟（CAPA）初级组、婴儿观察组毕业、高级组在读  接受国际精神分析</Text>
          <View style={defaultStyles.actionBtns}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true)
              }}>
              <Text style={defaultStyles.consultantTime}>9:00~10:00</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={defaultStyles.consultantTime}>10:30~11:30</Text>
            </TouchableOpacity>
          </View>
        </View >

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false) }}
        >
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>电话 *</Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#333' }}
                placeholder="手机号，必填"
                onChangeText={(text) => this.setState({ text })}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>电话 *</Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="#d2d2d2"
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#333' }}
                placeholder="手机号，必填"
                onChangeText={(text) => this.setState({ text })}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>性别</Text>
              <Picker
                mode="dropdown"
                prompt="性别，选填"
                selectedValue=""
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#d2d2d2' }}
                onValueChange={(lang) => this.setState({ language: lang })}>
                <Picker.Item label="不便透露" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>学院</Text>
              <Picker
                mode="dropdown"
                prompt="所在学院，选填"
                selectedValue=""
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#d2d2d2' }}
                onValueChange={(lang) => this.setState({ language: lang })}>
                <Picker.Item label="不便透露" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d2d2d2', marginBottom: 10, paddingLeft: 6, paddingRight: 6 }}>
              <Text style={{ fontSize: 14, color: '#129994' }}>年级</Text>
              <Picker
                mode="dropdown"
                prompt="所在年级，选填"
                selectedValue=""
                style={{ flex: 1, height: 40, marginLeft: 10, padding: 0, color: '#d2d2d2' }}
                onValueChange={(lang) => this.setState({ language: lang })}>
                <Picker.Item label="不便透露" value="" />
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
                onChangeText={(text) => this.setState({ text })}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
              <Text style={{ height: 40, lineHeight: 40, textAlign: 'center', borderRadius: 4, color: '#fff', backgroundColor: '#129994' }}>立即预约</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
              <Text style={{ marginTop: 10, height: 40, lineHeight: 40, textAlign: 'center', borderWidth: 1, borderColor: '#d2d2d2', borderRadius: 4, color: '#999' }}>取消</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View >
    );
  }
}

const defaultStyles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.pageBackground,
  },
  consultantPoster: {
    flex: 0,
    width: 80,
    height: 80,
    borderRadius: 10,
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
    marginRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 10,
    borderRadius: 10,
    color: '#FFF',
    backgroundColor: '#39BFB7'
  }
});