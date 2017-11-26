import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native'
import styles from '../uitls/styles'
import ProfileItem from '../components/ProfileItem'
import { images } from '../uitls/assets'

const dataProfile = [
  {key: 1, title: 'Email address', value: 'nguyencse.ninhhoa@example.com'},
  {key: 2, title: 'Telephone', value: '01672345678'},
  {key: 3, title: 'Notifications', value: ''},
  {key: 4, title: 'Settings', value: ''},
  {key: 5, title: 'Feedback', value: ''},
  {key: 6, title: 'Get help', value: ''},
  {key: 7, title: 'Delete account', value: ''},
]

export default class Contacts extends Component {
  constructor(props){
    super(props)
    avatar = images.avatarDefault.uri
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.profileHeader}>
          <View style={styles.profileAvatarContainer}>
            <Image source={avatar} style={styles.profileAvatar}/>
          </View>
          <Text style={styles.profileName}>David James</Text>
          <Text numberOfLines={2} style={styles.profileSummary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
        </View>
        <View style={styles.profileMenuContainer}>
          <FlatList
            data={dataProfile}
            renderItem={({ item }) =>  <ProfileItem item={item}/>}
          />
        </View>
      </View>
    )
  }
}