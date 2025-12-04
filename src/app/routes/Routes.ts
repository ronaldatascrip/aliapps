import React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigation: any = React.createRef();

export const navigationDrawer: any = React.createRef();

const navigate = (routeName: any, params: any = {}) => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.navigate(routeName, params);
};

const reset = (routeName: any, params: any = {}) => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.reset({
    index: 0,
    routes: [{ name: routeName, params }],
  });
};

const back = () => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.goBack();
};

const replace = (routeName: any, params: any = {}) => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.dispatch(StackActions.replace(routeName, params));
};

const push = (routeName: any, params: any = {}) => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.dispatch(StackActions.push(routeName, params));
};

const pop = (step = 1) => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.dispatch(StackActions.pop(step));
};

const popToTop = () => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }
  navigation.current.dispatch(StackActions.popToTop());
};

const Route = {
  // Screen
  Auth: 'auth',
  Beranda: 'beranda',
  DetailTodo: 'detail_todo',

  // Export Function
  navigate,
  reset,
  back,
  replace,
  push,
  pop,
  popToTop,
};

export default Route;
