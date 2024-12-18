import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import { inputProps } from '../../interfaces/Input.interface';

const Input = ({ value, onChange, label, secureTextEntry, keyboardType }: inputProps) => {
  const [focused, setFocused] = useState(false);
  const labelPosition = useState(new Animated.Value(0))[0];

  const handleFocus = () => {
    setFocused(true);
    Animated.timing(labelPosition, {
      toValue: -35, 
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    if (value === '') {
      setFocused(false);
      Animated.timing(labelPosition, {
        toValue: 0, 
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.View
        style={[
          styles.labelContainer,
          {
            transform: [{ translateY: labelPosition }],
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            {
              fontSize: focused || value !== '' ? 14 : 18, 
            },
          ]}
        >
          {label}
        </Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 25,
    position: 'relative',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 25,
    fontSize: 14,
    color: '#000'
  },
  labelContainer: {
    position: 'absolute',
    left: 15,
    top: 15,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#777',
  },
});
