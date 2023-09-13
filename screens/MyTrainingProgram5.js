import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MyTrainingProgram5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTrainingProgram}>
      <View
        style={[styles.myTrainingProgramInner, styles.groupPressableLayout]}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Text style={[styles.text, styles.textLayout1]}>Драп-драйв</Text>
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
        style={[styles.ellipseIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={[styles.backIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={styles.text2}>ТРЕНИРОВКА</Text>
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
        style={[styles.backIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <Text style={[styles.text4, styles.textTypo]}>добавленно</Text>
      <Pressable
        style={styles.groupParent}
        onPress={() => navigation.navigate("Video2")}
      >
        <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
          <Pressable
            style={[styles.groupItem, styles.groupChildShadowBox]}
            onPress={() => navigation.navigate("Video1")}
          />
          <Text style={[styles.text5, styles.textLayout1]}>Дроп-драйв</Text>
          <Text
            style={[styles.text1, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/1-1000.png")}
          />
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/1-1000.png")}
          />
        </View>
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPressableLayout]}
        onPress={() => navigation.navigate("Video1")}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
          <Text style={[styles.text, styles.textLayout1]}>Боуст-драйв</Text>
          <Text
            style={[styles.text1, styles.textLayout]}
          >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
        </View>
      </Pressable>
      <View
        style={[styles.myTrainingProgramChild8, styles.groupChildShadowBox]}
      />
      <Text style={[styles.text9, styles.textPosition]}>Драйв-драйв</Text>
      <Text
        style={[styles.text10, styles.textPosition]}
      >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется `}</Text>
      <Text style={[styles.boust, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust2, styles.boustTypo]}>BOUST2</Text>
      <View style={[styles.plashka, styles.plashkaPosition]} />
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
        style={[styles.icon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <Text style={[styles.text11, styles.textTypo1]}>
        <Text style={styles.text12}>{`Упражнений: `}</Text>
        <Text style={styles.text13}>4/4</Text>
      </Text>
      <Pressable
        style={styles.furtherParent}
        onPress={() => navigation.navigate("Video5")}
      >
        <LinearGradient
          style={[styles.further, styles.plashkaPosition]}
          locations={[0.06, 0.53, 1]}
          colors={["#f39b16", "#f7ab39", "#fbc66f"]}
          useAngle={true}
          angle={-28.09}
        />
        <Text style={[styles.text14, styles.textTypo1]}>Начать тренировку</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPressableLayout: {
    height: 394,
    width: 989,
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
  textLayout1: {
    height: 51,
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
  iconLayout2: {
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
  iconLayout1: {
    height: 42,
    width: 45,
    left: 1053,
    position: "absolute",
  },
  groupChildLayout: {
    height: 56,
    width: 60,
    borderRadius: Border.br_8xs,
    left: 1193,
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
    top: 2200,
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_29xl,
    position: "absolute",
  },
  plashkaPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  text: {
    width: 518,
    left: 471,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
    fontSize: FontSize.size_29xl,
    height: 51,
    top: 55,
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
    height: 394,
    width: 989,
    position: "absolute",
  },
  myTrainingProgramInner: {
    top: 1946,
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
    left: 514,
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
    left: 711,
    width: 720,
    height: 6,
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
  text5: {
    fontSize: FontSize.size_21xl,
    width: 518,
    left: 471,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
    top: 55,
  },
  icon: {
    top: 176,
  },
  icon1: {
    top: 646,
  },
  rectangleGroup: {
    width: 1098,
    height: 688,
    position: "absolute",
  },
  groupInner: {
    top: 168,
  },
  vectorIcon: {
    top: 638,
  },
  groupChild1: {
    top: 1124,
  },
  groupChild2: {
    top: 1588,
  },
  groupParent: {
    top: 526,
    width: 1250,
    height: 1645,
    left: 70,
    position: "absolute",
  },
  groupChild3: {
    left: 0,
    top: 0,
  },
  groupPressable: {
    top: 996,
    left: 77,
  },
  myTrainingProgramChild8: {
    top: 1482,
    left: 77,
  },
  text9: {
    top: 1537,
    height: 51,
    fontWeight: "700",
    fontSize: FontSize.size_29xl,
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
  icon2: {
    left: 76,
  },
  icon3: {
    left: 164,
  },
  text12: {
    color: Color.colorWhite,
  },
  text13: {
    color: Color.colorGoldenrod_100,
  },
  text11: {
    top: 2194,
    left: 799,
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  further: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_57xl_5,
    opacity: 0.9,
    backgroundColor: "transparent",
  },
  text14: {
    top: "21.05%",
    left: "6.87%",
    fontSize: FontSize.size_53xl,
    color: Color.bleackstrong,
  },
  furtherParent: {
    height: "5.94%",
    width: "54.58%",
    top: "90.51%",
    right: "40.56%",
    bottom: "3.55%",
    left: "4.86%",
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

export default MyTrainingProgram5;
