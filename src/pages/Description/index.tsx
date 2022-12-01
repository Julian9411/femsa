import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DescriptionNavigationProp} from '../../navigation/types';
import {Button} from '../../components';
import style from './style';

export const Description = () => {
  const {
    params: {item},
  } = useRoute<DescriptionNavigationProp['route']>();
  const navigation = useNavigation<DescriptionNavigationProp['navigation']>();

  return (
    <SafeAreaView style={style.container}>
      <Text style={[style.text, style.title]}>Compra: {item.product}</Text>
      <View style={style.containerPoints}>
        <Text style={style.text}>
          {item.is_redemption ? 'Canjeaste' : 'Ganaste'}
        </Text>
        <Text style={[style.text, style.pointsText]}>
          {Number(item.price).toFixed()} puntos
        </Text>
      </View>
      <View style={style.containerButton}>
        <Button title="Regresar" action={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};
