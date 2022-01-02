import * as React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';

import Card from '../components/ClassesInfoCard'
import Modal from '../components/classInfoModel'

import useScrollTop from './../hooks/useScrollTop'
const initState = {
  isModalOpen: false,
  modal: {
    title: '',
    describtion: '',
    link: '',
    timing: new Date()
  }
}
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
}, {
  title: 'last',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '10125'
}, {
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
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
  title: 'last 2',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '101'
}, {
  title: 'last',
  describtion: 'qwerty keyboard',
  link: 'https://www.google.com',
  timing: new Date(),
  id: '10125'
}]

export default function TabTwoScreen() {

  const { GoToTop, _scrollRef } = useScrollTop()

  const [state, setState] = React.useState(initState)

  return (
    <>
      <Modal
        title={state.modal.title}
        timing={state.modal.timing}
        describtion={state.modal.describtion}
        link={state.modal.link}
        closeHandler={() => setState(initState)}
        openModal={state.isModalOpen}
      />
      <ScrollView
        ref={_scrollRef}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 12 }}
      >
        {
          data.map((item, _) => (
            <Card key={`classes_${_}`}
              title={item.title}
              describtion={item.describtion}
              timing={item.timing}
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
        <GoToTop />
      </ScrollView>
    </>
  );
}
