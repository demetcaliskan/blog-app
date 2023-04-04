import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from './src/context/BlogContext'

import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'

import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blogs' }}>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <Feather name='plus' size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name='Show' component={ShowScreen} />
          <Stack.Screen name='Create' component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
