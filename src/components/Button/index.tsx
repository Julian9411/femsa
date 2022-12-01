import {Text, Pressable} from 'react-native';
import React from 'react';
import style from './styles';

export const Button = ({
  title,
  action,
}: {
  title: string;
  action: () => void;
}) => {
  return (
    <Pressable style={style.buttons} onPress={action}>
      <Text style={style.textColor}>{title}</Text>
    </Pressable>
  );
};
