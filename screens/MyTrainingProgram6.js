import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MyTrainingProgram6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTrainingProgram}>
      <View style={[styles.myTrainingProgramInner, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Text style={[styles.drive, styles.boustLayout]}>
            DRIVE - прямой удар
          </Text>
          <Text
            style={[styles.text, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </View>
      <Text style={[styles.drop, styles.boustLayout]}>DROP- легкий удар</Text>
      <View style={[styles.boustWrapper, styles.boustLayout]}>
        <Text style={[styles.boust, styles.boustLayout]}>
          BOUST- от боковой стены
        </Text>
      </View>
      <Image
        style={styles.myTrainingProgramChild}
        resizeMode="cover"
        source={require("../assets/arrow-27.png")}
      />
      <Image
        style={styles.myTrainingProgramItem}
        resizeMode="cover"
        source={require("../assets/arrow-28.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.myTrainingProgramChild1, styles.rectangleViewPosition]}
      />
      <View style={[styles.myTrainingProgramChild2, styles.trainingChildBg]} />
      <View style={styles.myTrainingProgramChild3} />
      <View style={[styles.myTrainingProgramChild4, styles.trainingChildBg]} />
      <View style={[styles.myTrainingProgramChild5, styles.trainingChildBg]} />
      <View style={[styles.myTrainingProgramChild6, styles.trainingChildBg]} />
      <View
        style={[styles.myTrainingProgramChild7, styles.groupChildPosition]}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Image
        style={[styles.arrowIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={[styles.backIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/back2.png")}
      />
      <Image
        style={[styles.backIcon1, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={styles.text1}>ВЫБРАТЬ УПРАЖНЕНИЕ</Text>
      <Text style={[styles.text2, styles.textTypo1]}>все</Text>
      <View
        style={[styles.myTrainingProgramChild8, styles.trainingChildLayout3]}
      />
      <View
        style={[styles.myTrainingProgramChild9, styles.trainingChildLayout3]}
      />
      <View
        style={[styles.myTrainingProgramChild10, styles.trainingChildLayout3]}
      />
      <Text style={[styles.boust1, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust2, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust3, styles.boustTypo]}>BOUST</Text>
      <Image
        style={[styles.starIcon, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild11, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild12, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild13, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild14, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild15, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild16, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild17, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild18, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild19, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild20, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild21, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild22, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild23, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild24, styles.trainingChildLayout2]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <View style={styles.myTrainingProgramChild25} />
      <View style={[styles.plashka, styles.plashkaPosition]} />
      <Image
        style={[styles.backIcon1, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <Text style={[styles.text3, styles.textTypo1]}>избранное</Text>
      <Image
        style={[styles.myTrainingProgramChild27, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-111.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild28, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-298.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild29, styles.trainingChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-142.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild30, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-30.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild31, styles.trainingChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-152.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
          <Text style={[styles.drive, styles.boustLayout]}>
            DRIVE - прямой удар
          </Text>
          <Text
            style={[styles.text, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/1-1000.png")}
          />
        </View>
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupParentLayout]}
        onPress={() => navigation.navigate("Video6")}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <Text style={[styles.drive, styles.boustLayout]}>
            DRIVE - прямой удар
          </Text>
          <Text
            style={[styles.text, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </Pressable>
      <View
        style={[styles.myTrainingProgramChild32, styles.groupChildShadowBox]}
      />
      <Text style={[styles.drive3, styles.text6Position]}>
        DRIVE - прямой удар
      </Text>
      <Text
        style={[styles.text6, styles.text6Position]}
      >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
      <Image
        style={[styles.icon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1-1000.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.groupInnerLayout]}
        resizeMode="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={styles.buttonIcon}
        resizeMode="cover"
        source={require("../assets/button.png")}
      />
      <View style={styles.furtherParent}>
        <LinearGradient
          style={[styles.further, styles.plashkaPosition]}
          locations={[0.06, 0.53, 1]}
          colors={["#f39b16", "#f7ab39", "#fbc66f"]}
          useAngle={true}
          angle={-28.09}
        />
        <Text style={[styles.text7, styles.textTypo2]}>Начать тренировку</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Text style={styles.text8}>
          Ты можешь выбрать упражнение в этом разделе и добавить упражнений из
          других разделов
        </Text>
      </View>
      <Text style={[styles.text9, styles.textTypo]}>Упражнений: 0/4</Text>
      <Text style={[styles.text10, styles.textTypo]}>Понятно</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 394,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  groupChildShadowBox: {
    width: 411,
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
    height: 394,
    position: "absolute",
  },
  boustLayout: {
    width: 518,
    position: "absolute",
  },
  textLayout: {
    height: 113,
    fontSize: FontSize.size_11xl,
  },
  rectangleViewPosition: {
    width: 19,
    left: 1421,
    top: 444,
    position: "absolute",
  },
  trainingChildBg: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  iconLayout3: {
    height: 284,
    width: 279,
    top: 81,
    position: "absolute",
  },
  iconLayout2: {
    height: 37,
    position: "absolute",
  },
  textTypo1: {
    top: 342,
    fontSize: FontSize.size_46xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  trainingChildLayout3: {
    height: 13,
    width: 15,
    left: 1278,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  boustTypo: {
    width: 168,
    top: 2187,
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_29xl,
    position: "absolute",
  },
  trainingChildLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    position: "absolute",
    overflow: "hidden",
  },
  plashkaPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  trainingChildPosition: {
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  trainingChildLayout: {
    width: "3.67%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 108,
    width: 42,
    top: 2139,
    position: "absolute",
  },
  iconLayout: {
    height: 42,
    width: 45,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 56,
    width: 60,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  text6Position: {
    left: 548,
    width: 518,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  groupLayout: {
    height: 419,
    width: 1300,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_41xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  drive: {
    top: 55,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    fontSize: FontSize.size_29xl,
    left: 471,
    width: 518,
  },
  text: {
    top: 146,
    width: 518,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    left: 471,
  },
  rectangleParent: {
    height: 394,
    position: "absolute",
    width: 989,
  },
  myTrainingProgramInner: {
    top: 1946,
    width: 989,
    height: 394,
    left: 77,
  },
  drop: {
    top: 2429,
    left: 123,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    fontSize: FontSize.size_29xl,
  },
  boust: {
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    fontSize: FontSize.size_29xl,
    left: 0,
    top: 0,
  },
  boustWrapper: {
    top: 2428,
    left: 797,
    height: 51,
  },
  myTrainingProgramChild: {
    top: 2192,
    left: 1086,
    width: 94,
    height: 168,
    position: "absolute",
  },
  myTrainingProgramItem: {
    top: 2110,
    left: 944,
    width: 230,
    height: 74,
    position: "absolute",
  },
  rectangleView: {
    height: 1980,
    backgroundColor: Color.colorDarkslategray,
    width: 19,
    left: 1421,
  },
  myTrainingProgramChild1: {
    height: 662,
    backgroundColor: Color.colorGoldenrod_100,
  },
  myTrainingProgramChild2: {
    top: 2160,
    left: 973,
    width: 324,
    height: 107,
  },
  myTrainingProgramChild3: {
    width: 203,
    height: 185,
    left: 70,
    top: 81,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild4: {
    top: 88,
    left: 104,
    width: 169,
    height: 168,
  },
  myTrainingProgramChild5: {
    top: 2197,
    left: 988,
    width: 321,
    height: 53,
  },
  myTrainingProgramChild6: {
    top: 2210,
    left: 966,
    width: 343,
    height: 57,
  },
  myTrainingProgramChild7: {
    backgroundColor: Color.colorGray_400,
    width: 1440,
    height: 444,
    position: "absolute",
  },
  ellipseIcon: {
    left: 37,
  },
  arrowIcon: {
    top: 147,
    left: 145,
    width: 63,
  },
  backIcon: {
    top: 2200,
    width: 54,
    left: 1270,
  },
  backIcon1: {
    left: 1146,
  },
  text1: {
    top: 125,
    left: 360,
    fontSize: FontSize.size_46xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  text2: {
    left: 302,
  },
  myTrainingProgramChild8: {
    top: 129,
  },
  myTrainingProgramChild9: {
    top: 159,
  },
  myTrainingProgramChild10: {
    top: 189,
  },
  boust1: {
    left: 276,
  },
  boust2: {
    left: 726,
  },
  boust3: {
    left: 1167,
  },
  starIcon: {
    right: "69.87%",
    left: "27.7%",
  },
  myTrainingProgramChild11: {
    right: "38.62%",
    left: "58.95%",
  },
  myTrainingProgramChild12: {
    right: "8%",
    left: "89.57%",
  },
  myTrainingProgramChild13: {
    right: "73.27%",
    left: "24.3%",
  },
  myTrainingProgramChild14: {
    right: "42.02%",
    left: "55.55%",
  },
  myTrainingProgramChild15: {
    right: "11.4%",
    left: "86.17%",
  },
  myTrainingProgramChild16: {
    right: "76.61%",
    left: "20.96%",
  },
  myTrainingProgramChild17: {
    right: "45.36%",
    left: "52.21%",
  },
  myTrainingProgramChild18: {
    right: "14.73%",
    left: "82.84%",
  },
  myTrainingProgramChild19: {
    right: "79.94%",
    left: "17.63%",
  },
  myTrainingProgramChild20: {
    right: "48.69%",
    left: "48.88%",
  },
  myTrainingProgramChild21: {
    right: "18.07%",
    left: "79.5%",
  },
  myTrainingProgramChild22: {
    right: "83.2%",
    left: "14.37%",
  },
  myTrainingProgramChild23: {
    right: "51.95%",
    left: "45.62%",
  },
  myTrainingProgramChild24: {
    right: "21.33%",
    left: "76.24%",
  },
  myTrainingProgramChild25: {
    width: 720,
    height: 6,
    backgroundColor: Color.colorGoldenrod_100,
    top: 444,
    left: 0,
    position: "absolute",
  },
  plashka: {
    height: "17.62%",
    top: "100%",
    bottom: "-17.62%",
    backgroundColor: Color.colorGray_300,
  },
  groupIcon: {
    top: 135,
    left: 1244,
    width: 83,
    height: 62,
    position: "absolute",
  },
  text3: {
    left: 904,
  },
  myTrainingProgramChild27: {
    right: "79.59%",
    left: "16.83%",
    width: "3.58%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
  },
  myTrainingProgramChild28: {
    right: "73.76%",
    left: "22.66%",
    width: "3.58%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
  },
  myTrainingProgramChild29: {
    right: "61.9%",
    left: "34.43%",
  },
  myTrainingProgramChild30: {
    width: "3.63%",
    right: "67.84%",
    left: "28.53%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
  },
  myTrainingProgramChild31: {
    right: "55.95%",
    left: "40.37%",
  },
  icon: {
    left: 77,
  },
  icon1: {
    left: 165,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  icon2: {
    top: 155,
    left: 1053,
  },
  rectangleGroup: {
    width: 1098,
    height: 394,
    position: "absolute",
  },
  groupInner: {
    top: 140,
    left: 1193,
  },
  groupParent: {
    top: 526,
    width: 1250,
    left: 70,
  },
  groupChild1: {
    left: 0,
    top: 0,
  },
  groupPressable: {
    top: 996,
    width: 989,
    height: 394,
    left: 77,
  },
  myTrainingProgramChild32: {
    top: 1482,
    left: 77,
  },
  drive3: {
    top: 1537,
    height: 51,
    fontSize: FontSize.size_29xl,
  },
  text6: {
    top: 1628,
    height: 113,
    fontSize: FontSize.size_11xl,
  },
  icon3: {
    top: 1637,
    left: 1130,
  },
  vectorIcon: {
    top: 1622,
    left: 1270,
  },
  buttonIcon: {
    top: 2315,
    left: 442,
    width: 865,
    height: 152,
    position: "absolute",
  },
  further: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_57xl_5,
    opacity: 0.9,
    backgroundColor: "transparent",
  },
  text7: {
    top: "21.05%",
    left: "6.87%",
    fontSize: FontSize.size_53xl,
    color: Color.bleackstrong,
    position: "absolute",
  },
  furtherParent: {
    height: "5.94%",
    width: "54.58%",
    top: "90.43%",
    right: "40.56%",
    bottom: "3.63%",
    left: "4.86%",
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorGoldenrod_100,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: Border.br_31xl,
    height: 419,
    width: 1300,
    left: 0,
    top: 0,
  },
  text8: {
    top: 70,
    width: 1195,
    height: 203,
    fontSize: FontSize.size_41xl,
    color: Color.bleackstrong,
    left: 70,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  groupView: {
    top: 450,
    left: 70,
  },
  text9: {
    top: 2161,
    left: 775,
    color: Color.colorWhite,
  },
  text10: {
    top: 758,
    left: 590,
    width: 271,
    height: 61,
    color: Color.bleackstrong,
  },
  myTrainingProgram: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyTrainingProgram6;
