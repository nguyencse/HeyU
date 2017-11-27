import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import styles from '../uitls/styles'
import * as constants from '../uitls/constants'
import { icons } from '../uitls/assets'

export default class Toolbar extends Component {
  render() {
    let iconButtonRight = this.props.title === constants.TOOLBAR_TITLE_PROFILE ? icons.power.uri :
                          this.props.title === constants.TOOLBAR_TITLE_GROUPS ? icons.plus.uri : icons.search.uri
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