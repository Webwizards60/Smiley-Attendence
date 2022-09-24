import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const report = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Icon
        style={styles.Icon}
        name="arrow-left"
        size={30}
        color="#0AA1DD"
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={styles.title}>Request Leave</Text>
      <View style={styles.Main}>
        <Text style={styles.text}>How many days</Text>
        <TextInput placeholder=" xx days " type="date" style={styles.Input} />
        <Text style={styles.text}>From Date</Text>
        <TextInput placeholder="dd/mm/yyyy" style={styles.Input} />
        <Text style={styles.text}>To Date</Text>
        <TextInput placeholder="dd/mm/yyyy" style={styles.Input} />
        <Text style={styles.text}>Reason For Leave</Text>
        <TextInput
          placeholder="Enter a valid reason for your Leave"
          multiline
          numberOfLines={5}
          style={styles.Input}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    marginTop: '15%',
  },

  Input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 15,
    shadowColor: '#787878',
    marginBottom: 35,
    marginTop: 15,
    fontSize: 18,
    width: 400,
    display: 'flex',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },

  text: {
    fontSize: 20,
  },

  Main: {
    marginTop: '15%',
  },

  button: {
    backgroundColor: '#0AA1DD',
    padding: 25,
    marginTop: 25,
    borderRadius: 15,
    elevation: 15,
    shadowColor: '#0AA1DD',
  },

  btnText: {
    fontSize: 20,
    color: '#fff',
  },

  Icon: {
    position: 'absolute',
    top: 25,
    left: 25,
  },
});

export default report;
