import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Report({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.welcome}>
        <View>
          <Text style={styles.name}>WELCOME BACK,</Text>
          <Text style={styles.name}>JOHN DOE</Text>
        </View>
        <Icon
          name="undo-variant"
          size={35}
          color="#0AA1DD"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.card}>
        <Image
          source={require('../img/card_gradient.jpg')}
          style={styles.card_img}
        />
        <View style={styles.report_info}>
          <View>
            <Text style={styles.salary_txt}>Salary</Text>
            <Text style={styles.salary}>15,250</Text>
          </View>
          <View style={styles.profile}>
            <Image
              source={require('../img/person.png')}
              style={styles.profile_img}
            />
          </View>
        </View>
      </View>

      <View style={styles.LeaveInfo}>
        <Text style={styles.LText}>Leave Report</Text>
        <View style={styles.leaveInfo}>
          <View style={styles.leaveRp}>
            <View style={styles.LItem}>
              <Text style={styles.Ltext}>Leaves Taken</Text>
              <Text style={styles.days}>15 Days</Text>
            </View>
            <View style={styles.LItem}>
              <Text style={styles.Ltext}>Leaves Remaining</Text>
              <Text style={styles.days}>45 Days</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.leaveRpt}>
            <Text style={styles.leaveTxt}>GET REPORT</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.leaveBtn}>
        <Text style={styles.reqLeave}>REQUEST LEAVE</Text>
        <Text style={styles.attRep}>ATTENDENCE REPORT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    padding: '5%',
  },

  welcome: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 20,
    color: '#454545',
  },

  card: {
    height: '30%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: '12%',
    elevation: 45,
    shadowColor: '#656565',
  },

  card_img: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
  },

  report_info: {
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    bottom: '27.2%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  profile_img: {
    height: 80,
    width: 80,
    borderRadius: 150,
  },

  salary: {
    fontSize: 35,
    color: '#757575',
    letterSpacing: 2,
  },

  LeaveInfo: {
    marginTop: '8%',
  },

  LText: {
    fontSize: 35,
    color: '#898989',
  },

  leaveRp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leaveInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 55,
    marginTop: '5%',
    borderRadius: 50,
    elevation: 35,
    shadowColor: '#787878',
  },

  LItem: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Ltext: {
    fontSize: 15,
    color: '#898989',
    marginBottom: '5%',
  },

  days: {
    fontSize: 35,
    color: '#0AA1DD',
  },

  leaveRpt: {
    padding: 15,
    backgroundColor: '#0AA1DD',
    marginTop: '10%',
    borderRadius: 15,
  },

  leaveTxt: {
    color: '#fff',
    fontSize: 25,
  },

  leaveBtn: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  reqLeave: {
    padding: 15,
    backgroundColor: '#0AA1DD',
    marginBottom: '5%',
    fontSize: 20,
    color: '#fff',
    elevation: 10,
    shadowColor: '#0AA1DD',
    borderRadius: 10,
  },

  attRep: {
    fontSize: 25,
    color: '#828282',
  },
});

export default Report;
