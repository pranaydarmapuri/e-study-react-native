import * as React from 'react';
import { ScrollView, Animated, Text, View } from 'react-native';

import Header from './../components/AnimatedHeader'
import Card from '../components/ClassesInfoCard'
import Modal from '../components/classInfoModel'

import useStyles from '../hooks/useStyles'

export default function TabOneScreen(props: any) {

  const offSet = React.useRef(new Animated.Value(0)).current
  const css = useStyles()

  const initState = {
    isModalOpen: false,
    modal: {
      title: '',
      describtion: '',
      link: '',
      timing: new Date()
    }
  }
  const [state, setState] = React.useState(initState)


  const data = [{
    title: 'Hello',
    describtion: 'qwerty',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '1001'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '1002'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '1012'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '1212'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '1013'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '1032'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '1512'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '012'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '101'
  }, {
    title: 'Hi',
    describtion: 'qwerty keyboard',
    link: 'https://www.google.com',
    timing: new Date(),
    id: '10125'
  }]

  return (
    <>
      <Header animatedValue={offSet} />
      <View style={css.homeContainer}>
        <View style={css.homeHeaderContainer}>
          <Text style={css.homeHeader}>Today's Classes</Text>
          <View style={css.homeHeaderDivider} />
        </View>
        <Modal
          title={state.modal.title}
          timing={state.modal.timing}
          describtion={state.modal.describtion}
          link={state.modal.link}
          closeHandler={() => setState(initState)}
          openModal={state.isModalOpen}
        />
        <ScrollView
          style={{
            marginHorizontal: 4
          }}
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: offSet } } }],
              { useNativeDriver: false }
            )
          }
          showsVerticalScrollIndicator={false}
        >
          {
            data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                describtion={item.describtion}
                timing={item.timing}
                onlyTime={true}
                pressHandler={() => {
                  setState({
                    modal: {
                      title: item.title,
                      describtion: item.describtion,
                      link: item.link,
                      timing: item.timing,
                    },
                    isModalOpen: true
                  })
                }}
              />
            ))
          }
          <View style={{ height: 140 }} />
        </ScrollView >
      </View>
    </>
  );
}

