import React from 'react';
// import { StyleSheet } from 'react-native';
// import { Text } from 'react-native-paper';
// import { FloatingButton } from 'react-native-ui-lib';
import { FlatList } from 'native-base';

import { Page } from '../../components/Page';
import { FeedItem } from '../../components/FeedItem';

export const Matches = () => {
  const mockData = [
    { id: '1', name: 'Football' },
    { id: '2', name: 'Basketball' },
    { id: '3', name: 'Volleyball' }
  ];

  return (
    <Page>

      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <FeedItem content={item.name} key={item.id} />}
      />

    </Page>
  );
};

// const styles = StyleSheet.create({
//   list: {}
// });

export default Matches;
