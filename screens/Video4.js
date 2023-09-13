import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Video4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.video}>
      <View style={styles.videoChild} />
      <Text style={styles.text}>Драйв-боуст</Text>
      <Image
        style={styles.videoItem}
        resizeMode="cover"
        source={require("../assets/group-52.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Video5")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-511.png")}
        />
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Video3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-53.png")}
        />
      </Pressable>
      <Image
        style={[styles.videoInner, styles.videoLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-231.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.videoChild1, styles.videoLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.videoChild2, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoLayout: {
    height: 40,
    width: 40,
    left: 126,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 125,
    height: 40,
    width: 40,
    position: "absolute",
  },
  videoChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray,
    width: 1440,
    position: "absolute",
    height: 2560,
  },
  text: {
    top: 51,
    left: 186,
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    textAlign: "left",
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  videoItem: {
    top: 1121,
    left: 506,
    width: 427,
    height: 432,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.67%",
    width: "5.83%",
    top: "90.04%",
    right: "8.19%",
    bottom: "6.29%",
    left: "85.97%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 111,
    top: 2283,
    width: 88,
    height: 120,
    position: "absolute",
  },
  container: {
    left: 1290,
    top: 69,
    width: 69,
    height: 67,
    position: "absolute",
  },
  videoInner: {
    top: 1451,
  },
  ellipseIcon: {
    top: 1186,
  },
  videoChild1: {
    top: 1755,
  },
  videoChild2: {
    top: 925,
  },
  video: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    height: 2560,
    width: "100%",
  },
});

export default Video4;
