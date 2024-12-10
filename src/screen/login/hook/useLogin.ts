import {ChangeEvent, useState} from 'react';
import {LoginRequest} from '../../../interfaces/auth.interface';
import authService from '../../../services/authServices';
import useNavigation from '../../../navigation/hook/useNavigation';
import { useAuth } from '../../../contexts/auth.context';

const useLogin = () => {
  const { saveSessionInfo } = useAuth()

  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<LoginRequest>({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login(form);
      console.log(response)
      if ('data' in response && response.code === 201) {
        const { accessToken, id, name } = response.data;
        await saveSessionInfo(id, accessToken, name)
        console.log('Session saved:', id, name, accessToken);
        setForm({email: '', password: ''});
        navigation.navigate('Home');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (error: any) {
        setError(error.message ||'Failed to login');
    } finally {
        setLoading(false);
    }

    
  };

  return {
    form,
    handleChange,
    onSubmit,
    error,
    loading
  };
};

export default useLogin;
