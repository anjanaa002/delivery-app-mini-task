
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default function CustomerHome({ navigation }) {

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
      }}
    >

      {/* Main Content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          gap: 20
        }}
      >

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30
          }}
        >
          Delivery App
        </Text>

        {/* Place Order */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PlaceOrder")}
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

        {/* Check Status */}
        <TouchableOpacity
          onPress={() => navigation.navigate("OrderStatus")}
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
            View Order Status
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}