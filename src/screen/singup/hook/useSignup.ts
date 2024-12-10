import { useState } from "react"
import { SingupRequest, SingupResponse } from "../../../interfaces/auth.interface"
import useNavigation from "../../../navigation/hook/useNavigation";
import authService from "../../../services/authServices";

const useSignup = () => {
    const [form, setForm] = useState<SingupRequest>({
        name: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigation = useNavigation();

    const handleChange = (key: string, value: string) => {
        setForm({...form, [key]: value});
    };

    const onSubmit = async () => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await authService.register(form);
            console.log('Response from backend:', response);
        
            if (response.code === 201 && response.message) {
                setForm({ name: '', email: '', password: '' });
                navigation.navigate('Login'); 
            } else {
                setError('Registration failed: Invalid response structure');
                setForm({ name: '', email: '', password: '' });
            }
        } catch (error: any) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Failed to register');
            } else {
                setError(error.message || 'Failed to register');
            }
            setForm({ name: '', email: '', password: '' });
        } finally {
            setLoading(false);
        }
        
    };
    
    

    return {
        form,
        handleChange,
        onSubmit,
        loading,
        error,
    }
}

export default useSignup;