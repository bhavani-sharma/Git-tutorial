

import Login from './Login';
import Regitser from './Regitser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Regitser" component={Regitser} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}


