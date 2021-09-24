import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { Input } from "react-native-elements/dist/input/Input";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        ></Image>
        <Input
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          styles={{
              container:{
                  flex:0
              },textInput:{
                    fontSize:18
              }

          }}
          debounce={800}
          query={{
            key: "AIzaSyDw1dUtxaPtnxId7zXaKd0gZts3GYmAZ4I",
            language: "en",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
