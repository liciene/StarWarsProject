import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar as RNAppbar} from 'react-native-paper';

interface Props {
  backButton?: boolean;
  title?: string;
}

const AppBar = (props: Props) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <RNAppbar.Header theme={{colors: {primary: '#141319'}}}>
      {navigation.canGoBack() && (
        <RNAppbar.Action
          icon="arrow-left-bold-hexagon-outline"
          onPress={onBack}
        />
      )}
      <RNAppbar.Content title={props.title} />
    </RNAppbar.Header>
  );
};

export default AppBar;
