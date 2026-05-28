

import { useEffect, useState } from 'react'
import { useIsFocused } from "@react-navigation/native"

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import API from '../services/api'

export default function DeliveryDashboard({ navigation }) {

  const [orders, setOrders] = useState([])
  const isFocused = useIsFocused()

  // Logout
  const logout = () => {

    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }]
    })

  }

  // Fetch orders
  const fetchOrders = async () => {

    try {

      const response = await API.get('/orders')

      setOrders(response.data)

    } catch (error) {

      console.log(
        "Error fetching orders:",
        error.message
      )

    }
  }

  // Refresh when screen focused
  useEffect(() => {

    fetchOrders()

  }, [isFocused])

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}
    >

     

      {/* Orders */}
      <ScrollView style={{ padding: 20 }}>

        {
          orders.map((order) => (

            <View
              key={order._id}
              style={{
                backgroundColor: "#f5f5f5",
                padding: 20,
                borderRadius: 15,
                marginBottom: 20
              }}
            >

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                {order.customerName}
              </Text>

              <Text style={{ marginBottom: 5 }}>
                📞 {order.phone}
              </Text>

              <Text style={{ marginBottom: 5 }}>
               📦 {order.item}
              </Text>

              <Text
                style={{
                  marginBottom: 15,
                  fontWeight: "bold"
                }}
              >
                 🚚 {order.status}
              </Text>

              <TouchableOpacity
                disabled={order.status === "Delivered"}
                onPress={() =>
                  navigation.navigate(
                    "UpdateStatus",
                    { id: order._id }
                  )
                }
                style={{
                  backgroundColor:
                    order.status === "Delivered"
                      ? "#999"
                      : "black",

                  padding: 12,
                  borderRadius: 10,
                  alignItems: "center"
                }}
              >

                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  {
                    order.status === "Delivered"
                      ? "Delivered"
                      : "Update Status"
                  }
                </Text>

              </TouchableOpacity>

            </View>

          ))
        }

      </ScrollView>

    </View>
  )
}