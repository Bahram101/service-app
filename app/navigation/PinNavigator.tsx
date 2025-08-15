import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EnterPin from '@/components/screens/Pin/EnterPin'

const Stack = createNativeStackNavigator()

const PinNavigator = ({ onPinSuccess }: { onPinSuccess: () => void }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EnterPin">
        {props => <EnterPin {...props} onSuccess={onPinSuccess} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default PinNavigator
