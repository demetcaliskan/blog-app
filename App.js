import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from './src/context/BlogContext'

import IndexScreen from './src/screens/IndexScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blogs' }}>
          <Stack.Screen name='Index' component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
