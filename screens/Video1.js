import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Video1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.video}>
      <View style={[styles.videoChild, styles.videoChildPosition]} />
      <Image
        style={styles.videoItem}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.videoInner}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-54.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <View style={[styles.rectangleView, styles.videoChildPosition]} />
      <Text style={[styles.text, styles.textTypo]}>
        Драйв-драйв-драйв-слета драв- драйв назад- драйв
      </Text>
      <Text
        style={[styles.text1, styles.textTypo]}
      >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется бьющим игроком паралельно одной из боковых стен корта в его заднюю часть.
Драйв может наноситься с любой части корта (передней, центральной задней). Это основной удар в игре.
`}</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={styles.polygonIcon}
        resizeMode="cover"
        source={require("../assets/polygon-5.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("MyTrainingProgram2")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={styles.videoChild1}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <Text style={[styles.drive, styles.textTypo]}>DRIVE</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("MyTrainingProgram5")}
      >
        <View style={styles.furtherPosition}>
          <LinearGradient
            style={[styles.further, styles.furtherPosition]}
            locations={[0.06, 0.53, 1]}
            colors={["#f39b16", "#f7ab39", "#fbc66f"]}
            useAngle={true}
            angle={-28.09}
          />
          <Text style={[styles.text2, styles.textTypo]}>Удалить</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  videoChildPosition: {
    width: 1440,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 108,
    width: 42,
    top: 2104,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  furtherPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  videoChild: {
    top: 0,
    backgroundColor: Color.colorGray_400,
    height: 330,
  },
  videoItem: {
    top: 81,
    left: 44,
    width: 279,
    height: 284,
    position: "absolute",
  },
  videoInner: {
    top: 147,
    left: 152,
    width: 63,
    height: 37,
    position: "absolute",
  },
  groupIcon: {
    height: "1.95%",
    width: "24.31%",
    top: "84.45%",
    right: "55.49%",
    bottom: "13.59%",
    left: "20.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    left: 157,
  },
  icon1: {
    left: 109,
  },
  rectangleView: {
    top: 330,
    backgroundColor: Color.colorDarkslategray,
    height: 871,
  },
  text: {
    top: 1096,
    left: 77,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  text1: {
    top: 1240,
    left: 72,
    fontSize: FontSize.size_41xl,
    width: 1298,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  ellipseIcon: {
    top: 554,
    left: 503,
    width: 427,
    height: 432,
    position: "absolute",
  },
  polygonIcon: {
    top: 672,
    left: 696,
    width: 73,
    height: 84,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "87.92%",
    top: "15.23%",
    right: "5.56%",
    bottom: "81.48%",
    width: "6.53%",
    height: "3.28%",
    position: "absolute",
  },
  videoChild1: {
    top: 1070,
    left: 1246,
    width: 120,
    height: 88,
    position: "absolute",
  },
  drive: {
    top: 130,
    left: 358,
    fontSize: FontSize.size_46xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  further: {
    borderRadius: Border.br_57xl_5,
    opacity: 0.9,
    backgroundColor: "transparent",
  },
  text2: {
    top: "20.92%",
    left: "25.47%",
    fontSize: FontSize.size_53xl,
    color: Color.bleackstrong,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  button: {
    top: 2343,
    left: 99,
    width: 581,
    height: 153,
    position: "absolute",
  },
  video: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
  },
});

export default Video1;
