import { SafeAreaView } from 'react-native';
import React from 'react'
import useStyles from '../hooks/useStyles'

const Root = (props: any) => {

  const styles = useStyles()

  return (
    <SafeAreaView style={styles.root}>
      {props.children}
    </SafeAreaView>
  )
}

export default Root;