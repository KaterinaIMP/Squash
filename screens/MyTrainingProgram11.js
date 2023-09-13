import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MyTrainingProgram11 = () => {
  return (
    <View style={styles.myTrainingProgram}>
      <View style={[styles.myTrainingProgramChild, styles.trainingPosition]} />
      <View style={[styles.myTrainingProgramItem, styles.trainingPosition]} />
      <View style={styles.myTrainingProgramInner} />
      <View style={styles.rectangleView} />
      <View
        style={[styles.myTrainingProgramChild1, styles.boustParentLayout]}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={[styles.backIcon, styles.iconLayout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>МОИ ТРЕНИРОВКИ</Text>
      <View
        style={[styles.myTrainingProgramChild2, styles.trainingChildLayout]}
      />
      <Text style={[styles.boust, styles.boustTypo]}>BOUST</Text>
      <View
        style={[styles.myTrainingProgramChild3, styles.trainingChildLayout]}
      />
      <View
        style={[styles.myTrainingProgramChild4, styles.trainingChildLayout]}
      />
      <Image
        style={[styles.starIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-11.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild5, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-298.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild6, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-14.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild7, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-30.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild8, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-15.png")}
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
      <Image
        style={[styles.backIcon, styles.iconLayout4]}
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
            <View style={styles.groupShadowBox} />
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
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={styles.groupShadowBox} />
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
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.boustParent, styles.boustParentLayout]}>
        <Text style={[styles.boust1, styles.boustTypo]}>BOUST</Text>
        <View style={[styles.plashka, styles.plashkaPosition]} />
        <Image
          style={[styles.groupChild2, styles.groupChildPosition2]}
          resizeMode="cover"
          source={require("../assets/star-298.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildPosition2]}
          resizeMode="cover"
          source={require("../assets/star-298.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildPosition2]}
          resizeMode="cover"
          source={require("../assets/star-141.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildPosition2]}
          resizeMode="cover"
          source={require("../assets/star-30.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildPosition2]}
          resizeMode="cover"
          source={require("../assets/star-151.png")}
        />
        <Image
          style={[styles.icon2, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/555-34.png")}
        />
        <Image
          style={[styles.icon3, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/555-34.png")}
        />
      </View>
      <View style={[styles.parent, styles.iconLayout1]}>
        <Text style={[styles.text5, styles.textTypo1]}>все</Text>
        <View style={styles.groupChild7} />
        <Text style={[styles.text6, styles.textTypo1]}>созданные</Text>
      </View>
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
        <View style={[styles.history, styles.historyLayout]}>
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
        </View>
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
          <View style={[styles.scheduleUnactive, styles.groupChild8Layout]}>
            <View style={[styles.rectangleContainer, styles.groupChild8Layout]}>
              <View style={[styles.groupChild8, styles.groupChild8Layout]} />
              <View style={[styles.groupChild9, styles.groupChildLayout]} />
              <View style={[styles.groupChild10, styles.groupChildLayout]} />
              <View style={[styles.groupChild11, styles.groupChildPosition1]} />
              <View style={[styles.groupChild12, styles.groupChildPosition1]} />
              <View style={[styles.groupChild13, styles.groupChildPosition1]} />
              <View style={[styles.groupChild14, styles.groupChildPosition1]} />
              <View style={[styles.groupChild15, styles.groupChildPosition]} />
              <View style={[styles.groupChild16, styles.groupChildPosition]} />
              <View style={[styles.groupChild17, styles.groupChildPosition]} />
              <View style={[styles.groupChild18, styles.groupChildPosition]} />
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
          style={[styles.icon4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/home-unactive.png")}
        />
        <View style={[styles.historyActive, styles.historyLayout1]}>
          <View style={[styles.groupChild19, styles.childPosition]} />
          <View style={[styles.groupChild20, styles.historyItemPosition]} />
          <View style={[styles.groupChild21, styles.historyInnerPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trainingPosition: {
    width: 19,
    left: 1421,
    position: "absolute",
  },
  boustParentLayout: {
    width: 1440,
    position: "absolute",
  },
  iconLayout4: {
    height: 284,
    width: 279,
    top: 81,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_46xl,
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
  iconLayout1: {
    height: 108,
    position: "absolute",
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
  vectorIconLayout: {
    left: "23.4%",
    right: "70.07%",
    width: "6.53%",
    height: "3.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  plashkaPosition: {
    left: "0%",
    right: "0%",
    height: "100%",
  },
  groupChildPosition2: {
    bottom: "72.01%",
    top: "17.96%",
    height: "10.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    top: 41,
    height: 108,
    width: 42,
    position: "absolute",
  },
  menuPosition: {
    bottom: "0%",
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
  groupChild8Layout: {
    width: 66,
    position: "absolute",
  },
  groupChildLayout: {
    height: 16,
    width: 6,
    top: 0,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 49,
    width: 6,
    height: 6,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  groupChildPosition: {
    top: 36,
    width: 6,
    height: 6,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  iconLayout: {
    width: 51,
    height: 51,
    position: "absolute",
  },
  myTrainingProgramChild: {
    top: 444,
    height: 1980,
    backgroundColor: Color.colorDarkslategray,
    width: 19,
    left: 1421,
  },
  myTrainingProgramItem: {
    top: 330,
    height: 662,
    backgroundColor: Color.colorGoldenrod_100,
    width: 19,
    left: 1421,
  },
  myTrainingProgramInner: {
    width: 203,
    height: 185,
    backgroundColor: Color.colorGainsboro,
    left: 70,
    top: 81,
    position: "absolute",
  },
  rectangleView: {
    top: 88,
    left: 104,
    width: 169,
    height: 168,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild1: {
    height: 444,
    backgroundColor: Color.colorGray_400,
    left: 0,
    top: 0,
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
  text: {
    top: 125,
    left: 423,
  },
  myTrainingProgramChild2: {
    top: 129,
  },
  boust: {
    top: 2187,
    left: 276,
  },
  myTrainingProgramChild3: {
    top: 159,
  },
  myTrainingProgramChild4: {
    top: 189,
  },
  starIcon: {
    right: "90.84%",
    left: "5.58%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
    maxWidth: "100%",
    position: "absolute",
    width: "3.58%",
  },
  myTrainingProgramChild5: {
    right: "85.01%",
    left: "11.41%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
    maxWidth: "100%",
    position: "absolute",
    width: "3.58%",
  },
  myTrainingProgramChild6: {
    right: "73.15%",
    left: "23.18%",
    width: "3.67%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild7: {
    right: "79.09%",
    left: "17.28%",
    width: "3.63%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild8: {
    right: "67.2%",
    left: "29.12%",
    width: "3.67%",
    bottom: "12.57%",
    top: "85.66%",
    height: "1.77%",
    maxWidth: "100%",
    position: "absolute",
  },
  icon: {
    left: 569,
    width: 42,
    top: 2143,
    height: 108,
  },
  icon1: {
    left: 657,
    width: 42,
    top: 2143,
    height: 108,
  },
  groupIcon: {
    top: 135,
    left: 1244,
    width: 83,
    height: 62,
    position: "absolute",
  },
  groupShadowBox: {
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
    top: 542,
    width: 1235,
    height: 394,
    left: 70,
  },
  vectorIcon: {
    top: "23.24%",
    bottom: "73.48%",
  },
  drive: {
    width: 140,
    top: 162,
  },
  groupContainer: {
    top: 1016,
    width: 1235,
    height: 394,
    left: 70,
  },
  vectorIcon1: {
    top: "41.76%",
    bottom: "54.96%",
  },
  boust1: {
    top: 69,
    left: 443,
  },
  plashka: {
    top: "100%",
    bottom: "-100%",
    backgroundColor: Color.colorGray_300,
    position: "absolute",
    width: "100%",
    left: "0%",
    right: "0%",
    height: "100%",
  },
  groupChild2: {
    right: "73.76%",
    left: "22.66%",
    width: "3.58%",
  },
  groupChild3: {
    right: "67.92%",
    left: "28.49%",
    width: "3.58%",
  },
  groupChild4: {
    right: "56.07%",
    left: "40.26%",
    width: "3.67%",
  },
  groupChild5: {
    right: "62.01%",
    left: "34.36%",
    width: "3.63%",
  },
  groupChild6: {
    right: "50.12%",
    left: "46.21%",
    width: "3.67%",
  },
  icon2: {
    left: 129,
  },
  icon3: {
    left: 217,
  },
  boustParent: {
    top: 2109,
    left: 6,
    height: 451,
  },
  text5: {
    top: 5,
    left: 0,
  },
  groupChild7: {
    top: 102,
    left: 417,
    width: 720,
    height: 6,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  text6: {
    left: 610,
    top: 0,
  },
  parent: {
    top: 336,
    left: 303,
    width: 1137,
  },
  plashka1: {
    bottom: "0%",
    width: "100%",
    left: "0%",
    right: "0%",
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
  groupChild8: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    left: 0,
    backgroundColor: Color.colorGainsboro,
  },
  groupChild9: {
    left: 16,
  },
  groupChild10: {
    left: 44,
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
  groupChild15: {
    left: 44,
  },
  groupChild16: {
    left: 33,
  },
  groupChild17: {
    left: 22,
  },
  groupChild18: {
    left: 10,
  },
  rectangleContainer: {
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
  icon4: {
    left: 152,
    top: 70,
  },
  groupChild19: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  groupChild20: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  groupChild21: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
    right: "-0.42%",
    left: "0.42%",
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

export default MyTrainingProgram11;
