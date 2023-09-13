import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MyTrainingProgram3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTrainingProgram}>
      <Image
        style={styles.myTrainingProgramChild}
        resizeMode="cover"
        source={require("../assets/arrow-28.png")}
      />
      <View style={[styles.myTrainingProgramItem, styles.trainingPosition]} />
      <View style={[styles.myTrainingProgramInner, styles.trainingPosition]} />
      <View style={styles.rectangleView} />
      <View style={styles.myTrainingProgramChild1} />
      <View style={styles.myTrainingProgramChild2} />
      <View style={styles.myTrainingProgramChild3} />
      <View style={styles.myTrainingProgramChild4} />
      <View style={styles.myTrainingProgramChild5} />
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
        style={styles.backIcon}
        resizeMode="cover"
        source={require("../assets/back.png")}
      />
      <Image
        style={[styles.backIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={styles.text}>МОИ ТРЕНИРОВКИ</Text>
      <View
        style={[styles.myTrainingProgramChild6, styles.trainingChildLayout]}
      />
      <View
        style={[styles.myTrainingProgramChild7, styles.trainingChildLayout]}
      />
      <View
        style={[styles.myTrainingProgramChild8, styles.trainingChildLayout]}
      />
      <Text style={[styles.boust, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust1, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust2, styles.boustTypo]}>BOUST</Text>
      <Image
        style={[styles.starIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild9, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild10, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild11, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild12, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild13, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild14, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild15, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild16, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild17, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild18, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild19, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild20, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild21, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild22, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <View style={styles.plashka} />
      <Image
        style={[styles.backIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.driveDropCross, styles.text1Typo]}>
              Drive-Drop-Cross-тактика
            </Text>
            <Text style={[styles.text1, styles.text1Typo]}>Тренировка</Text>
            <Text style={[styles.text2, styles.text2Typo]}>15.06.2022</Text>
          </View>
        </View>
        <Image
          style={[styles.groupItem, styles.favLayout]}
          resizeMode="cover"
          source={require("../assets/group-62.png")}
        />
      </View>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("MyTrainingProgram2")}
      >
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.drive, styles.text2Typo]}>Drive</Text>
            <Text style={[styles.text1, styles.text1Typo]}>Упражнение</Text>
            <Text style={[styles.text2, styles.text2Typo]}>15.06.2022</Text>
          </View>
        </View>
        <Image
          style={[styles.groupItem, styles.favLayout]}
          resizeMode="cover"
          source={require("../assets/group-62.png")}
        />
      </View>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("MyTrainingProgram2")}
      >
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.drive, styles.text2Typo]}>Drive</Text>
            <Text style={[styles.text1, styles.text1Typo]}>Упражнение</Text>
            <Text style={[styles.text2, styles.text2Typo]}>15.06.2022</Text>
          </View>
        </View>
        <Image
          style={[styles.groupItem, styles.favLayout]}
          resizeMode="cover"
          source={require("../assets/group-62.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild24, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-1021.png")}
      />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.plashka1, styles.iconPosition]} />
        <View style={[styles.fav, styles.favLayout]}>
          <Image
            style={[styles.likeActiveIcon, styles.likeActiveIconLayout]}
            resizeMode="cover"
            source={require("../assets/like-active.png")}
          />
          <Image
            style={[styles.likeActiveIcon, styles.likeActiveIconLayout]}
            resizeMode="cover"
            source={require("../assets/like-unactive.png")}
          />
          <Text style={[styles.text7, styles.textTypo]}>Избранное</Text>
        </View>
        <View style={[styles.historyActive, styles.historyLayout1]}>
          <LinearGradient
            style={[styles.historyActiveChild, styles.childPosition]}
            locations={[0, 0.59]}
            colors={["rgba(249, 180, 75, 0.47)", "#f9b44b"]}
            useAngle={true}
            angle={165.13}
          />
          <LinearGradient
            style={[styles.historyActiveItem, styles.historyItemPosition]}
            locations={[0, 0.59]}
            colors={["rgba(249, 180, 75, 0.47)", "#f9b44b"]}
            useAngle={true}
            angle={165.13}
          />
          <LinearGradient
            style={[styles.historyActiveInner, styles.historyInnerPosition]}
            locations={[0, 0.59]}
            colors={["rgba(249, 180, 75, 0.47)", "#f9b44b"]}
            useAngle={true}
            angle={165.13}
          />
        </View>
        <Pressable
          style={[styles.history, styles.historyLayout]}
          onPress={() => navigation.navigate("MyTrainingProgram3")}
        >
          <View style={[styles.historyUnactive, styles.historyLayout1]}>
            <View style={[styles.historyUnactiveChild, styles.childPosition]} />
            <View
              style={[styles.historyUnactiveItem, styles.historyItemPosition]}
            />
            <View
              style={[styles.historyUnactiveInner, styles.historyInnerPosition]}
            />
          </View>
          <Text style={[styles.text8, styles.text8Position]}>Тренироки</Text>
        </Pressable>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text9, styles.textTypo]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text10, styles.textTypo]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupChild4Layout]}>
            <View style={[styles.rectangleParent1, styles.groupChild4Layout]}>
              <View style={[styles.groupChild4, styles.groupChild4Layout]} />
              <View style={[styles.groupChild5, styles.groupChildLayout1]} />
              <View style={[styles.groupChild6, styles.groupChildLayout1]} />
              <View style={[styles.groupChild7, styles.groupChildLayout]} />
              <View style={[styles.groupChild8, styles.groupChildLayout]} />
              <View style={[styles.groupChild9, styles.groupChildLayout]} />
              <View style={[styles.groupChild10, styles.groupChildLayout]} />
              <View style={[styles.groupChild11, styles.groupChildPosition]} />
              <View style={[styles.groupChild12, styles.groupChildPosition]} />
              <View style={[styles.groupChild13, styles.groupChildPosition]} />
              <View style={[styles.groupChild14, styles.groupChildPosition]} />
            </View>
          </View>
        </View>
        <View style={styles.home}>
          <Image
            style={[styles.homeUnactiveIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home-unactive.png")}
          />
          <Image
            style={[styles.homeActiveIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/home-active.png")}
          />
          <Text style={[styles.text9, styles.textTypo]}>Домой</Text>
        </View>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/home-unactive.png")}
        />
        <View style={[styles.historyActive, styles.historyLayout1]}>
          <View style={[styles.groupChild15, styles.childPosition]} />
          <View style={[styles.groupChild16, styles.historyItemPosition]} />
          <View style={[styles.groupChild17, styles.historyInnerPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trainingPosition: {
    width: 19,
    left: 1421,
    top: 444,
    position: "absolute",
  },
  iconLayout1: {
    height: 284,
    width: 279,
    top: 81,
    position: "absolute",
  },
  trainingChildLayout: {
    height: 13,
    width: 15,
    left: 1278,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  boustTypo: {
    height: 51,
    width: 168,
    fontSize: FontSize.size_29xl,
    top: 2187,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    height: 394,
    position: "absolute",
  },
  text1Typo: {
    width: 601,
    left: 475,
    height: 51,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  text2Typo: {
    left: 475,
    height: 51,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  favLayout: {
    height: 114,
    position: "absolute",
  },
  vectorPosition: {
    height: "3.28%",
    width: "6.53%",
    right: "70.07%",
    left: "23.4%",
    position: "absolute",
  },
  menuPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconPosition: {
    top: "0%",
    position: "absolute",
  },
  likeActiveIconLayout: {
    height: 65,
    top: 0,
  },
  textTypo: {
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  historyLayout1: {
    width: 60,
    height: 65,
    position: "absolute",
  },
  childPosition: {
    height: 31,
    width: 18,
    top: 34,
    left: 0,
    position: "absolute",
  },
  historyItemPosition: {
    height: 48,
    left: 21,
    top: 17,
    width: 18,
    position: "absolute",
  },
  historyInnerPosition: {
    left: 42,
    width: 18,
    height: 65,
    top: 0,
    position: "absolute",
  },
  historyLayout: {
    height: 123,
    top: 63,
  },
  text8Position: {
    top: 86,
    left: 0,
  },
  wrapperLayout: {
    width: 166,
    position: "absolute",
  },
  groupChild4Layout: {
    width: 66,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 16,
    width: 6,
    top: 0,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  groupChildLayout: {
    height: 6,
    top: 49,
    width: 6,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  groupChildPosition: {
    top: 36,
    height: 6,
    width: 6,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  iconLayout: {
    width: 51,
    height: 51,
    position: "absolute",
  },
  myTrainingProgramChild: {
    top: 2110,
    left: 944,
    width: 230,
    height: 74,
    position: "absolute",
  },
  myTrainingProgramItem: {
    height: 1980,
    backgroundColor: Color.colorDarkslategray,
    width: 19,
    left: 1421,
    top: 444,
  },
  myTrainingProgramInner: {
    height: 662,
    backgroundColor: Color.colorGoldenrod_100,
    width: 19,
    left: 1421,
    top: 444,
  },
  rectangleView: {
    top: 2160,
    left: 973,
    width: 324,
    height: 107,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild1: {
    width: 203,
    height: 185,
    left: 70,
    top: 81,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild2: {
    top: 88,
    left: 104,
    width: 169,
    height: 168,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild3: {
    top: 2197,
    left: 988,
    width: 321,
    height: 53,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild4: {
    top: 2210,
    left: 966,
    width: 343,
    height: 57,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild5: {
    width: 1440,
    height: 444,
    backgroundColor: Color.colorGray_400,
    left: 0,
    top: 0,
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
    top: 2200,
    left: 1270,
    width: 54,
    height: 37,
    position: "absolute",
  },
  backIcon1: {
    left: 1146,
  },
  text: {
    top: 125,
    left: 423,
    fontSize: FontSize.size_46xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  myTrainingProgramChild6: {
    top: 129,
  },
  myTrainingProgramChild7: {
    top: 159,
  },
  myTrainingProgramChild8: {
    top: 189,
  },
  boust: {
    left: 276,
  },
  boust1: {
    left: 726,
  },
  boust2: {
    left: 1167,
  },
  starIcon: {
    right: "69.87%",
    left: "27.7%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild9: {
    right: "38.62%",
    left: "58.95%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild10: {
    right: "8%",
    left: "89.57%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild11: {
    right: "73.27%",
    left: "24.3%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild12: {
    right: "42.02%",
    left: "55.55%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild13: {
    right: "11.4%",
    left: "86.17%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild14: {
    right: "76.61%",
    left: "20.96%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild15: {
    right: "45.36%",
    left: "52.21%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild16: {
    right: "14.73%",
    left: "82.84%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild17: {
    right: "79.94%",
    left: "17.63%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild18: {
    right: "48.69%",
    left: "48.88%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild19: {
    right: "18.07%",
    left: "79.5%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild20: {
    right: "83.2%",
    left: "14.37%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild21: {
    right: "51.95%",
    left: "45.62%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild22: {
    right: "21.33%",
    left: "76.24%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
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
  groupIcon: {
    top: 135,
    left: 1244,
    width: 83,
    height: 62,
    position: "absolute",
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
    borderRadius: Border.br_31xl,
    height: 394,
    left: 0,
    top: 0,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  driveDropCross: {
    top: 162,
  },
  text1: {
    top: 71,
    fontWeight: "700",
  },
  text2: {
    top: 253,
    width: 254,
  },
  groupWrapper: {
    width: 1076,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 119,
    left: 1211,
    width: 24,
  },
  groupParent: {
    top: 526,
    width: 1235,
    height: 394,
    left: 70,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vector: {
    top: "22.62%",
    bottom: "74.1%",
  },
  drive: {
    width: 140,
    top: 162,
  },
  groupContainer: {
    top: 1002,
    width: 1235,
    height: 394,
    left: 70,
  },
  vector1: {
    top: "41.21%",
    bottom: "55.51%",
  },
  groupView: {
    top: 1500,
    width: 1235,
    height: 394,
    left: 70,
  },
  vectorIcon: {
    top: "60.66%",
    bottom: "36.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  myTrainingProgramChild24: {
    height: "4.22%",
    width: "39.7%",
    top: "83.87%",
    right: "55.44%",
    bottom: "11.91%",
    left: "4.86%",
    position: "absolute",
  },
  plashka1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: Color.colorGray_400,
  },
  likeActiveIcon: {
    left: 47,
    width: 70,
    position: "absolute",
  },
  text7: {
    top: 77,
    left: 0,
  },
  fav: {
    top: 73,
    left: 351,
    width: 172,
  },
  historyActiveChild: {
    backgroundColor: "transparent",
  },
  historyActiveItem: {
    backgroundColor: "transparent",
  },
  historyActiveInner: {
    backgroundColor: "transparent",
  },
  historyActive: {
    left: 689,
    top: 63,
    width: 60,
  },
  historyUnactiveChild: {
    backgroundColor: Color.colorGainsboro,
  },
  historyUnactiveItem: {
    backgroundColor: Color.colorGainsboro,
  },
  historyUnactiveInner: {
    backgroundColor: Color.colorGainsboro,
  },
  historyUnactive: {
    left: 50,
    top: 0,
  },
  text8: {
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  history: {
    left: 639,
    width: 163,
    position: "absolute",
  },
  privateIcon: {
    height: "45.87%",
    width: "29.37%",
    right: "34.97%",
    bottom: "54.13%",
    left: "35.66%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text9: {
    top: 72,
    left: 0,
  },
  profile: {
    height: "43.6%",
    width: "9.93%",
    top: "31.2%",
    right: "8.61%",
    bottom: "25.2%",
    left: "81.46%",
    position: "absolute",
  },
  text10: {
    left: 0,
    top: 0,
  },
  wrapper: {
    top: 86,
    left: 0,
    height: 37,
  },
  groupChild4: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    left: 0,
    backgroundColor: Color.colorGainsboro,
  },
  groupChild5: {
    left: 16,
  },
  groupChild6: {
    left: 44,
  },
  groupChild7: {
    left: 44,
  },
  groupChild8: {
    left: 33,
  },
  groupChild9: {
    left: 22,
  },
  groupChild10: {
    left: 10,
  },
  groupChild11: {
    left: 44,
  },
  groupChild12: {
    left: 33,
  },
  groupChild13: {
    left: 22,
  },
  groupChild14: {
    left: 10,
  },
  rectangleParent1: {
    height: 65,
    top: 0,
    left: 0,
  },
  scheduleUnactive: {
    left: 48,
    height: 65,
    top: 0,
  },
  schedule: {
    left: 898,
    height: 123,
    top: 63,
  },
  homeUnactiveIcon: {
    left: 28,
    top: 0,
  },
  homeActiveIcon: {
    height: "46.79%",
    width: "47.66%",
    right: "26.17%",
    bottom: "53.21%",
    left: "26.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  home: {
    left: 124,
    width: 107,
    height: 109,
    top: 70,
    position: "absolute",
  },
  icon2: {
    left: 152,
    top: 70,
  },
  groupChild15: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  groupChild16: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  groupChild17: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
    position: "absolute",
  },
  myTrainingProgram: {
    flex: 1,
    height: 2560,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "100%",
  },
});

export default MyTrainingProgram3;
