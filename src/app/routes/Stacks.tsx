import Routes, { navigation } from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AuthContainer from '../../modules/Auth/containers/AuthContainer';
import BerandaContainer from '../../modules/Beranda/containers/BerandaContainer';
import DetailTodoContainer from '../../modules/Beranda/containers/DetailTodoContainer';

// Re-Wrapped Screens
const Auth = AuthContainer;
const Beranda = BerandaContainer;
const DetailTodo = DetailTodoContainer;
// Const :
const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer ref={navigation}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Auth} component={Auth} />
        <Stack.Screen name={Routes.Beranda} component={Beranda} />
        <Stack.Screen name={Routes.DetailTodo} component={DetailTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
