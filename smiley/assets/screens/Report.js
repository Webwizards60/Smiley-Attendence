import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
          </View>
          <TouchableOpacity style={styles.leaveRpt}>
            <Text style={styles.leaveTxt}>GET REPORT</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.leaveBtn}>
        <Text
          style={styles.reqLeave}
          onPress={() => navigation.navigate('Leave')}>
          REQUEST LEAVE
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: hp('110%'),
    width: wp('100%'),
    backgroundColor: '#fff',
    padding: wp('5%'),
  },

  welcome: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: hp(2),
    color: '#454545',
  },

  card: {
    height: hp('30%'),
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: wp(2.5),
    marginTop: hp('5%'),
    elevation: hp(4.5),
    shadowColor: '#656565',
  },

  card_img: {
    height: '100%',
    width: '100%',
    borderRadius: wp(2.5),
  },

  report_info: {
    height: '39%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    bottom: '27.2%',
    borderBottomRightRadius: wp(2.5),
    borderBottomLeftRadius: wp(2.5),
    paddingVertical: wp(1.5),
    paddingHorizontal: hp(2),
  },

  profile_img: {
    height: hp(8),
    width: hp(8),
    borderRadius: wp(15),
  },

  salary: {
    fontSize: hp(3.5),
    color: '#757575',
    letterSpacing: wp(0.5),
  },

  LeaveInfo: {
    marginTop: hp('8%'),
  },

  LText: {
    fontSize: hp(3.5),
    color: '#898989',
  },

  leaveRp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leaveInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: hp(3.5),
    marginTop: '5%',
    borderRadius: wp(5),
    elevation: hp(3.5),
    shadowColor: '#787878',
  },

  LItem: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Ltext: {
    fontSize: hp(2.5),
    color: '#898989',
    marginBottom: '5%',
  },

  days: {
    fontSize: hp(3.5),
    color: '#0AA1DD',
  },

  leaveRpt: {
    padding: hp(1.5),
    backgroundColor: '#0AA1DD',
    marginTop: '10%',
    borderRadius: wp(1.5),
  },

  leaveTxt: {
    color: '#fff',
    fontSize: hp(2.5),
  },

  leaveBtn: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  reqLeave: {
    padding: hp(1.5),
    backgroundColor: '#0AA1DD',
    marginBottom: '5%',
    fontSize: hp(2),
    color: '#fff',
    elevation: hp(1),
    shadowColor: '#0AA1DD',
    borderRadius: wp(1),
  },
});

export default Report;
