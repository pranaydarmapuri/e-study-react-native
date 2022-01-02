import * as React from 'react'
import {
  Text,
  TouchableOpacity as Button,
  View,
  Image
} from 'react-native'

import useStyles from './../hooks/useStyles'

interface PropsType {
  pressHandler: () => void
  title: string
  img: any
  subtitle: string
}

interface BtnProps {
  pressHandler: () => void
  title: string
  icon?: any
}

const ProfileCard = () => {

  const styles = useStyles()

  const Btn = ({ pressHandler, title }: BtnProps) => (
    <Button style={styles.profileCardButton}>
      <Text style={styles.profileCardBtnText} >{title}</Text>
    </Button>
  )

  return (
    <View style={styles.profileCard}>
      <View style={{ flex: 1, marginTop: 40 }}>
        <Text style={styles.welcomeHeaderName}>Pranay kumar</Text>
        <View style={{ height: 3 }} />
        <Text style={styles.welcomeHeaderId}>177R1A0574</Text>
        <View style={{ height: 10 }} />
        <View style={styles.profileCardBtnContainer}>
          <Btn pressHandler={() => null} title="View Profile" />
          <View style={{ width: 10 }} />
          <Btn pressHandler={() => null} title="Settings" />
        </View>
      </View>
      <Image
        style={{ width: 75, aspectRatio: 1, borderRadius: 75 / 2 }}
        source={{ uri: 'https://i.ebayimg.com/images/g/L5oAAOSwCd9dRWZc/s-l500.jpg' }} />
    </View>
  )
}

export default ProfileCard;