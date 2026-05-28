// import { NavigationContainer } from '@react-navigation/native'

// import { createNativeStackNavigator }
// from '@react-navigation/native-stack'

// import CustomerHome from './screens/CustomerHome'

// import PlaceOrderScreen from './screens/PlaceOrderScreen'

// import OrderStatusScreen from './screens/OrderStatusScreen'

// import LoginScreen from './screens/LoginScreen'

// import DeliveryDashboard from './screens/DeliveryDashboard'

// import UpdateStatusScreen from './screens/UpdateStatusScreen'

// const Stack = createNativeStackNavigator()

// export default function App() {

//   return (

//     <NavigationContainer>

//       <Stack.Navigator>

//         <Stack.Screen
//           name="Home"
//           component={CustomerHome}
//         />

//         <Stack.Screen
//           name="PlaceOrder"
//           component={PlaceOrderScreen}
//         />

//         <Stack.Screen
//           name="OrderStatus"
//           component={OrderStatusScreen}
//         />

//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//         />

//         <Stack.Screen
//           name="Dashboard"
//           component={DeliveryDashboard}
//         />

//         <Stack.Screen
//           name="UpdateStatus"
//           component={UpdateStatusScreen}
//         />

//       </Stack.Navigator>

//     </NavigationContainer>
//   )
// }

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator }
from '@react-navigation/native-stack'

import CustomerHome from './screens/CustomerHome'

import PlaceOrderScreen from './screens/PlaceOrderScreen'

import OrderStatusScreen from './screens/OrderStatusScreen'

import LoginScreen from './screens/LoginScreen'

import DeliveryDashboard from './screens/DeliveryDashboard'

import UpdateStatusScreen from './screens/UpdateStatusScreen'
import {
  TouchableOpacity,
  Text
} from 'react-native'

//import MyOrdersScreen from "./screens/MyOrdersScreen"

const Stack = createNativeStackNavigator()

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        {/* <Stack.Screen
          name="Home"
          component={CustomerHome}
        /> */}

        <Stack.Screen
  name="Home"
  component={CustomerHome}
  options={({ navigation }) => ({
    headerRight: () => (

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          backgroundColor: "black",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 8
        }}
      >

        <Text
          style={{
            color: "white",
            fontWeight: "bold"
          }}
        >
          Delivery Login
        </Text>

      </TouchableOpacity>

    )
  })}
/>

        <Stack.Screen
          name="PlaceOrder"
          component={PlaceOrderScreen}
          options={{ title: "Order" }}
        />

        <Stack.Screen
          name="OrderStatus"
          component={OrderStatusScreen}
           options={{ title: "Order Status" }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        {/* <Stack.Screen
          name="Dashboard"
          component={DeliveryDashboard}
        /> */}
<Stack.Screen
  name="Dashboard"
  component={DeliveryDashboard}
  options={({ navigation }) => ({

    headerRight: () => (

      <TouchableOpacity
        onPress={() =>

          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }]
          })

        }
        style={{
          backgroundColor: "black",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 8
        }}
      >

        <Text
          style={{
            color: "white",
            fontWeight: "bold"
          }}
        >
          Logout
        </Text>

      </TouchableOpacity>

    )

  })}
/>
        <Stack.Screen
          name="UpdateStatus"
          component={UpdateStatusScreen}
        />

        {/* <Stack.Screen name="MyOrders" component={MyOrdersScreen} /> */}

      </Stack.Navigator>

    </NavigationContainer>
  )
}