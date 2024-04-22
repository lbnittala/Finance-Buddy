import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const DurationSelectionScreen = () => {
  const [selectedDate, setSelectedDate] = useState({});
  const navigation = useNavigation();

  const onDurationSelect = () => {
    navigation.navigate('TrendAnalysisScreen'); 
  };

  const onDayPress = (day) => {
    const newSelectedDate = { ...selectedDate };

  // If the date is already selected, unselect it
  if (selectedDate[day.dateString]) {
    delete newSelectedDate[day.dateString];
  } else {
    // If two dates are already selected, do nothing
    if (Object.keys(newSelectedDate).length === 2) {
      return;
    }
    
    // If a range is not selected, add the date to selectedDate
    newSelectedDate[day.dateString] = { selected: true };
  }

  setSelectedDate(newSelectedDate);

  // If two different dates are selected, navigate to TrendAnalysisScreen
  if (Object.keys(newSelectedDate).length === 2) {
    navigation.navigate('TrendAnalysisScreen');
  }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Duration Selection</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text>Past Week</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text>Last Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDurationSelect}>
        <Text style={styles.button}> Custom Range</Text>
      </TouchableOpacity>
      <Calendar
        onDayPress={onDayPress}
        markedDates={selectedDate}
        // Specify any other properties you want to apply to the Calendar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#E0E0E0'
  },
  
});

export default DurationSelectionScreen;
