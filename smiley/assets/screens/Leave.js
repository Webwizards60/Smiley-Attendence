import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import {SafeAreaView} from 'react-native-safe-area-context';

const Report = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Enter Date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    setShow(false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
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
        <View style={styles.date}>
          <Text style={styles.InputDt}>{text}</Text>
          <TouchableOpacity
            onPress={() => showMode('date')}
            style={styles.dtBtn}>
            <Icon
              style={styles.dtBtnTxt}
              name="calendar"
              size={30}
              color="#0AA1DD"
            />
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="default"
            onChange={onChange}
          />
        )}
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
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: hp(3.5),
  },

  Input: {
    backgroundColor: '#fff',
    borderRadius: wp(1),
    padding: wp(1.5),
    elevation: hp(1.5),
    shadowColor: '#787878',
    marginBottom: hp(1.5),
    marginTop: hp(1.5),
    fontSize: hp(1.8),
    width: wp(80),
    display: 'flex',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },

  text: {
    fontSize: hp(2),
  },

  Main: {
    marginTop: hp('8%'),
  },

  button: {
    backgroundColor: '#0AA1DD',
    padding: wp(2.5),
    marginTop: hp(2.5),
    borderRadius: wp(1),
    elevation: hp(1.5),
    shadowColor: '#0AA1DD',
  },

  btnText: {
    fontSize: hp(2),
    color: '#fff',
  },

  Icon: {
    position: 'absolute',
    top: hp(2.5),
    left: wp(5),
  },

  date: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
  },

  dtBtn: {
    paddingVertical: wp(2),
    paddingHorizontal: hp(1.5),
    borderRadius: wp(1),
    backgroundColor: '#0aa1dd',
    elevation: hp(1.8),
    shadowColor: '#0AA1DD',
  },

  dtBtnTxt: {
    fontSize: hp(2.5),
    color: '#fff',
  },

  InputDt: {
    fontSize: hp(1.5),
    backgroundColor: '#fff',
    elevation: hp(1.5),
    width: wp('55%'),
    paddingVertical: wp(1.0),
    paddingHorizontal: hp(1.5),
    justifyContent: 'center',
    borderRadius: wp(1),
    color: '#858585',
    shadowColor: '#787878',
  },
});

export default Report;
