
import { useState } from 'react'

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native'

import API from '../services/api'

export default function OrderStatusScreen() {

  const [id, setId] = useState("")
  const [order, setOrder] = useState(null)

  const getStatus = async () => {

    // Validation
    if (!id.trim()) {
      Alert.alert(
        "Missing Order ID",
        "Please enter Order ID"
      )
      return
    }

    try {

      const response = await API.get(`/orders/${id}`)

      setOrder(response.data)

    } catch (error) {

      console.log(error)
setOrder(null)
      Alert.alert(
        "Not Found",
        "Order not found"
      )

    }
  }

  return (

    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
      }}
    >

      {/* Heading */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 30
        }}
      >
        Track Order
      </Text>

      {/* Input */}
      <TextInput
        placeholder="Enter Order ID (e.g. ORD1234)"
        value={id}
        onChangeText={setId}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20
        }}
      />

      {/* Button */}
      <TouchableOpacity
        onPress={getStatus}
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 12,
          alignItems: "center"
        }}
      >

        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16
          }}
        >
          Check Status
        </Text>

      </TouchableOpacity>

      {/* Order Details */}
      {
        order && (

          <View
            style={{
              marginTop: 30,
              backgroundColor: "#f2f2f2",
              padding: 20,
              borderRadius: 12,
              gap: 12
            }}
          >

            <Text style={{ fontSize: 16 }}>
              👤 Name: {order.customerName}
            </Text>

            <Text style={{ fontSize: 16 }}>
              📞 Phone: {order.phone}
            </Text>

            <Text style={{ fontSize: 16 }}>
              📦 Item: {order.item}
            </Text>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
               🚚 Status: {order.status}
            </Text>

          </View>

        )
      }

    </View>
  )
}