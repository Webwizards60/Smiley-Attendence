import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function ForgotPassword({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.imgSec}>
        <Image source={require('../img/Lock.png')} style={styles.Lock} />
      </View>
      <View style={styles.newPswd}>
        <Text style={styles.title}>Forgot Password</Text>
        <View style={styles.newPswdInfo}>
          <View style={styles.section}>
            <Text style={styles.info}>ENTER YOUR EMAIL</Text>
            <TextInput
              style={styles.input}
              placeholder="enter your email"
              keyboardType="email"
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Otp')}>
          <Text style={styles.button}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.cancel}>Login Instead</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: hp('100%'),
    display: 'flex',
    flexDirection: 'column',
  },
  Lock: {
    height: hp(30),
    width: hp(30),
    marginBottom: hp(2.5),
  },
  imgSec: {
    display: 'flex',
    alignItems: 'center',
  },
  newPswd: {
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  title: {
    fontSize: hp(4.0),
    marginTop: hp(2.5),
    color: '#123456',
  },
  newPswdInfo: {
    marginTop: hp(3.5),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: wp('95%'),
    padding: wp('5%'),
  },
  section: {
    marginBottom: hp(2.5),
  },
  input: {
    height: hp(7.5),
    backgroundColor: '#fff',
    borderRadius: wp(2.5),
    marginTop: hp(1),
    elevation: hp(2),
    shadowColor: '#686868',
    paddingHorizontal: wp('5%'),
    fontSize: hp(1.8),
  },
  info: {
    fontSize: hp(2),
    color: '#0AA1DD',
  },
  button: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    backgroundColor: '#0AA1DD',
    marginTop: hp(2.5),
    borderRadius: wp(2.0),
    elevation: hp(1.5),
    shadowColor: '#0AA1DD',
    color: '#fff',
    fontSize: hp(2),
  },

  cancel: {
    fontSize: hp(2.5),
    marginTop: hp(2),
  },
});

export default ForgotPassword;
