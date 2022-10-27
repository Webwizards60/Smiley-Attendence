import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Otp({navigation}) {
  return (
    <ScrollView style={styles.main}>
      <SafeAreaView>
        <View style={styles.newPswd}>
          <Text style={styles.title}>User Verification</Text>
          <View style={styles.newPswdInfo}>
            <View style={styles.section}>
              <Text style={styles.info}>Enter Otp</Text>
              <TextInput
                style={styles.input}
                placeholder="******"
                keyboardType="email"
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Change')}>
            <Text style={styles.button}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgSec}>
          <Image source={require('../img/otp.png')} style={styles.Lock} />
        </View>
      </SafeAreaView>
    </ScrollView>
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
    marginTop: hp(5),
  },
  newPswd: {
    alignItems: 'center',
    paddingVertical: hp('10%'),
  },
  title: {
    fontSize: hp(4),
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
    elevation: hp(2.0),
    shadowColor: '#686868',
    paddingHorizontal: wp('5%'),
    fontSize: hp(1.8),
  },
  info: {
    fontSize: hp(2),
    color: '#0AA1DD',
  },
  button: {
    paddingVertical: hp(2.0),
    paddingHorizontal: wp(3.5),
    backgroundColor: '#0AA1DD',
    marginTop: hp(2.5),
    borderRadius: wp(2.0),
    elevation: hp(1.5),
    shadowColor: '#0AA1DD',
    color: '#fff',
    fontSize: hp(1.5),
  },
  endTxt: {
    marginTop: hp(2.5),
    fontSize: hp(2.0),
    marginBottom: hp(3.5),
  },
});

export default Otp;
