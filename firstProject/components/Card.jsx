import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({title, age, description, imgUrl}) => {
  return (
    <View style={styles.card}>
      <Image source={imgUrl} style={{width: 150, height: 150}} />
      <Text style={styles.title}>{title}</Text>
      <Text>Edad: {age}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Card;
