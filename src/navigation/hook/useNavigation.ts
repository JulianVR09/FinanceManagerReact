import {useNavigation as useReactNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { MainScreen } from '../../types/mainScreen';


const useNavigation = () => {
  return useReactNavigation<NativeStackNavigationProp<MainScreen>>();
};

export default useNavigation;