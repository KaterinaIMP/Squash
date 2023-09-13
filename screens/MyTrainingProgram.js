import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MyTrainingProgram = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTrainingProgram}>
      <View style={[styles.myTrainingProgramInner, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Text style={[styles.text, styles.textTypo1]}>Дроп-драйв</Text>
          <Text
            style={[styles.text1, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </View>
      <View style={[styles.myTrainingProgramChild, styles.trainingLayout]} />
      <View style={[styles.myTrainingProgramItem, styles.trainingPosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <View style={[styles.myTrainingProgramChild1, styles.rectangleViewBg]} />
      <View
        style={[styles.myTrainingProgramChild2, styles.groupChildPosition]}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={[styles.backIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={styles.text2}>ВЫБРАТЬ УПРАЖНЕНИЕ</Text>
      <Text style={[styles.text3, styles.textTypo]}>все</Text>
      <View
        style={[styles.myTrainingProgramChild3, styles.trainingChildLayout2]}
      />
      <View
        style={[styles.myTrainingProgramChild4, styles.trainingChildLayout2]}
      />
      <View
        style={[styles.myTrainingProgramChild5, styles.trainingChildLayout2]}
      />
      <View style={[styles.myTrainingProgramChild6, styles.trainingPosition]} />
      <Image
        style={[styles.backIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <Text style={[styles.text4, styles.textTypo]}>избранное</Text>
      <Pressable
        style={[styles.groupParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("Video2")}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
          <Text style={[styles.text, styles.textTypo1]}>Дроп-драйв</Text>
          <Text
            style={[styles.text1, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <Text style={[styles.text, styles.textTypo1]}>Дроп-драйв</Text>
          <Text
            style={[styles.text1, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </View>
      <View
        style={[styles.myTrainingProgramChild8, styles.groupChildShadowBox]}
      />
      <Text style={[styles.text9, styles.textPosition]}>Дроп-драйв</Text>
      <Text
        style={[styles.text10, styles.textPosition]}
      >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
      <Text style={[styles.boust, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust2, styles.boustTypo]}>BOUST2</Text>
      <View style={styles.plashka} />
      <Image
        style={[styles.starIcon, styles.trainingChildLayout1]}
        resizeMode="cover"
        source={require("../assets/star-11.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild9, styles.trainingChildLayout1]}
        resizeMode="cover"
        source={require("../assets/star-298.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild10, styles.trainingChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-14.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild11, styles.trainingChildLayout1]}
        resizeMode="cover"
        source={require("../assets/star-30.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild12, styles.trainingChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-15.png")}
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
      <Text style={[styles.text11, styles.textTypo2]}>Упражнений: 1/4</Text>
      <View style={styles.frameView}>
        <Pressable
          style={styles.furtherPosition}
          onPress={() => navigation.navigate("Video5")}
        >
          <LinearGradient
            style={[styles.further, styles.furtherPosition]}
            locations={[0.06, 0.53, 1]}
            colors={["#9b9894", "#e8e4df", "#e7ddcf"]}
            useAngle={true}
            angle={-28.09}
          />
          <Text style={[styles.text12, styles.textTypo2]}>
            Начать тренировку
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 394,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
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
  textTypo1: {
    height: 51,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
  },
  textLayout: {
    height: 113,
    fontSize: FontSize.size_11xl,
  },
  trainingLayout: {
    width: 19,
    left: 1421,
  },
  trainingPosition: {
    backgroundColor: Color.colorGoldenrod_100,
    top: 444,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  iconLayout1: {
    height: 284,
    width: 279,
    top: 81,
    position: "absolute",
  },
  textTypo: {
    top: 342,
    fontSize: FontSize.size_46xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  trainingChildLayout2: {
    height: 13,
    width: 15,
    left: 1278,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  textPosition: {
    left: 548,
    width: 518,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  boustTypo: {
    width: 168,
    fontSize: FontSize.size_29xl,
    top: 2200,
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  trainingChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "12.02%",
    top: "86.21%",
    height: "1.77%",
    position: "absolute",
    overflow: "hidden",
  },
  trainingChildLayout: {
    width: "3.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "12.02%",
    top: "86.21%",
    height: "1.77%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 108,
    width: 42,
    top: 2160,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
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
  groupChild: {
    left: 0,
    top: 0,
  },
  text: {
    top: 55,
    width: 518,
    left: 471,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  text1: {
    top: 146,
    width: 518,
    left: 471,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
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
  myTrainingProgramChild: {
    height: 1980,
    top: 444,
    left: 1421,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  myTrainingProgramItem: {
    height: 662,
    width: 19,
    left: 1421,
  },
  rectangleView: {
    width: 203,
    height: 185,
    left: 70,
    top: 81,
    backgroundColor: Color.colorGainsboro,
  },
  myTrainingProgramChild1: {
    top: 88,
    left: 104,
    width: 169,
    height: 168,
  },
  myTrainingProgramChild2: {
    backgroundColor: Color.colorGray_400,
    width: 1440,
    height: 444,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    left: 37,
  },
  arrowIcon: {
    top: 147,
    left: 145,
    width: 63,
    height: 37,
    position: "absolute",
  },
  backIcon: {
    left: 1146,
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
  myTrainingProgramChild3: {
    top: 129,
  },
  myTrainingProgramChild4: {
    top: 159,
  },
  myTrainingProgramChild5: {
    top: 189,
  },
  myTrainingProgramChild6: {
    width: 720,
    height: 6,
    left: 0,
  },
  groupIcon: {
    top: 135,
    left: 1244,
    width: 83,
    height: 62,
    position: "absolute",
  },
  text4: {
    left: 904,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 168,
    left: 1193,
    borderRadius: Border.br_8xs,
    width: 60,
    height: 56,
    position: "absolute",
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
  groupView: {
    top: 996,
    width: 989,
    height: 394,
    left: 77,
  },
  myTrainingProgramChild8: {
    top: 1482,
    left: 77,
  },
  text9: {
    top: 1537,
    height: 51,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
  },
  text10: {
    top: 1628,
    height: 113,
    fontSize: FontSize.size_11xl,
  },
  boust: {
    left: 276,
  },
  boust2: {
    left: 726,
  },
  plashka: {
    height: "17.62%",
    top: "100.51%",
    bottom: "-18.12%",
    backgroundColor: Color.colorGray_300,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  starIcon: {
    right: "78.76%",
    left: "17.66%",
    width: "3.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "12.02%",
    top: "86.21%",
    height: "1.77%",
  },
  myTrainingProgramChild9: {
    right: "72.92%",
    left: "23.49%",
    width: "3.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "12.02%",
    top: "86.21%",
    height: "1.77%",
  },
  myTrainingProgramChild10: {
    right: "61.07%",
    left: "35.26%",
  },
  myTrainingProgramChild11: {
    width: "3.63%",
    right: "67.01%",
    left: "29.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "12.02%",
    top: "86.21%",
    height: "1.77%",
  },
  myTrainingProgramChild12: {
    right: "55.12%",
    left: "41.21%",
  },
  icon: {
    left: 76,
  },
  icon1: {
    left: 164,
  },
  text11: {
    top: 2194,
    left: 799,
    fontSize: FontSize.size_41xl,
    color: Color.colorWhite,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  further: {
    borderRadius: Border.br_57xl_5,
    opacity: 0.9,
    backgroundColor: "transparent",
  },
  text12: {
    top: "21.05%",
    left: "6.87%",
    fontSize: FontSize.size_53xl,
    color: Color.bleackstrong,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  frameView: {
    top: 2317,
    width: 786,
    height: 152,
    left: 70,
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

export default MyTrainingProgram;
