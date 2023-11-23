import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
    <View style={styles.container}>
      <Text style={styles.appName}>Your ToDo App</Text>
      <Text style={styles.author}>Author: YourName</Text>
      <Text style={styles.date}>Date: {currentDate}</Text>
    </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
  },
});

export default AboutScreen;