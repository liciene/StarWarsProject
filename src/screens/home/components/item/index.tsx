import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

import useItem from './useItem';

const Item = props => {
  return (
    <View style={styles.mainCharactersContainer}>
      <View style={styles.mainCharacters}>
        <Text style={styles.text}>{props.name}</Text>
        <IconButton
          onPress={() => {}}
          icon="death-star-variant"
          size={18}
          color="#D36E2D"
        />
      </View>
    </View>
  );
};

export default Item;
