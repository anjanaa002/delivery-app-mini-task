
import { useState } from 'react'

import {
  View,
  TextInput,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native'

import API from '../services/api'

export default function PlaceOrderScreen() {

  const [customerName, setCustomerName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [item, setItem] = useState("")
  const [orderId, setOrderId] = useState("")

  const placeOrder = async () => {
    // Validation
  if (
    !customerName ||
    !phone ||
    !address ||
    !item
  ) {
    Alert.alert(
      "Missing Fields",
      "Please fill all fields"
    )

    return
  }

    try {

      const response = await API.post('/orders', {
        customerName,
        phone,
        address,
        item
      })

      setOrderId(response.data.orderId)

      Alert.alert(
        "Success",
        "Order Placed! ID: " + response.data.orderId
        
      )

      // Clear fields
      setCustomerName("")
      setPhone("")
      setAddress("")
      setItem("")

    } catch (error) {

      console.log(error)

      Alert.alert("Error", "Order failed")

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

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 30,
          textAlign: "center"
        }}
      >
        Place Your Order
      </Text>

      {/* Customer Name */}
      <TextInput
        placeholder="Customer Name"
        value={customerName}
        onChangeText={setCustomerName}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15
        }}
      />

      {/* Phone */}
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15
        }}
      />

      {/* Address */}
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15
        }}
      />

      {/* Item */}
      <TextInput
        placeholder="Item"
        value={item}
        onChangeText={setItem}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 25
        }}
      />

      {/* Button */}
      <TouchableOpacity
        onPress={placeOrder}
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
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          Place Order
        </Text>
      </TouchableOpacity>

      Order ID
      {/* {
        orderId !== "" && (

          <View
            style={{
              marginTop: 30,
              padding: 15,
              backgroundColor: "#f2f2f2",
              borderRadius: 10
            }}
          >

            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16
              }}
            >
              Your Order ID:
            </Text>

            <Text
              style={{
                marginTop: 5,
                fontSize: 18
              }}
            >
              {orderId}
            </Text>

          </View>

        )
      } */}
{/* Order ID */}
{
  orderId !== "" && (

    <View
      style={{
        marginTop: 30,
        padding: 18,
        backgroundColor: "#f2f2f2",
        borderRadius: 12
      }}
    >

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10
        }}
      >
        ✅ Order Placed Successfully
      </Text>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16
        }}
      >
        Your Order ID:
      </Text>

      <Text
        style={{
          marginTop: 5,
          fontSize: 20,
          fontWeight: "bold"
        }}
      >
        {orderId}
      </Text>

      <Text
        style={{
          marginTop: 12,
          color: "#555",
          lineHeight: 20
        }}
      >
        Please save this Order ID to
        track your order status later.
      </Text>

    </View>

  )
}
    </View>
  )
}