import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity
} from 'react-native';

// 公共样式
import { AppColors, AppSizes, AppFonts, AppCommonStyles } from '../style';

export default class AlertModel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible,
      content: props.content
    };
  }

  setModalVisible(visible) {
    if (this.props.handler) {
      this.props.handler(visible);
    }
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible, content } = this.state;
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modelContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>{content}</Text>

            <TouchableOpacity onPress={() => {
              this.setModalVisible(!modalVisible)
            }}>
              <Text style={styles.btnText}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.6)',
  },

  contentContainer: {
    padding: 20,
    width: AppSizes.container.width,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },

  content: {
    fontSize: AppFonts.h3.fontSize,
    lineHeight: AppFonts.h1.lineHeight
  },
  btnText: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: '#129994',
    borderRadius: 10
  }
})