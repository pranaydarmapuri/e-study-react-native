import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Card from '../components/ClassesInfoCard'
import Modal from '../components/classInfoModel'
import Root from '../components/Root';

export default function TabTwoScreen() {

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
  }]

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
        style={{ padding: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {
          data.map((item, _) => (
            <Card
              key={`${_}_Notifactions`}
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
      </ScrollView>
    </>
  );
}
