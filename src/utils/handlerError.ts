import {Alert} from 'react-native';
import { ApiError } from '../interfaces/apiError.interface';

export const handleError = (error: unknown) => {
  console.error('Error capturado:', error);

  if (error instanceof Error) {
    showAlert('Error', error.message);
  } else if (typeof error === 'string') {
    showAlert('Error', error);
  } else {
    showAlert('Error', 'Ha ocurrido un error inesperado.');
  }
};


const showAlert = (title: string, message: string) => {
  Alert.alert(title, message, [{text: 'OK'}]);
};

export const handleApiError = (error: any): ApiError => {
  if(error.response && error.response.data) {
    const {code, message, timestamp, path} = error.response.data;
    return {
      code: code || error.response.status,
      message: message || 'Unknown error occurred',
      timestamp,
      path
    };
  } else if (error.request) {
    return {code: 0, message: 'Unable to connect to the server'};
  } else {
    return {
      code: 0,
      message: error.message || 'Unknown error occurred'
    }
  }
}