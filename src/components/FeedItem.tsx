import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-paper';

export interface FeedItemProps {
  content: string;
  image?: string;
  action?: () => any;
}

const defaultImage = require('../assets/images/football-icon.png');

export const FeedItem = ({ content, image, action }: FeedItemProps) => {
  const imageSource = !image ? defaultImage : { uri: image };

  const onClickAction = () => action && action();

  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.text}>{content}</Text>
      </View>

      <Button
        onPress={onClickAction}
        mode="contained"
        color="#228844"
      >
        Jogar
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  card: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50
  },
  text: {
    color: '#228844',
    fontSize: 20
  }
});

export default FeedItem;
