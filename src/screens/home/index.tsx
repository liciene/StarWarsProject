import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import Item from './components/item';

import useHome from './useHome';

const Home = () => {
  const {isLoading, list} = useHome();
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({item}) => <Item name={item.name} />}
        />
        <Item />
      </View>
    </>
  );
};

export default Home;
