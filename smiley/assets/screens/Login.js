import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function Login({navigation}, props) {
  return (
    <View style={styles.background}>
      <Image source={require('../img/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeTxt}>WELCOME BACK</Text>
      <Text style={styles.headerTxt}>LOGIN TO CONTINUE</Text>
      <View style={styles.detailbox}>
        <Image style={styles.image} source={require('../img/cup.png')} />
        <Text style={styles.login}>LOGIN</Text>
        <View style={styles.loginDetails}>
          <Text style={styles.field}>YOUR EMAIL</Text>
          <TextInput
            placeholder="ENTER YOUR EMAIL"
            style={styles.input}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Text style={styles.field}>PASSWORD</Text>
          <TextInput
            placeholder="ENTER YOUR PASSWORD"
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <Text
          style={styles.forPwa}
          onPress={() => navigation.navigate('Forgot')}>
          FORGOT PASSWORD
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: hp(8.0),
    width: wp(30),
    marginTop: hp('5%'),
  },

  welcomeTxt: {
    alignSelf: 'center',
    marginTop: hp(0.5),
    fontSize: hp(3),
    fontWeight: '500',
  },

  headerTxt: {
    alignSelf: 'center',
    fontSize: hp(1.5),
    marginTop: hp(0.8),
  },

  background: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#DFF6FF',
  },

  detailbox: {
    height: hp('75%'),
    width: wp('100%'),
    position: 'absolute',
    bottom: hp(-1.2),
    backgroundColor: '#fff',
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },

  image: {
    height: hp(25),
    width: wp(40),
    position: 'absolute',
    right: wp(2.5),
    top: hp(-12.5),
  },

  login: {
    alignSelf: 'center',
    marginTop: hp(3.5),
    fontSize: hp(4),
    fontWeight: 'bold',
    color: '#7C7C7C',
  },

  field: {
    fontSize: hp(2),
    marginLeft: wp(8),
    color: '#0AA1DD',
    marginBottom: hp(0.8),
  },

  input: {
    backgroundColor: '#fff',
    width: wp('85%'),
    height: hp(6.5),
    alignSelf: 'center',
    borderRadius: wp(2),
    fontSize: hp(1.5),
    padding: wp(1.5),
    marginBottom: hp(5.5),
    elevation: hp(0.8),
    shadowColor: '#747474',
  },

  loginDetails: {
    marginTop: wp(5.5),
  },

  button: {
    height: hp(7.5),
    width: wp('40%'),
    alignSelf: 'center',
    borderRadius: wp(2.5),
    backgroundColor: '#0AA1DD',
    elevation: hp(1.5),
    shadowColor: '#027bab',
    marginTop: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: hp(3.5),
    color: '#fff',
    fontWeight: '500',
  },

  forPwa: {
    fontSize: hp(2),
    alignSelf: 'center',
    marginTop: hp(5.5),
    color: '#a3a3a3',
  },
});

export default Login;
