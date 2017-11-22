import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import styles from '../uitls/Style'
import * as constants from '../uitls/Constants'
import { icons } from '../uitls/Assets'

export default class Toolbar extends Component {
  render() {
    let iconButtonRight = this.props.title === constants.PROFILE ? icons.power.uri :
                          this.props.title === constants.GROUPS ? icons.plus.uri : icons.search.uri
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