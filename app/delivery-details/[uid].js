import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { COLORS, SIZES, icons } from "../../constants";

import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import {
  ScreenHeaderBtn,
  Specifics,
  DeliveryTabs,
  Details,
} from "../../components";
import { useCallback, useState } from "react";

import useFetch from "../../hook/useFetch";

const tabs = ["Suppléments", "Le bon", "Photos"];

const DeliveryDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { /*data,*/ isLoading, error, refetch } = useFetch("deliveries", {
    uid: params.uid,
  });

  const data = [
    {
      delivery_id: 3354,
      delivery_uid: "8aded59b-fe76-4068-805c-387c8b12923f",
      delivery_reference: "32457340",
      delivery_addresse: "4 clos de la motte louvet",
      delivery_city: "GOUVIEUX",
      delivery_postcode: "60270",
      delivery_note:
        "Merci de livrer la Hotte WISE90BK + le filtre 18909 au nom de Deverweraere (voir mon mail du 16/06/22)\r\net sortir du bloc NOB pour stock la hotte BELTBFL80 pos. 15",
      magasin_name: "AVIVA ST MAXIMIN",
      magasin_short_name: "ASM",
      client_address: "4 clos de la motte louvet",
      client_city: "GOUVIEUX",
      client_postcode: "60270",
      person_gender: "Mme.",
      person_prenom: "Sylvie",
      person_nom: "BANGUIO",
      person_mobile: "(+33) 669-565-451",
      person_email: "sbanguio@gmail.com",
      event_description: "4 clos de la motte louvet 60270 GOUVIEUX",
      event_title: "BANGUIO Sylvie",
      event_classname: "#007bff",
      home_appliances: [
        {
          electromenager_stock_id: 3066,
          electromenager_id: 5,
          electromenager_name: "Mitigeur",
          electromenager_reference: "LUISINA RC406/DO015",
          electromenager_quantity: 1,
          electromenager_is_delivered: null,
        },
        {
          electromenager_stock_id: 3067,
          electromenager_id: 4,
          electromenager_name: "Evier",
          electromenager_reference: "FRANKE 151756",
          electromenager_quantity: 1,
          electromenager_is_delivered: null,
        },
        {
          electromenager_stock_id: 3068,
          electromenager_id: 20,
          electromenager_name: "Plan de travail",
          electromenager_reference: "FIDELEM",
          electromenager_quantity: 1,
          electromenager_is_delivered: null,
        },
      ],
      delivery_filename:
        "C:\\wamp64\\www\\ndg\\storage\\app/delivery/2022-09-26_pWxlgAkm7zylyWIW.pdf",
      delivery_filename_ext: "pdf",
    },
  ];

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Le bon":
        return <Specifics title="Le bon" points={["N/A"]} />;

      case "Suppléments":
        return <Specifics title="Les Suppléments" points={["N/A"]} />;

      case "Photos":
        return <Specifics title="Les photos" points={["N/A"]} />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),

          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),

          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Details
                deliveryRef={data[0].delivery_postcode}
                client={data[0].event_title}
                storeName={data[0].magasin_name}
                mobile={data[0].person_mobile}
                title="Livraison"
              />

              <DeliveryTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default DeliveryDetails;
