import * as React from 'react'
import {
  Image,
  Text,
  View,
  TouchableOpacity as Touchable,
  Modal,
  ScrollView,
  TouchableWithoutFeedback as TWF,
  TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Checkbox,
  TextInput as Input
} from 'react-native-paper'

import useStyles from '../hooks/useStyles'
import hooks from '../hooks'
import logo from '../constants/Logo'
import { Feather } from '@expo/vector-icons';


const Welcome = () => {

  const styles = useStyles().welcome
  const colorScheme = hooks.useColorScheme()

  const initLoginForm = {
    id: '',
    password: ''
  }

  const [loginForm, setLoginForm] = React.useState(initLoginForm)
  const [openModel, setOpenModel] = React.useState(false)
  const [chech, setChech] = React.useState(false)

  const LoginBtn = React.memo(() => (
    <Touchable style={[styles.buttonContainer, styles.login.loginBtnContainer]} onPress={() => setOpenModel(true)}>
      <Text style={[styles.buttonText, { textTransform: 'uppercase' }]}>Login</Text>
    </Touchable>
  ))

  const Button = React.memo(() => (
    <Touchable style={styles.buttonContainer} onPress={() => setOpenModel(true)}>
      <Text style={styles.buttonText}>Get Started</Text>
      <Feather style={styles.icon} name="chevrons-right" />
    </Touchable>
  ))

  return (
    <SafeAreaView style={styles.root}>
      <Modal
        visible={openModel}
        transparent={true}
        animationType='slide'
      >
        <TWF onPress={() => { setLoginForm(() => initLoginForm); setOpenModel(c => !c) }}>
          <View style={styles.login.modal}>
            <TWF>
              <View style={styles.login.loginPaper}>
                <ScrollView
                  style={styles.login.form}
                  keyboardDismissMode="on-drag"
                  keyboardShouldPersistTaps="always"
                >
                  <Text style={styles.login.title}>Login.</Text>
                  <TextInput
                    placeholder="Enter your Id/Roll no"
                    placeholderTextColor={styles.login.placeHolder.color}
                    style={styles.login.input}
                    value={loginForm.id}
                    onChangeText={text => setLoginForm(cur => ({ ...cur, id: text }))}
                  />
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Enter password"
                    placeholderTextColor={styles.login.placeHolder.color}
                    style={styles.login.input}
                    value={loginForm.password}
                    onChangeText={text => setLoginForm(cur => ({ ...cur, password: text }))}
                  />
                  <Input
                    label="Roll No./ Id"
                    mode="outlined"
                    dense={true}
                    style={styles.login.input}
                    onChangeText={text => setLoginForm(c => ({ ...c, id: text }))}
                  />
                  <TWF onPress={() => setChech(c => !c)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Checkbox
                        color={styles.login.checkbox.color}
                        uncheckedColor={styles.login.checkbox.borderColor}
                        status={chech ? 'checked' : 'unchecked'}
                        onPress={() => setChech(cur => !cur)}
                      />
                      <Text style={styles.login.checkboxLable}>Show Password</Text>
                    </View>
                  </TWF>
                  <View style={{ height: 20 }} />
                  <LoginBtn />
                  <View style={{ height: 35 }} />
                </ScrollView>
              </View>
            </TWF>
          </View>
        </TWF>
      </Modal>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo[colorScheme]} />
        <Text style={styles.caption}>
          a quality place for distance learning
        </Text>
        <Button />
        <Touchable style={styles.link}>
          <Text style={styles.linkText}>Learn more</Text>
        </Touchable>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Welcome)