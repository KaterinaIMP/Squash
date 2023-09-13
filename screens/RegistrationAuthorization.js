import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RegistrationAuthorization = () => {
  return (
    <View style={styles.registrationAuthorization}>
      <Image
        style={[styles.image6Icon, styles.buttonPosition]}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.buttonauthorization, styles.buttonLayout]}>
        <View style={[styles.button, styles.buttonLayout]}>
          <View style={styles.further} />
          <Text style={[styles.authorization, styles.registrationTypo]}>
            {" "}
            АВТОРИЗАЦИЯ
          </Text>
          <Image
            style={styles.buttonChild}
            resizeMode="cover"
            source={require("../assets/arrow-13.png")}
          />
        </View>
      </View>
      <View style={[styles.buttonregistration, styles.buttonLayout]}>
        <View style={[styles.button, styles.buttonLayout]}>
          <View style={styles.further} />
          <Text style={[styles.authorization, styles.registrationTypo]} />
          <Image
            style={styles.buttonChild}
            resizeMode="cover"
            source={require("../assets/arrow-13.png")}
          />
        </View>
        <Text style={[styles.registration, styles.registrationTypo]}>
          РЕГИСТРАЦИЯ
        </Text>
      </View>
      <Image
        style={[styles.twitter1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/twitter-1.png")}
      />
      <Image
        style={[styles.facebookIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/facebook.png")}
      />
      <Image
        style={styles.googleIcon}
        resizeMode="cover"
        source={require("../assets/google.png")}
      />
      <View style={[styles.pridelogo, styles.circleLayout]}>
        <View style={[styles.circle, styles.circleLayout]} />
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: 0,
    top: 0,
  },
  buttonLayout: {
    height: 153,
    width: 904,
    position: "absolute",
  },
  registrationTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_53xl,
    position: "absolute",
  },
  iconLayout: {
    height: 138,
    width: 138,
    top: 2278,
    position: "absolute",
  },
  circleLayout: {
    height: 1516,
    width: 1516,
    position: "absolute",
  },
  image6Icon: {
    width: 1440,
    position: "absolute",
    height: 2560,
  },
  further: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    opacity: 0.9,
    backgroundColor: Color.bleackstrong,
    position: "absolute",
    width: "100%",
  },
  authorization: {
    top: "18.95%",
    left: "18.42%",
  },
  buttonChild: {
    width: "18.24%",
    top: "49.67%",
    right: "11.19%",
    left: "70.57%",
    maxWidth: "100%",
    height: 0,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  button: {
    left: 0,
    top: 0,
  },
  buttonauthorization: {
    top: 2009,
    left: 268,
    width: 904,
  },
  registration: {
    top: 32,
    left: 202,
  },
  buttonregistration: {
    top: 1788,
    left: 268,
    width: 904,
  },
  twitter1Icon: {
    left: 965,
  },
  facebookIcon: {
    marginLeft: -69,
    left: "50%",
  },
  googleIcon: {
    left: 336,
    width: 139,
    height: 140,
    top: 2278,
    position: "absolute",
  },
  circle: {
    borderRadius: Border.br_798xl,
    opacity: 0.4,
    backgroundColor: Color.bleackstrong,
    left: 0,
    top: 0,
  },
  logoIcon: {
    top: 160,
    left: 160,
    width: 1197,
    height: 1197,
    position: "absolute",
  },
  pridelogo: {
    top: 80,
    left: -38,
  },
  registrationAuthorization: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    height: 2560,
    width: "100%",
  },
});

export default RegistrationAuthorization;
