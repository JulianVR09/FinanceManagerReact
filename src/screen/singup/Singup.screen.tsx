import React from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import useSignup from './hook/useSignup';
import Input from '../../components/input/Input.component';

const Singup = () => {
  const {form, handleChange, onSubmit, loading, error} = useSignup();

  const handlePress = () => {
    if (error) {
      Alert.alert('Error', error);
    } else {
      onSubmit();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Image
              source={require('../../assets/img/Signup.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.form}>
            <Input
              value={form.name}
              onChange={(text: string) => handleChange('name', text)}
              label="Name"
            />
            <Input
              value={form.email}
              onChange={(text: string) => handleChange('email', text)}
              label="Email"
              keyboardType="email-address"
            />
            <Input
              value={form.password}
              onChange={(text: string) => handleChange('password', text)}
              label="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handlePress}
              disabled={loading}>
              <Text style={styles.buttonText}>
                {loading ? 'Registering...' : 'Sign Up'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Singup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F29175',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  form: {
    width: '90%',
    backgroundColor: '#FFFCEB',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: '#4F759B',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#A5A5A5',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
