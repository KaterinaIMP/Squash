import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PlayerCoach = () => {
  return (
    <View style={styles.playerCoach}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/555-1.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>1 игрок</Text>
        <Text style={[styles.text1, styles.textFlexBox]}>СОЛО</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={styles.groupShadowBox} />
        <View style={[styles.groupWrapper, styles.parentLayout]}>
          <View style={[styles.parent, styles.parentLayout]}>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
          </View>
        </View>
        <Text style={[styles.text2, styles.textTypo]}>СПРИНГ</Text>
        <Text style={[styles.text3, styles.textTypo]}>2 игрока</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.group, styles.groupLayout]}>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
            <Image
              style={[styles.icon5, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
          </View>
        </View>
        <Text style={[styles.text4, styles.textFlexBox]}>ГРУППА</Text>
        <Text style={[styles.text5, styles.textFlexBox]}>3 игрока</Text>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={styles.groupShadowBox} />
        <View style={[styles.groupFrame, styles.containerLayout]}>
          <View style={[styles.container, styles.containerLayout]}>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
            <Image
              style={[styles.icon5, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
            <Image
              style={[styles.icon9, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/555-1.png")}
            />
          </View>
        </View>
        <Text style={[styles.text6, styles.textFlexBox]}>ГРУППА</Text>
        <Text style={[styles.text5, styles.textFlexBox]}>4 игрока</Text>
      </View>
      <Text style={[styles.text8, styles.textFlexBox]}>СКОЛЬКО ВАС?</Text>
      <View style={styles.playerCoachChild} />
      <Text style={[styles.text9, styles.textFlexBox]}>СКОЛЬКО ВАС?</Text>
      <Image
        style={styles.playerCoachItem}
        resizeMode="cover"
        source={require("../assets/group-851.png")}
      />
      <View style={styles.button}>
        <View style={styles.further} />
        <Text style={[styles.text10, styles.textFlexBox]}>Далее</Text>
        <Image
          style={styles.buttonChild}
          resizeMode="cover"
          source={require("../assets/arrow-12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 450,
    width: 450,
    left: 220,
    position: "absolute",
  },
  iconLayout: {
    height: 137,
    width: 53,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    left: 770,
    height: 450,
    width: 450,
    position: "absolute",
  },
  parentLayout: {
    width: 115,
    height: 137,
    position: "absolute",
  },
  textTypo: {
    left: 102,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_45xl,
    position: "absolute",
  },
  groupLayout: {
    width: 177,
    height: 137,
    position: "absolute",
  },
  containerLayout: {
    width: 239,
    height: 137,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    height: 450,
    width: 450,
    position: "absolute",
  },
  icon: {
    left: 199,
    top: 157,
  },
  text: {
    left: 108,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_45xl,
    top: 322,
  },
  text1: {
    left: 121,
    top: 50,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_45xl,
  },
  rectangleParent: {
    top: 482,
  },
  icon1: {
    left: 0,
    top: 0,
  },
  icon2: {
    left: 62,
    top: 0,
  },
  parent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 168,
    top: 157,
  },
  text2: {
    top: 50,
  },
  text3: {
    top: 322,
  },
  rectangleGroup: {
    top: 482,
  },
  icon5: {
    left: 124,
    top: 0,
  },
  group: {
    left: 0,
    top: 0,
  },
  groupContainer: {
    left: 137,
    top: 157,
  },
  text4: {
    left: 104,
    top: 50,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_45xl,
  },
  text5: {
    left: 86,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_45xl,
    top: 322,
  },
  rectangleContainer: {
    top: 1032,
  },
  icon9: {
    left: 186,
    top: 0,
  },
  container: {
    left: 0,
    top: 0,
  },
  groupFrame: {
    left: 105,
    top: 157,
  },
  text6: {
    left: 107,
    top: 50,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_45xl,
  },
  groupView: {
    top: 1020,
  },
  text8: {
    top: 164,
    left: 368,
    fontSize: 96,
    width: 836,
    height: 183,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  playerCoachChild: {
    top: -5,
    backgroundColor: Color.colorGray_400,
    width: 1440,
    height: 337,
    left: 0,
    position: "absolute",
  },
  text9: {
    top: 139,
    left: 475,
    textTransform: "uppercase",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_45xl,
  },
  playerCoachItem: {
    top: 256,
    left: 609,
    width: 205,
    height: 40,
    position: "absolute",
  },
  further: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGoldenrod_100,
    opacity: 0.9,
    position: "absolute",
    width: "100%",
  },
  text10: {
    top: "18.95%",
    left: "18.42%",
    fontSize: FontSize.size_53xl,
    color: Color.colorGray_400,
    fontFamily: FontFamily.centuryGothic,
  },
  buttonChild: {
    height: "19.25%",
    width: "18.59%",
    top: "40.05%",
    right: "10.84%",
    bottom: "40.7%",
    left: "70.57%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  button: {
    top: 2267,
    left: 430,
    width: 581,
    height: 153,
    position: "absolute",
  },
  playerCoach: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
  },
});

export default PlayerCoach;
