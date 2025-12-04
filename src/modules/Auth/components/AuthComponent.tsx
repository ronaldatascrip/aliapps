import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Route from '../../../app/routes/Routes';

const AuthComponent = ({
  username,
  password,
  onUsernameChange: setUsername,
  onPasswordChange: setPassword,
  isRegistered,
  onRegisterChange: setIsRegistered,
  onSubmit,
  loading,
  error,
}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistered ? 'Login' : 'Register'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>
          {loading ? 'Loading...' : isRegistered ? 'Login' : 'Register'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Route.navigate(Route.Beranda)}
      >
        <Text style={styles.buttonText}>By Pass</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsRegistered(!isRegistered)}>
        <Text style={styles.link}>
          {isRegistered
            ? 'Belum punya akun? Register'
            : 'Sudah punya akun? Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AuthComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0066ff',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#0066ff',
    fontWeight: '500',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
