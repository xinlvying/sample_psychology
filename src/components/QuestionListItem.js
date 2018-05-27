import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

// 公共样式
import { AppColors, AppFonts, AppSizes, AppCommonStyles } from '../style';

export default class QuestionListItem extends Component {
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
      item: { ...props.item }
    }
  }

  render() {
    const { parentProps } = this.props;
    const { item } = this.state;

    return (
      <TouchableOpacity
        style={defaultStyles.listItem}
        onPress={() => parentProps.navigation.navigate('QuestionDetail', { questionId: item._id })}>
        <View>
          <Text style={defaultStyles.title}>{item.title}</Text>
          <Text numberOfLines={3} style={defaultStyles.content}>{item.content}</Text>

          <View>
            <View style={defaultStyles.count}>
              <Image style={defaultStyles.icon} source={require('../images/answer_icon.png')}
              />
              <Text style={defaultStyles.info}>{`${item.answers.length} 回答`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const defaultStyles = StyleSheet.create({
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.pageBackground,
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '400',
    color: '#129994'
  },
  content: {
    overflow: 'hidden',
    marginBottom: 5,
    height: 66,
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5
  },
  icon: {
    marginRight: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  info: {
    fontSize: 12,
    color: '#999'
  }
});