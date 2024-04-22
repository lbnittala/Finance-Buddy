import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  // Updated to navigate to 'ExpenseTrackerScreen' regardless of the option selected
  const handleNavigation = () => {
    navigation.navigate('ExpenseTrackerScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FINANCE TRACKER</Text>
      <TouchableOpacity style={styles.option} onPress={handleNavigation}>
      <Image source={require('./assets/profile.png')} style={styles.icon} />
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleNavigation}>
      <Image source={require('./assets/Tracker.png')} style={styles.icon} />
        <Text>Tracker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleNavigation}>
      <Image source={require('./assets/Bill_remainder.png')} style={styles.icon} />
        <Text>Bill Reminders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleNavigation}>
      <Image source={require('./assets/Security.png')} style={styles.icon} />
        <Text>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleNavigation}>
      <Image source={require('./assets/Personalize.png')} style={styles.icon} />
        <Text>Personalize</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleNavigation}>
      <Image source={require('./assets/Trend_analysis.png')} style={styles.icon} />
        <Text>Trend Analysis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleNavigation}>
      <Image source={require('./assets/Peer_Support.png')} style={styles.icon} />
        <Text>Peer Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  option: {
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  icon: {
    width: 30, // Adjust icon size as needed
    height: 30,
    marginRight: 10, // Add spacing between icon and text
  },
});

export default DashboardScreen;
