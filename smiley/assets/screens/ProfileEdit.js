import React from 'react';
import {
  Text,
  View,
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

function ProfileEdit() {
  return (
    <View style={styles.background}>
      <View style={styles.ImageSection}>
        <Image source={require('../img/person.png')} style={styles.Image} />
        <View style={styles.EmpInfo}>
          <Text style={styles.Name}>John Doe</Text>
          <Text style={styles.Profession}>Employee</Text>
        </View>
      </View>

      <View style={styles.EditProfile}>
        <Text style={styles.Text}>Name</Text>
        <TextInput placeholder="Edit your Name" style={styles.Input} />
        <Text style={styles.Text}>Phone No.</Text>
        <TextInput placeholder="Edit your Phone No." style={styles.Input} />
        <Text style={styles.Text}>Create Password</Text>
        <TextInput
          placeholder="Create a New Password"
          style={styles.Input}
          secureTextEntry={true}
        />
        <Text style={styles.Text}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm your password"
          style={styles.Input}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.btnTxt}>Submit Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#fff',
    padding: wp(2.5),
    display: 'flex',
    justifyContent: 'center',
  },

  ImageSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  Image: {
    height: hp(12),
    width: hp(12),
    borderRadius: wp(6),
  },

  Name: {
    fontSize: hp(3.5),
    fontWeight: '600',
    marginLeft: wp(2.5),
  },

  Profession: {
    marginLeft: wp(2.5),
    fontSize: hp(2),
  },

  Text: {
    fontSize: hp(2.5),
    fontWeight: '700',
    color: '#0AA1DD',
  },

  Input: {
    fontSize: hp(2),
    marginBottom: hp(5),
    marginTop: hp(2),
    padding: wp(2),
    elevation: hp(2.5),
    backgroundColor: '#fff',
    shadowColor: '#585858',
    borderRadius: wp(1.5),
  },

  EditProfile: {
    padding: wp(1.5),
    marginTop: hp(1.5),
  },

  Button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.5),
  },

  btnTxt: {
    backgroundColor: '#0AA1DD',
    padding: wp(3),
    fontSize: hp(2.5),
    fontWeight: '700',
    color: '#fff',
    borderRadius: wp(1.5),
    elevation: hp(1.5),
    shadowColor: '#0AA1DD',
  },
});

export default ProfileEdit;
