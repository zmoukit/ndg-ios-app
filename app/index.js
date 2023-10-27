import { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Text, Image } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES, images } from "../constants";
import { ScreenHeaderBtn, Welcome, Deliveries } from "../components";
import Login from "../components/login/Login";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    AsyncStorage.getItem("authToken").then((token) => {
      if (token) {
        // User is authenticated, navigate to the Home screen
        setIsAuthenticated(true);
      }
    });
  }, [isAuthenticated]);

  console.log("isAuthenticated", isAuthenticated);

  let screen = (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),

          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.user} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Deliveries />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  if (!isAuthenticated) {
    screen = <Login />;
  }

  return screen;
};

export default Home;
