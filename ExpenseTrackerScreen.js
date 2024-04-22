import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExpenseTrackerScreen = () => {
  const navigation = useNavigation(); // Correctly using the useNavigation hook

  const handleContinue = () => {
    navigation.navigate('DurationSelectionScreen'); // Make sure this matches the name in your Stack Navigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EXPENSE TRACKER</Text>
      {/* The option views can be updated to TouchableOpacity if needed */}
      <View style={styles.optionContainer}>
        <Text style={styles.option}>Track Card Payments</Text>
        <Text style={styles.option}>Monitor Online Spends</Text>
        <Text style={styles.option}>Manage Physical Bills</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  optionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default ExpenseTrackerScreen;
