import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MyTrainingProgram13 = () => {
  return (
    <View style={styles.myTrainingProgram}>
      <View
        style={[styles.myTrainingProgramChild, styles.rectangleParent1Position]}
      />
      <Text style={[styles.text, styles.textTypo2]}>УРОВЕНЬ СЛОЖНОСТИ</Text>
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.text1, styles.textTypo1]}>{`очень
сложно`}</Text>
        <Image
          style={[styles.groupItem, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-81.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition1]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.text2, styles.textTypo]}>легко</Text>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-73.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.text3, styles.textTypo1]}>{`Средняя
сложность`}</Text>
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-75.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={styles.text4}>Сложно</Text>
        <Image
          style={[styles.starIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-45.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-45.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-45.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-45.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/star-49.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupPosition1]}>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text5, styles.textTypo]}>сложнее</Text>
        </View>
        <Image
          style={[styles.groupChild8, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-166.png")}
        />
      </View>
      <View style={styles.button}>
        <View style={styles.further} />
        <Text style={[styles.text6, styles.textTypo2]}>Далее</Text>
        <Image
          style={[styles.buttonChild, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/arrow-12.png")}
        />
      </View>
      <Image
        style={styles.myTrainingProgramItem}
        resizeMode="cover"
        source={require("../assets/group-85.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParent1Position: {
    left: 0,
    top: 0,
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 450,
    width: 450,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_37xl,
    color: Color.colorWhite,
    textTransform: "uppercase",
    position: "absolute",
  },
  groupChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    top: 480,
    height: 450,
    width: 450,
    position: "absolute",
  },
  textTypo: {
    top: 156,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_37xl,
    textAlign: "left",
    color: Color.colorWhite,
    textTransform: "uppercase",
    position: "absolute",
  },
  groupLayout: {
    left: "15.33%",
    right: "15.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "69.56%",
    height: "9.78%",
    position: "absolute",
    overflow: "hidden",
  },
  groupViewPosition: {
    top: 1030,
    height: 450,
    width: 450,
    position: "absolute",
  },
  groupChildLayout: {
    bottom: "31.16%",
    top: "60%",
    width: "10.14%",
    height: "8.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "22.44%",
    top: "67.78%",
  },
  myTrainingProgramChild: {
    backgroundColor: Color.colorGray_400,
    width: 1440,
    height: 330,
    position: "absolute",
  },
  text: {
    top: 127,
    left: 361,
    fontSize: FontSize.size_45xl,
    color: Color.colorWhite,
    textTransform: "uppercase",
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  groupChildShadowBox: {
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
    height: 450,
    width: 450,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 103,
    left: 99,
  },
  groupItem: {
    top: "63.11%",
    right: "13.11%",
    bottom: "27.11%",
    left: "17.33%",
    width: "69.56%",
    height: "9.78%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  rectangleParent: {
    top: 1580,
    left: 486,
  },
  text2: {
    left: 126,
  },
  groupIcon: {
    bottom: "22.44%",
    top: "67.78%",
  },
  rectangleGroup: {
    left: 218,
  },
  text3: {
    top: 121,
    left: 38,
  },
  groupChild1: {
    top: "65.78%",
    bottom: "24.44%",
  },
  rectangleContainer: {
    left: 218,
  },
  text4: {
    top: 161,
    left: 95,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_37xl,
    textAlign: "left",
    color: Color.colorWhite,
    textTransform: "uppercase",
    position: "absolute",
  },
  starIcon: {
    right: "74.26%",
    left: "15.59%",
  },
  groupChild3: {
    right: "59.37%",
    left: "30.48%",
  },
  groupChild4: {
    right: "44.48%",
    left: "45.37%",
  },
  groupChild5: {
    right: "30.04%",
    left: "59.82%",
  },
  groupChild6: {
    right: "15.37%",
    left: "74.48%",
  },
  groupView: {
    left: 771,
  },
  text5: {
    left: 73,
  },
  rectangleParent1: {
    left: 0,
    top: 0,
  },
  groupChild8: {
    right: "15.33%",
    left: "15.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "69.56%",
    height: "9.78%",
  },
  groupParent: {
    left: 778,
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
  text6: {
    top: "18.95%",
    left: "18.42%",
    fontSize: FontSize.size_53xl,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  buttonChild: {
    height: "19.25%",
    width: "18.59%",
    top: "40.05%",
    right: "10.84%",
    bottom: "40.7%",
    left: "70.57%",
  },
  button: {
    marginLeft: -290,
    top: 2269,
    left: "50%",
    width: 581,
    height: 153,
    position: "absolute",
  },
  myTrainingProgramItem: {
    top: 246,
    left: 594,
    width: 205,
    height: 40,
    position: "absolute",
  },
  myTrainingProgram: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyTrainingProgram13;
