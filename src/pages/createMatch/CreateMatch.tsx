import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Page from '../../components/Page';

export const CreateMatch = () => {
  return (
    <Page>
      <Text style={styles.text}>
        TESTE
      </Text>
    </Page>
  );
};


const styles = StyleSheet.create({
  text: {
    margin: 32,
    paddingHorizontal: 24,
    fontSize: 26,
    color: 'royalblue',
    textAlign: 'center'
  }
});

export default CreateMatch;
