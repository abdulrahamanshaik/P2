import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Snackbar} from 'react-native-paper';
import {Context} from '../../../Components/ContextApi';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {isDarkMode} = Context();

  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleSubmit = () => {
    if (!firstName || !companyName || !email) {
      onToggleSnackBar();
      return;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={[styles.container, isDarkMode && styles.container_darkmode]}>
        <Text style={[styles.title, isDarkMode && styles.title_darkmode]}>
          Contact Us
        </Text>
        <TextInput
          label="First Name *"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <TextInput
          label="Company Name *"
          value={companyName}
          onChangeText={text => setCompanyName(text)}
        />
        <TextInput
          label="Email *"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <Button
          // icon="camera"
          mode="contained"
          buttonColor="#cc0404"
          // textColor="#000"
          onPress={() => handleSubmit()}>
          Submit
        </Button>
        <Snackbar
          // style={styles.snackbar}
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Dismiss',
          }}>
          Please enter all required details
        </Snackbar>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  container_darkmode: {
    backgroundColor: '#222020',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  title_darkmode: {
    color: 'white',
  },
});
