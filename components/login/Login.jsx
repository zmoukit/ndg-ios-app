import { useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { View, ScrollView, SafeAreaView, Text, Image, Pressable, TextInput, ActivityIndicator, Alert, Button  } from "react-native";
import { Stack } from "expo-router";

import styles from './login.style'
import { COLORS, images } from "../../constants";

import axios from 'axios';
import { getErrorMessagesFromResponse } from "../../utils";
import ErrorModal from "../common/modal/ErrorModal";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState("");

    const showAlert = (title, message) =>
    {
      Alert.alert(
        title,
        message,
        [
          { text: 'OK'},
        ],
        { cancelable: false }
      );
    }

    const handleLogin = async () => {
        try {
            setIsLoading(true);

            const response = await axios.post('https://test.nextdistributiongroup.com/api/v1/login', {
              email,
              password,
            });

            console.log(" RESPONSE ", response.data, response.status);

            // Assuming the response contains a 'token' field
            /*const token = response.data.token;
        
            // Store the token in AsyncStorage
            await AsyncStorage.setItem('token', token);*/

            setIsLoading(false);
        
            // Redirect the user to the home screen
            // You can use navigation libraries like react-navigation for this purpose.
            // Example: navigation.navigate('Home');*/
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
              const errors = getErrorMessagesFromResponse(error.response);
                  setError(errors);

            } else if (error.request) {
              setError(error.response);
            } else {
              setError(error.response);
            }
            setModalVisible(true);
        }
    };

    // ErrorModal
  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.firstChild}>
            {error && <ErrorModal modalVisible={modalVisible} setModalVisible={setModalVisible} content={error} />}
            {/** Logo */}
            <View style={styles.logoContainer}>
              <Image source={images.logo} style={{ borderRadius: 8 }} />
            </View>

            {/** Email */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(email) => setEmail(email)} 
                    placeholder="E-mail"
                />
            </View>

            {/** Password */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(password) => setPassword(password)} 
                    placeholder="Mot de passe"
                    secureTextEntry
                />
            </View>

            {/** Button */}
            {isLoading ? (
              <Pressable style={styles.loginBtn}>
                  <ActivityIndicator size="large" color={COLORS.white} />
              </Pressable>
            ): (
                <Pressable style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Se connecter</Text>
                </Pressable>
            )}
            
          </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default Login