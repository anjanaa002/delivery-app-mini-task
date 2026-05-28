
import { useState } from 'react'

import {
  View,
  TextInput,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native'

import API from '../services/api'

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {

    // Validation
    if (!email || !password) {

      Alert.alert(
        "Missing Fields",
        "Please enter email and password"
      )

      return
    }

    try {

      await API.post('/auth/login', {
        email,
        password
      })

      Alert.alert("Login Successful")

      navigation.navigate("Dashboard")

    } catch (error) {

      Alert.alert(
        "Login Failed",
        "Invalid Credentials"
      )

    }
  }

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff"
      }}
    >

      {/* Heading */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 40
        }}
      >
        Delivery Login
      </Text>

      {/* Email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20
        }}
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 15,
          borderRadius: 10,
          marginBottom: 30
        }}
      />

      {/* Login Button */}
      <TouchableOpacity
        onPress={login}
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
          Login
        </Text>

      </TouchableOpacity>

    </View>
  )
}