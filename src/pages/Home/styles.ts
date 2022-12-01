import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textItem: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#f0f0f0',
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#D1D1D1',
    marginVertical: 5,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  itemImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 60,
    marginVertical: 5,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 10,
  },
  buttons: {
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
    backgroundColor: '#ABE8FF',
  },
  textColor: {
    color: 'black',
  },
  textNextItem: {
    color: 'white',
    marginLeft: 20,
  },
});
