import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function Profit() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
   <SafeAreaView>
    <View>
    <Button onPress={showDatepicker} title="Show date picker!" />
    </View>
      <View style={{marginTop:30}}>
      <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      
      <Text style={{marginTop:20,backgroundColor:"blue",padding:20, color:"white",borderRadius:10}}>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
