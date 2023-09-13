import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const MyTrainingProgram7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTrainingProgram}>
      <View style={styles.myTrainingProgramChild} />
      <View
        style={[styles.myTrainingProgramInner, styles.rectangleParentLayout]}
      >
        <View style={[styles.rectangleParent, styles.boustPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text, styles.textLayout1]}>Драйв-драйв</Text>
          <Text
            style={[styles.text1, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </View>
      <Text style={[styles.drop, styles.dropTypo]}>DROP- легкий удар</Text>
      <View style={[styles.boustWrapper, styles.textLayout1]}>
        <Text style={[styles.boust, styles.dropTypo]}>
          BOUST- от боковой стены
        </Text>
      </View>
      <Image
        style={styles.myTrainingProgramItem}
        resizeMode="cover"
        source={require("../assets/arrow-27.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-28.png")}
      />
      <View style={[styles.rectangleView, styles.trainingChildBg]} />
      <View style={[styles.myTrainingProgramChild1, styles.trainingChildBg]} />
      <View style={[styles.myTrainingProgramChild2, styles.trainingChildBg]} />
      <View
        style={[styles.myTrainingProgramChild3, styles.trainingChildPosition1]}
      />
      <View
        style={[styles.myTrainingProgramChild4, styles.trainingChildPosition1]}
      />
      <Image
        style={[styles.backIcon, styles.backIconLayout]}
        resizeMode="cover"
        source={require("../assets/back2.png")}
      />
      <View
        style={[styles.myTrainingProgramChild5, styles.frameViewPosition]}
      />
      <View style={[styles.myTrainingProgramChild6, styles.trainingChildBg]} />
      <View style={[styles.myTrainingProgramChild7, styles.boustPosition]} />
      <Text style={[styles.boust1, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust2, styles.boustTypo]}>BOUST2</Text>
      <Text style={[styles.boust3, styles.boustTypo]}>BOUST</Text>
      <Image
        style={[styles.starIcon, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild8, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild9, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild10, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild11, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild12, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild13, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild14, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild15, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild16, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild17, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild18, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild19, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild20, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild21, styles.trainingChildLayout3]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <View style={styles.plashka} />
      <Image
        style={[styles.myTrainingProgramChild22, styles.backIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={[styles.backIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild23, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-111.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild24, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-298.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild25, styles.trainingChildLayout1]}
        resizeMode="cover"
        source={require("../assets/star-142.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild26, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/star-30.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild27, styles.trainingChildLayout1]}
        resizeMode="cover"
        source={require("../assets/star-152.png")}
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
      <Text style={styles.text2}>ВЫБРАТЬ УПРАЖНЕНИЕ</Text>
      <Text style={[styles.text3, styles.textTypo1]}>все</Text>
      <View
        style={[styles.myTrainingProgramChild28, styles.trainingChildLayout]}
      />
      <View
        style={[styles.myTrainingProgramChild29, styles.trainingChildLayout]}
      />
      <View
        style={[styles.myTrainingProgramChild30, styles.trainingChildLayout]}
      />
      <Text style={[styles.text4, styles.textTypo3]}>Упражнений: 0/4</Text>
      <View style={styles.furtherParent}>
        <LinearGradient
          style={[styles.further, styles.furtherPosition]}
          locations={[0.06, 0.53, 1]}
          colors={["#f39b16", "#f7ab39", "#fbc66f"]}
          useAngle={true}
          angle={-28.09}
        />
        <Text style={[styles.text5, styles.textTypo3]}>Начать тренировку</Text>
      </View>
      <View style={styles.myTrainingProgramChild31} />
      <Image
        style={[styles.backIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <Text style={[styles.text6, styles.textTypo1]}>избранное</Text>
      <Pressable
        style={[styles.groupPressable, styles.frameViewPosition]}
        onPress={() => navigation.navigate("Video6")}
      >
        <View style={[styles.rectangleParent, styles.boustPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text7, styles.textTypo]}>
            Драйв-драйв-драйв-слета драв- драйв назад- драйв
          </Text>
          <Text
            style={[styles.text8, styles.textTypo]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.myTrainingProgramInner1, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Video6")}
      >
        <View style={[styles.rectangleParent, styles.boustPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text, styles.textLayout1]}>Боуст- драйв</Text>
          <Text
            style={[styles.text10, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentLayout]}
        onPress={() => navigation.navigate("Video6")}
      >
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.text, styles.textLayout1]}>Боуст драйв</Text>
        <Text
          style={[styles.text1, styles.textLayout]}
        >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
      </Pressable>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.furtherPosition}>
          <LinearGradient
            style={[styles.further, styles.furtherPosition]}
            locations={[0.06, 0.53, 1]}
            colors={["#9b9894", "#e8e4df", "#e7ddcf"]}
            useAngle={true}
            angle={-28.09}
          />
          <Text style={[styles.text5, styles.textTypo3]}>
            Начать тренировку
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentLayout: {
    height: 394,
    width: 989,
  },
  boustPosition: {
    top: 0,
    left: 0,
  },
  textLayout1: {
    height: 51,
    width: 518,
    position: "absolute",
  },
  textLayout: {
    height: 113,
    fontSize: FontSize.size_11xl,
  },
  dropTypo: {
    fontSize: FontSize.size_29xl,
    height: 51,
    width: 518,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  trainingChildBg: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  trainingChildPosition1: {
    width: 19,
    left: 1421,
    top: 444,
    position: "absolute",
  },
  backIconLayout: {
    height: 37,
    position: "absolute",
  },
  frameViewPosition: {
    left: 70,
    position: "absolute",
  },
  boustTypo: {
    width: 168,
    top: 2187,
    fontSize: FontSize.size_29xl,
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  trainingChildLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 284,
    width: 279,
    top: 81,
    position: "absolute",
  },
  trainingChildPosition: {
    bottom: "12.53%",
    top: "85.7%",
    height: "1.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  trainingChildLayout1: {
    width: "3.67%",
    bottom: "12.53%",
    top: "85.7%",
    height: "1.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 108,
    width: 42,
    top: 2147,
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
  trainingChildLayout: {
    height: 13,
    width: 15,
    left: 1278,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  textTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  furtherPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    color: Color.colorDarkslategray,
    width: 518,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    left: 471,
    position: "absolute",
  },
  myTrainingProgramChild: {
    width: 1421,
    height: 510,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    top: 444,
    position: "absolute",
  },
  groupChildShadowBox: {
    width: 411,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorDarkslategray,
    top: 0,
    height: 394,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    left: 0,
    position: "absolute",
  },
  text: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    top: 55,
    height: 51,
    left: 471,
  },
  text1: {
    top: 146,
    width: 518,
    height: 113,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
    left: 471,
  },
  rectangleParent: {
    height: 394,
    width: 989,
    position: "absolute",
  },
  myTrainingProgramInner: {
    top: 1946,
    left: 77,
    width: 989,
    position: "absolute",
  },
  drop: {
    top: 2429,
    left: 123,
  },
  boust: {
    top: 0,
    left: 0,
  },
  boustWrapper: {
    top: 2428,
    left: 797,
  },
  myTrainingProgramItem: {
    top: 2192,
    left: 1086,
    width: 94,
    height: 168,
    position: "absolute",
  },
  arrowIcon: {
    top: 2110,
    left: 944,
    width: 230,
    height: 74,
    position: "absolute",
  },
  rectangleView: {
    top: 2160,
    left: 973,
    width: 324,
    height: 107,
  },
  myTrainingProgramChild1: {
    top: 2197,
    left: 988,
    width: 321,
    height: 53,
  },
  myTrainingProgramChild2: {
    top: 2210,
    left: 966,
    width: 343,
    height: 57,
  },
  myTrainingProgramChild3: {
    height: 1980,
    backgroundColor: Color.colorDarkslategray,
    width: 19,
    left: 1421,
  },
  myTrainingProgramChild4: {
    height: 662,
    backgroundColor: Color.colorGoldenrod_100,
  },
  backIcon: {
    top: 2200,
    left: 1270,
    width: 54,
  },
  myTrainingProgramChild5: {
    width: 203,
    height: 185,
    top: 81,
    left: 70,
    backgroundColor: Color.colorGainsboro,
  },
  myTrainingProgramChild6: {
    top: 88,
    left: 104,
    width: 169,
    height: 168,
  },
  myTrainingProgramChild7: {
    backgroundColor: Color.colorGray_400,
    width: 1440,
    height: 444,
    position: "absolute",
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
  myTrainingProgramChild8: {
    right: "38.62%",
    left: "58.95%",
  },
  myTrainingProgramChild9: {
    right: "8%",
    left: "89.57%",
  },
  myTrainingProgramChild10: {
    right: "73.27%",
    left: "24.3%",
  },
  myTrainingProgramChild11: {
    right: "42.02%",
    left: "55.55%",
  },
  myTrainingProgramChild12: {
    right: "11.4%",
    left: "86.17%",
  },
  myTrainingProgramChild13: {
    right: "76.61%",
    left: "20.96%",
  },
  myTrainingProgramChild14: {
    right: "45.36%",
    left: "52.21%",
  },
  myTrainingProgramChild15: {
    right: "14.73%",
    left: "82.84%",
  },
  myTrainingProgramChild16: {
    right: "79.94%",
    left: "17.63%",
  },
  myTrainingProgramChild17: {
    right: "48.69%",
    left: "48.88%",
  },
  myTrainingProgramChild18: {
    right: "18.07%",
    left: "79.5%",
  },
  myTrainingProgramChild19: {
    right: "83.2%",
    left: "14.37%",
  },
  myTrainingProgramChild20: {
    right: "51.95%",
    left: "45.62%",
  },
  myTrainingProgramChild21: {
    right: "21.33%",
    left: "76.24%",
  },
  ellipseIcon: {
    left: 37,
  },
  plashka: {
    height: "17.62%",
    top: "100%",
    bottom: "-17.62%",
    backgroundColor: Color.colorGray_300,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  myTrainingProgramChild22: {
    top: 147,
    left: 145,
    width: 63,
  },
  backIcon1: {
    left: 1146,
  },
  myTrainingProgramChild23: {
    right: "78.76%",
    left: "17.66%",
    width: "3.58%",
    bottom: "12.53%",
    top: "85.7%",
    height: "1.77%",
  },
  myTrainingProgramChild24: {
    right: "72.92%",
    left: "23.49%",
    width: "3.58%",
    bottom: "12.53%",
    top: "85.7%",
    height: "1.77%",
  },
  myTrainingProgramChild25: {
    right: "61.07%",
    left: "35.26%",
  },
  myTrainingProgramChild26: {
    width: "3.63%",
    right: "67.01%",
    left: "29.36%",
    bottom: "12.53%",
    top: "85.7%",
    height: "1.77%",
  },
  myTrainingProgramChild27: {
    right: "55.12%",
    left: "41.21%",
  },
  icon: {
    left: 76,
  },
  icon1: {
    left: 164,
  },
  text2: {
    top: 125,
    left: 360,
    fontSize: FontSize.size_46xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  text3: {
    left: 302,
  },
  myTrainingProgramChild28: {
    top: 129,
  },
  myTrainingProgramChild29: {
    top: 159,
  },
  myTrainingProgramChild30: {
    top: 189,
  },
  text4: {
    top: 2181,
    left: 799,
    fontSize: FontSize.size_41xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontWeight: "700",
    position: "absolute",
  },
  further: {
    borderRadius: Border.br_57xl_5,
    opacity: 0.9,
    backgroundColor: "transparent",
  },
  text5: {
    top: "21.05%",
    left: "6.87%",
    fontSize: FontSize.size_53xl,
    color: Color.bleackstrong,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  furtherParent: {
    height: "5.94%",
    width: "54.58%",
    top: "90%",
    right: "40.56%",
    bottom: "4.06%",
    left: "4.86%",
    position: "absolute",
  },
  myTrainingProgramChild31: {
    width: 720,
    height: 6,
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    top: 444,
    position: "absolute",
  },
  groupIcon: {
    top: 135,
    left: 1244,
    width: 83,
    height: 62,
    position: "absolute",
  },
  text6: {
    left: 904,
  },
  text7: {
    height: 151,
    fontWeight: "700",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_21xl,
    top: 55,
  },
  text8: {
    top: 228,
    height: 113,
    fontSize: FontSize.size_11xl,
  },
  groupPressable: {
    top: 526,
    height: 394,
    width: 989,
  },
  text10: {
    top: 140,
    left: 468,
    width: 518,
    height: 113,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  myTrainingProgramInner1: {
    top: 996,
    left: 77,
    width: 989,
    position: "absolute",
  },
  rectangleParent1: {
    top: 1482,
    left: 77,
    width: 989,
    position: "absolute",
  },
  frameView: {
    top: 2303,
    width: 786,
    height: 152,
  },
  myTrainingProgram: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyTrainingProgram7;
