
import * as React from 'react';
import { TouchableOpacity as Btn } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

const useScrollTop = () => {

  const _scrollRef = React.useRef<any>()

  const onPressTouch = () => {
    _scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  const GoToTop = () => (
    <Btn onPress={onPressTouch} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20 }} >
      <Icon name="chevron-up" />
    </Btn>
  )

  return { GoToTop, _scrollRef }
}

export default useScrollTop;