import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Change() {
  return (
    <ScrollView style={styles.main}>
      <SafeAreaView>
        <View style={styles.newPswd}>
          <Text style={styles.title}>Confirm Changes</Text>
          <View style={styles.newPswdInfo}>
            <View style={styles.section}>
              <Text style={styles.info}>CREATE PASSWORD</Text>
              <TextInput
                style={styles.input}
                placeholder="create new password"
                secureTextEntry={true}
              />
            </View>
            <View>
              <Text style={styles.info}>CONFIRM PASSWORD</Text>
              <TextInput
                style={styles.input}
                placeholder="confirm new password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.button}>CHANGE PASSWORD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgSec}>
          <Image
            source={require('../img/changePswd.png')}
            style={styles.Lock}
          />
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
  },
  newPswd: {
    alignItems: 'center',
    paddingVertical: wp(1),
  },
  title: {
    fontSize: hp(4),
    marginTop: hp(5.5),
    color: '#123456',
  },
  newPswdInfo: {
    marginTop: hp(3.5),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: wp('95%'),
    padding: wp(5),
  },
  section: {
    marginBottom: hp(3.5),
  },
  input: {
    height: hp(7.5),
    backgroundColor: '#fff',
    borderRadius: wp(2.5),
    marginTop: hp(1),
    elevation: hp(2),
    shadowColor: '#686868',
    paddingHorizontal: '5%',
    fontSize: hp(1.8),
  },
  info: {
    fontSize: hp(2.0),
    color: '#0AA1DD',
  },
  button: {
    paddingVertical: hp(2.0),
    paddingHorizontal: wp(3.5),
    backgroundColor: '#0AA1DD',
    marginTop: hp(2.5),
    borderRadius: wp(2),
    elevation: hp(1.5),
    shadowColor: '#0AA1DD',
    color: '#fff',
    fontSize: hp(1.5),
    marginBottom: hp(2.5),
  },
  endTxt: {
    marginTop: hp(2.5),
    fontSize: hp(2.0),
    marginBottom: hp(3.5),
  },
});

export default Change;
