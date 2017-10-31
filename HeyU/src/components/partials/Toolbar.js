import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import styles from '../../styles/Style'

export default class Toolbar extends Component {
  constructor(props){
    super(props)
    btnSearch = require('../../assets/img/icons/ic-search.png')
  }

  render() {
    return (
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButtonLeft}>
          <Text style={styles.toolbarButtonTextLeft}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.toolbarTitle}>{this.props.title}</Text>
        <TouchableOpacity style={styles.toolbarButtonRight}>
          <Image source={btnSearch} style={styles.toolbarButtonImage} />
        </TouchableOpacity>
      </View>
    )
  }
}