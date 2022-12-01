import {View, Text} from 'react-native';
import React from 'react';
import style from './styles';

export const Header = () => (
  <View style={style.background}>
    <Text style={style.welcome}>¡Bienvenido!</Text>
    <Text style={style.name}>Jose Perezz Joglar</Text>
    <Text style={style.birthday}>Cumpleños: 18 de octubre</Text>
  </View>
);
