import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IInfo} from '../pages/Home/types';

export type HomeStackParamList = {
  HOME: undefined;
  DESCRIPTION: {item: IInfo};
};

export type HomeNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'HOME'
>;
export type DescriptionNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'DESCRIPTION'
>;
