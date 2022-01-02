import * as React from 'react';
import {
  FlatList, ScrollView
} from 'react-native-gesture-handler';

import Card from '../components/Nav.card';
import ProfileCard from '../components/ProfileCard';
import Root from '../components/Root';


const More = (props: any) => {


  const cardList = [
    {
      title: 'Timetable',
      icon: 'layout',
      handler: () => props.navigation.navigate('TimetableScreen')
    }, {
      title: 'Assignments',
      icon: 'book-open',
      handler: () => props.navigation.navigate('AssignmentScreen')
    }, {
      title: 'Notes',
      icon: 'book',
      handler: () => props.navigation.navigate('TimetableScreen')
    }, {
      title: 'Circular',
      icon: 'trello',
      handler: () => props.navigation.navigate('TimetableScreen')
    }
  ]

  const renderItem = ({ item, index }: any) => (
    <Card index={index} title={item.title} icon={item.icon} pressHandler={item.handler} />
  )

  return (
    <Root>
      <ProfileCard />
      <FlatList
        numColumns={2}
        data={cardList}
        keyExtractor={item => item.title}
        renderItem={renderItem}
      />
    </Root>
  )
}

export default More