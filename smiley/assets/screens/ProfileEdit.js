import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
        <Text style={styles.Text}>Employee Id</Text>
        <TextInput placeholder="Edit your Employee Id" style={styles.Input} />
        <Text style={styles.Text}>Profession</Text>
        <TextInput placeholder="Edit your Profession" style={styles.Input} />
      </View>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.btnTxt}>Submit Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
  },

  ImageSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  Image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },

  Name: {
    fontSize: 35,
    fontWeight: '600',
    marginLeft: 25,
  },

  Profession: {
    marginLeft: 25,
    fontSize: 20,
  },

  Text: {
    fontSize: 25,
    fontWeight: '700',
    color: '#0AA1DD',
  },

  Input: {
    fontSize: 20,
    marginBottom: 25,
    marginTop: 10,
    padding: 20,
    elevation: 25,
    backgroundColor: '#fff',
    shadowColor: '#585858',
    borderRadius: 15,
  },

  EditProfile: {
    padding: 15,
    marginTop: '15%',
  },

  Button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },

  btnTxt: {
    backgroundColor: '#0AA1DD',
    padding: 15,
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    borderRadius: 15,
    elevation: 15,
    shadowColor: '#0AA1DD',
  }
});

export default ProfileEdit;
