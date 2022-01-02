import * as React from 'react'
import {
  View,
  Text,
  TouchableOpacity as Card,
  Linking,
  Modal,
} from 'react-native'


import useStyles from '../hooks/useStyles'
import {
  shortDateFormate as dateFormate,
  timeFormate
} from '../constants/TimeAndDateFormate'


interface CardProps {
  title: string
  describtion?: string
  timing: Date
  pressHandler: () => void,
  onlyTime?: boolean
}


const ClassesInfoCard = ({ timing, title, describtion, onlyTime, pressHandler }: CardProps) => {

  const dateAndTimeFormate = (d: Date) => `${timeFormate(d)}${onlyTime ? '' : `\n${dateFormate(d)}`}`

  const style = useStyles()

  return (
    <Card style={style.classInfoCard} onPress={pressHandler} >
      <Text
        style={[
          style.classInfoCardTime, {
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(0,0,0,0)',
            alignSelf: 'center',
            justifyContent: 'center',
            marginBottom: 0,
            textAlign: 'center'
          }
        ]}>
        {dateAndTimeFormate(timing)}
      </Text>
      <View style={style.classesInfoCardContainer}>
        <Text style={[style.classInfoCardTitle, { fontSize: 20 }]}>{title}</Text>
        {
          describtion
            ? (<Text style={style.classInfoCardDesc}>
              { describtion.length > 30 ? `${describtion.slice(0, 27)}...` : describtion}
            </Text>)
            : null
        }
      </View>
    </Card>
  );
}

export default ClassesInfoCard