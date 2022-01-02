import * as React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback as Div,
  TouchableOpacity as Button,
  Linking,
  Modal,
} from 'react-native'


import useStyles from '../hooks/useStyles'
import { longDateFormate as timeFormate } from '../constants/TimeAndDateFormate'


interface ModelProps {
  title: string
  describtion?: string
  timing: Date
  link: string
  closeHandler: () => void,
  openModal: boolean
}


const classInfoModel = ({
  timing,
  title,
  describtion,
  closeHandler,
  link,
  openModal
}: ModelProps) => {

  const style = useStyles()

  const Btn = () => (
    <Button style={[style.classInfoCardBtnCont]} onPress={() => Linking.openURL(link)}>
      <Text style={style.classInfoCardBtnText}>Join</Text>
    </Button>
  )

  return (
    <Modal onRequestClose={closeHandler} visible={openModal} transparent={true} animationType={'slide'}>
      <Div onPress={closeHandler}>
        <View style={style.classInfoModal}>
          <View style={style.classInfoModalCard}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={style.classInfoCardTime}>
                {timeFormate(timing)}
              </Text>
            </View>
            <Text style={style.classInfoCardTitle}>{title}</Text>
            {
              describtion
                ? (<Text style={style.classInfoCardDesc}>{describtion}</Text>)
                : null
            }
            <Btn />
          </View>
        </View>
      </Div>
    </Modal>
  );
}

export default classInfoModel;