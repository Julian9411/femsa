import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Button, Header} from '../../components';
import style from './styles';
import {IInfo} from './types';
import {HomeNavigationProp} from '../../navigation/types';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProp['navigation']>();
  const [info, setInfo] = useState<IInfo[]>([]);
  const [renderInfo, setRenderInfo] = useState<IInfo[]>([]);

  const url = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products';
  useEffect(() => {
    axios.get(url).then(res => {
      const newData = res.data.map((item: IInfo) => {
        const numberRandom = Math.random() * 10;
        if (numberRandom > 5) {
          item.is_redemption = false;
        }
        return item;
      });
      setInfo(newData);
      setRenderInfo(newData);
    });
  }, []);

  const actionButtons = [
    {
      title: 'Todos',
      action: () => setRenderInfo(info),
    },
    {
      title: 'Canjeados',
      action: () => setRenderInfo(info.filter(item => item.is_redemption)),
    },
    {
      title: 'Ganados',
      action: () => setRenderInfo(info.filter(item => !item.is_redemption)),
    },
  ];

  return (
    <>
      <Header />
      <Text style={[style.textColor, style.textItem]}>Tus movimientos</Text>
      <FlatList
        style={style.listContainer}
        data={renderInfo}
        renderItem={({item}: {item: IInfo}) => {
          return (
            <Pressable
              style={style.item}
              onPress={() => navigation.navigate('DESCRIPTION', {item})}
              key={item.id}>
              <View style={style.itemContent}>
                <Image source={{uri: item.image}} style={style.itemImage} />
                <Text style={style.textColor}>{item.product}</Text>
              </View>
              <View style={style.itemContent}>
                <Text style={style.textColor}>{`${
                  item.is_redemption ? '-' : '+'
                } $${item.price}`}</Text>
                <Text style={style.textNextItem}>{'>'}</Text>
              </View>
            </Pressable>
          );
        }}
        ListFooterComponent={() => (
          <View style={style.containerButtons}>
            {actionButtons.map(button => (
              <Button title={button.title} action={button.action} />
            ))}
          </View>
        )}
      />
    </>
  );
};
