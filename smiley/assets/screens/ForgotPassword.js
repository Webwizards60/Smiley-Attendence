import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function ForgotPassword() {
  return (
    <ScrollView>
      <SafeAreaView>
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
            <View style={styles.section}>
              <Text style={styles.info}>ENTER NEW PASSWORD</Text>
              <TextInput
                style={styles.input}
                placeholder="enter new password"
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.info}>CONFIRM NEW PASSWORD</Text>
              <TextInput
                style={styles.input}
                placeholder="confirm your password"
              />
            </View>
          </View>
          <View>
            <Text style={styles.button}>CHANGE PASSWORD</Text>
          </View>
          <Text style={styles.endTxt}>
            OR PLEASE CONTACT YOUR ADMINISTRATOR
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Lock: {
    height: 300,
    width: 300,
    marginBottom: 25,
  },
  imgSec: {
    display: 'flex',
    alignItems: 'center',
  },
  newPswd: {
    backgroundColor: '#fff',
    position: 'relative',
    borderRadius: 50,
    height: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 25,
    color: '#123456',
  },
  newPswdInfo: {
    marginTop: 35,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: '5%',
  },
  section: {
    marginBottom: 25,
  },
  input: {
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 10,
    elevation: 20,
    shadowColor: '#686868',
    paddingHorizontal: '5%',
    fontSize: 18,
  },
  info: {
    fontSize: 20,
    color: '#0AA1DD',
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 35,
    backgroundColor: '#0AA1DD',
    marginTop: 25,
    borderRadius: 20,
    elevation: 15,
    shadowColor: '#0AA1DD',
    color: '#fff',
    fontSize: 15,
  },
  endTxt: {
    marginTop: 25,
    fontSize: 20,
    marginBottom: 35,
  },
});

export default ForgotPassword;
