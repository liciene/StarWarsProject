import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    // borderColor: '#AD3838',
    backgroundColor: '#29282C',
    flex: 1,
  },
  topBar: {
    backgroundColor: '#141319',
    alignItems: 'center',
    paddingVertical: 7,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#AD3838',
    borderBottomWidth: 1,
  },
  mainCharactersContainer: {
    backgroundColor: '#29282C',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainCharacters: {
    paddingHorizontal: 2,
    margin: 5,
    backgroundColor: '#141319',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 185,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    paddingHorizontal: 4,
  },
  text2: {
    color: '#D36E2D',
    borderBottomWidth: 2,
    borderColor: '#D36E2D',
    paddingHorizontal: 4,
  },
});

export default styles;
