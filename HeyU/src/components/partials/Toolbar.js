import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import styles from '../../styles/Style'
import * as constants from '../../constants/Constants'

export default class Toolbar extends Component {
  render() {
    let iconButtonRight = this.props.title === constants.PROFILE ? require('../../assets/img/icons/ic-power-black-64dp.png') :
                          this.props.title === constants.GROUPS ? require('../../assets/img/icons/ic-plus-white-64dp.png') : require('../../assets/img/icons/ic-search.png')
    return (
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButtonLeft}>
          <Text style={styles.toolbarButtonTextLeft}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.toolbarTitle}>{this.props.title}</Text>
        <TouchableOpacity style={styles.toolbarButtonRight}>
          <Image source={iconButtonRight} style={styles.toolbarButtonImage} />
        </TouchableOpacity>
      </View>
    )
  }
}