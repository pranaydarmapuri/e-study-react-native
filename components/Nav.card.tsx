import * as React from 'react'
import {
  Text,
  TouchableOpacity as Card,
  View,
  ImageBackground as Div
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import useStyles from '../hooks/useStyles'

interface PropsType {
  pressHandler: () => void
  title: string
  icon: any
  index: number
}

const NaviCard = ({ pressHandler, title, icon, index }: PropsType) => {

  const styles = useStyles()

  return (
    <View style={index % 2 == 0 ? styles.navCardLeft : styles.navCardRight}>
      <Card onPress={pressHandler} style={styles.navCardContainer}>
        <Feather name={icon} style={styles.navCardIconUnderlay} />
        <View style={[styles.navCardIconUnderlay2, styles.navCardIconUnderlay3]} />
        <View style={styles.navCardIconUnderlay2} />
        <View style={styles.navCardIconContainer}>
          <Feather name={icon} style={styles.navCardIcon} />
        </View>
        <Text style={styles.navCardText}>{title}</Text>
      </Card>
    </View>
  )
}


export default NaviCard;