import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ContactPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Contact Page</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContactPage;
 