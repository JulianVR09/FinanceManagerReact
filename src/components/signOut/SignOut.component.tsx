import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../../contexts/auth.context';

const Signout = () => {
  const {signOut} = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSignOut}> 
        <Image
          source={require('../../assets/img/Logout.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Signout;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
