import React from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import logo from '../img/cup.png';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../navigator/authpro';

function Home({navigation}, props) {
  const {logout} = React.useContext(AuthContext);
  // sir object id ko yaha import kar ligiyega aur qr code ready ho jayega
  // mereko thoda dikkat ho raha tha email le ke aane me .
  const input = 'Smiley Drinks .co';

  return (
    <View style={styles.homeScreen}>
      <TouchableOpacity style={styles.logout_sec} onPress={() => logout()}>
        <Icon name="arrow-right" size={25} color="#0AA1DD" />
        <Text style={styles.logout_txt}>LOGOUT</Text>
      </TouchableOpacity>
      <View style={styles.profilesec}>
        <Image style={styles.profile} source={require('../img/person.png')} />
        <View style={styles.emp_det}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.desig}>Employee</Text>
        </View>
      </View>
      <View style={styles.qrSec}>
        <View style={styles.qrContainer}>
          <QRCode
            value={input}
            size={hp(35)}
            style={styles.qrCode}
            logo={logo}
            logoBorderRadius={wp(5)}
            logoBackgroundColor="#0AA1DD"
          />
        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navMenu}>
          <Text>
            <Icon
              name="user"
              size={30}
              color="#0AA1DD"
              onPress={() => navigation.navigate('Profile')}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home}>
          <Text>
            <Icon name="home" size={25} color="#fff" />
          </Text>
          <Text style={styles.homeTxt}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navMenu}>
          <Text>
            <Icon
              name="file"
              size={30}
              color="#0AA1DD"
              onPress={() => navigation.navigate('Report')}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    width: wp('100%'),
    height: hp('110%'),
    backgroundColor: '#fff',
  },
  logout_sec: {
    paddingVertical: hp('2.5%'),
    width: wp('27%'),
    paddingHorizontal: wp('2.5%'),
    backgroundColor: '#f0faff',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    borderRadius: wp(1.5),
    marginRight: wp('2.5%'),
    marginTop: hp('2.5%'),
  },
  qrSec: {
    width: wp('100%'),
    alignItems: 'center',
  },
  logout_txt: {
    fontSize: hp(1.8),
    color: '#0aa1dd',
    fontWeight: '500',
  },
  profilesec: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
    backgroundColor: '#f0faff',
    marginHorizontal: wp('10%'),
    paddingVertical: wp('5%'),
    borderRadius: wp(2.5),
  },
  profile: {
    height: hp(12),
    width: hp(12),
    borderRadius: wp(2.5),
  },
  name: {
    fontSize: hp(3.5),
    fontWeight: '500',
  },
  emp_det: {
    marginLeft: wp('5%'),
  },
  desig: {
    fontSize: hp(2.0),
    fontWeight: '300',
  },
  qrContainer: {
    height: hp(42),
    width: hp(42),
    borderRadius: wp(5.0),
    backgroundColor: '#fff',
    elevation: hp(3.5),
    shadowColor: '#8c8c8c',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('8%'),
  },
  navBar: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    marginHorizontal: hp(5.5),
    height: hp(8.5),
    borderRadius: wp(2.5),
    elevation: hp(1.5),
    shadowColor: '#696969',
  },
  navMenu: {
    alignItems: 'center',
  },
  navItem: {
    fontSize: hp(1.5),
    color: '#0AA1DD',
  },
  home: {
    backgroundColor: '#0AA1DD',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(8),
    width: hp(8),
    borderRadius: wp(10),
    top: hp('-3%'),
    elevation: hp(1.5),
    shadowColor: '#006691',
  },
  homeTxt: {
    fontSize: hp(1.5),
    color: '#fff',
    fontWeight: '550',
  },
});

export default Home;
