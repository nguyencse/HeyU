import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native'
import styles from '../uitls/Style'
import colors from '../uitls/Color'
import * as constants from '../uitls/Constants'
import { icons } from '../uitls/Assets'

export default class MessageItem extends Component {
  constructor(props){
    super(props)
    iconRight = icons.rightArrow.uri
    this.state = {
      notificationStatus: true
    }
  }

  onChangeStatusNotifications = () => {
    this.setState({
      notificationStatus: !this.state.notificationStatus
    })
  }

  render() {
    let {item} = this.props
    let styleLeft = item.title === constants.DELETE_ACCOUNT ? {color: 'red'} : null

    return (
      <TouchableOpacity style={styles.profileRow}>
        <View style={styles.profileRowContent}>
          <Text numberOfLines={1} style={[styles.profileRowLeftContent, styleLeft]}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.profileRowMiddleContent}>{item.value}</Text>
          <View style={styles.profileRowRightContent}>
            {
              item.title === constants.NOTIFICATIONS ? <Switch thumbTintColor={colors.white} onTintColor={colors.primary} value={this.state.notificationStatus} onValueChange={this.onChangeStatusNotifications}/> : item.title === constants.DELETE_ACCOUNT ? null : <Image source={iconRight} style={styles.icon12}/>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}