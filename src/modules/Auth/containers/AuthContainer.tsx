import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks';
import { loginUser, registerUser } from '../store/slices/authSlice';
import AuthComponent from '../components/AuthComponent';

const AuthContainer = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.auth);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRegistered, setIsRegistered] = React.useState(false);

  const onSubmit = () => {
    if (isRegistered) {
      dispatch(loginUser({ username, password }));
    } else {
      dispatch(registerUser({ username, password }));
    }
  };

  return (
    <AuthComponent
      username={username}
      password={password}
      isRegistered={isRegistered}
      loading={loading}
      error={error}
      onUsernameChange={setUsername}
      onPasswordChange={setPassword}
      onRegisterChange={setIsRegistered}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
