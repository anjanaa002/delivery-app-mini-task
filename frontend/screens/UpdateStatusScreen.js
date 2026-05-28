
import {
  View,
  Text,
  TouchableOpacity
} from "react-native"

import API from "../services/api"

export default function UpdateStatusScreen({
  route,
  navigation
}) {

  const { id } = route.params

  const updateStatus = async (status) => {

    try {

      await API.put(`/orders/${id}`, {
        status
      })

      alert("Status Updated")

      navigation.goBack()

    } catch (error) {

      console.log(error.message)

      alert(
        error.response?.data?.message ||
        "Update Failed"
      )

    }
  }

  return (

    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "white"
      }}
    >

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 30
        }}
      >
        Update Order Status
      </Text>

      {/* Accepted */}
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
          alignItems: "center"
        }}
        onPress={() =>
          updateStatus("Accepted")
        }
      >

        <Text
          style={{
            color: "white",
            fontWeight: "bold"
          }}
        >
          Accepted
        </Text>

      </TouchableOpacity>

      {/* Out for Delivery */}
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
          alignItems: "center"
        }}
        onPress={() =>
          updateStatus("Out for Delivery")
        }
      >

        <Text
          style={{
            color: "white",
            fontWeight: "bold"
          }}
        >
          Out for Delivery
        </Text>

      </TouchableOpacity>

      {/* Delivered */}
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 10,
          alignItems: "center"
        }}
        onPress={() =>
          updateStatus("Delivered")
        }
      >

        <Text
          style={{
            color: "white",
            fontWeight: "bold"
          }}
        >
          Delivered
        </Text>

      </TouchableOpacity>

    </View>
  )
}