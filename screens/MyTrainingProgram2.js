import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MyTrainingProgram2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTrainingProgram}>
      <View style={[styles.myTrainingProgramInner, styles.groupWrapperLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <View style={[styles.groupChild, styles.childShadowBox]} />
            <Text style={[styles.drive, styles.textTypo2]}>Drive</Text>
            <Text style={[styles.text, styles.textTypo2]}>15.06.2022</Text>
            <Image
              style={[styles.icon, styles.iconLayout4]}
              resizeMode="cover"
              source={require("../assets/1-1000.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.myTrainingProgramChild, styles.childShadowBox]} />
      <Text style={[styles.drop, styles.boustLayout]}>DROP- легкий удар</Text>
      <View style={[styles.boustWrapper, styles.boustLayout]}>
        <Text style={[styles.boust, styles.boustLayout]}>
          BOUST- от боковой стены
        </Text>
      </View>
      <Image
        style={[styles.myTrainingProgramItem, styles.trainingLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-27.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-28.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.myTrainingProgramChild1} />
      <View style={styles.myTrainingProgramChild2} />
      <View style={styles.myTrainingProgramChild3} />
      <View style={[styles.myTrainingProgramChild4, styles.trainingLayout]} />
      <View style={styles.myTrainingProgramChild5} />
      <View style={styles.myTrainingProgramChild6} />
      <View
        style={[styles.myTrainingProgramChild7, styles.trainingChildLayout1]}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.myTrainingProgramChild8}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Image
        style={styles.backIcon}
        resizeMode="cover"
        source={require("../assets/back.png")}
      />
      <Image
        style={[styles.backIcon1, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.text1, styles.dropTypo]}>ИЗБРАННОЕ</Text>
      <View
        style={[styles.myTrainingProgramChild9, styles.trainingChildLayout]}
      />
      <View
        style={[styles.myTrainingProgramChild10, styles.trainingChildLayout]}
      />
      <View
        style={[styles.myTrainingProgramChild11, styles.trainingChildLayout]}
      />
      <Text style={[styles.boust1, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust2, styles.boustTypo]}>BOUST</Text>
      <Text style={[styles.boust3, styles.boustTypo]}>BOUST</Text>
      <Image
        style={[styles.starIcon, styles.iconChildLayout]}
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
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild18, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild19, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-252.png")}
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
      <Image
        style={[styles.myTrainingProgramChild23, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild24, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild25, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-282.png")}
      />
      <View style={styles.plashka} />
      <Image
        style={[styles.backIcon1, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <View
        style={[styles.myTrainingProgramChild27, styles.trainingChildLayout1]}
      />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.plashka1, styles.iconPosition]} />
        <View style={styles.fav}>
          <Image
            style={[styles.likeActiveIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/like-active.png")}
          />
          <Image
            style={[styles.likeActiveIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/like-unactive.png")}
          />
          <Text style={[styles.text2, styles.textTypo1]}>Избранное</Text>
        </View>
        <View style={[styles.historyActive, styles.historyLayout1]}>
          <LinearGradient
            style={[styles.historyActiveChild, styles.historyChildPosition]}
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
            <View
              style={[styles.historyUnactiveChild, styles.historyChildPosition]}
            />
            <View
              style={[styles.historyUnactiveItem, styles.historyItemPosition]}
            />
            <View
              style={[styles.historyUnactiveInner, styles.historyInnerPosition]}
            />
          </View>
          <Text style={[styles.text3, styles.text3Position]}>Тренироки</Text>
        </Pressable>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text4, styles.textTypo1]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text5, styles.textTypo1]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupLayout1]}>
            <View style={[styles.rectangleGroup, styles.groupLayout1]}>
              <View style={[styles.groupItem, styles.groupLayout1]} />
              <View style={[styles.groupInner, styles.groupLayout]} />
              <View style={[styles.groupChild1, styles.groupLayout]} />
              <View style={[styles.groupChild2, styles.groupChildLayout]} />
              <View style={[styles.groupChild3, styles.groupChildLayout]} />
              <View style={[styles.groupChild4, styles.groupChildLayout]} />
              <View style={[styles.groupChild5, styles.groupChildLayout]} />
              <View style={[styles.groupChild6, styles.groupChildPosition]} />
              <View style={[styles.groupChild7, styles.groupChildPosition]} />
              <View style={[styles.groupChild8, styles.groupChildPosition]} />
              <View style={[styles.groupChild9, styles.groupChildPosition]} />
            </View>
          </View>
        </View>
        <View style={styles.home}>
          <Image
            style={[styles.homeUnactiveIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/home-unactive.png")}
          />
          <Image
            style={[styles.homeActiveIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/home-active.png")}
          />
          <Text style={[styles.text4, styles.textTypo1]}>Домой</Text>
        </View>
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/home-unactive.png")}
        />
      </View>
      <Image
        style={[styles.icon2, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/like-active.png")}
      />
      <Image
        style={[styles.myTrainingProgramChild28, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-63.png")}
      />
      <Text style={[styles.text7, styles.textTypo]}>Изменить название</Text>
      <Pressable
        style={[styles.pressable, styles.text7Position]}
        onPress={() => navigation.navigate("MyTrainingProgram5")}
      >
        <Text style={[styles.text8, styles.textTypo]}>
          Редактировать тренировку
        </Text>
      </Pressable>
      <Text style={[styles.text9, styles.textTypo]}>{`Удалить `}</Text>
      <Image
        style={[styles.myTrainingProgramChild29, styles.trainingChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-64.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1-10001.png")}
      />
      <Image
        style={[styles.icon4, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/1-10001.png")}
      />
      <View style={[styles.driveParent, styles.driveParentLayout]}>
        <Text style={[styles.drive1, styles.textTypo2]}>Drive</Text>
        <Text style={[styles.text10, styles.textTypo2]}>Упражнение</Text>
        <Text style={[styles.text11, styles.textTypo2]}>15.06.2022</Text>
      </View>
      <View style={[styles.driveDropCrossParent, styles.driveParentLayout]}>
        <Text style={[styles.driveDropCross, styles.dropTypo]}>
          Drive-Drop-Cross-тактика
        </Text>
        <Text style={[styles.text10, styles.textTypo2]}>Тренировка</Text>
        <Text style={[styles.text11, styles.textTypo2]}>15.06.2022</Text>
      </View>
      <Image
        style={[styles.myTrainingProgramChild30, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-102.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupWrapperLayout: {
    height: 394,
    width: 1153,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  textTypo2: {
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_29xl,
    position: "absolute",
  },
  iconLayout4: {
    height: 42,
    position: "absolute",
  },
  boustLayout: {
    width: 518,
    height: 51,
    position: "absolute",
  },
  trainingLayout: {
    height: 168,
    position: "absolute",
  },
  trainingChildLayout1: {
    width: 1440,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  iconLayout3: {
    height: 284,
    width: 279,
    top: 81,
    position: "absolute",
  },
  dropTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
  },
  trainingChildLayout: {
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
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  iconLayout2: {
    width: 70,
    height: 65,
    position: "absolute",
  },
  textTypo1: {
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
  historyChildPosition: {
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
  text3Position: {
    top: 86,
    left: 0,
  },
  wrapperLayout: {
    width: 166,
    position: "absolute",
  },
  groupLayout1: {
    width: 66,
    position: "absolute",
  },
  groupLayout: {
    height: 16,
    width: 6,
    backgroundColor: Color.colorGainsboro,
    top: 0,
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
  iconLayout1: {
    width: 51,
    height: 51,
    position: "absolute",
  },
  trainingChildPosition: {
    width: 1300,
    left: 5,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGoldenrod_100,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  text7Position: {
    left: 259,
    position: "absolute",
  },
  iconLayout: {
    height: 78,
    left: 333,
    width: 83,
    position: "absolute",
  },
  driveParentLayout: {
    height: 233,
    left: 559,
    width: 601,
    position: "absolute",
  },
  groupChild: {
    width: 411,
    backgroundColor: Color.colorDarkslategray,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    height: 394,
  },
  drive: {
    top: 176,
    width: 601,
    left: 475,
    height: 51,
  },
  text: {
    top: 76,
    width: 601,
    left: 475,
    height: 51,
  },
  icon: {
    top: 155,
    left: 1108,
    width: 45,
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  myTrainingProgramInner: {
    top: 1381,
    left: 70,
    width: 1153,
  },
  myTrainingProgramChild: {
    top: 1358,
    width: 1276,
    height: 522,
    backgroundColor: Color.colorGray_400,
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: Border.br_31xl,
    left: 70,
  },
  drop: {
    top: 2429,
    left: 123,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_29xl,
  },
  boust: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_29xl,
    left: 0,
    top: 0,
  },
  boustWrapper: {
    top: 2428,
    left: 797,
  },
  myTrainingProgramItem: {
    top: 2192,
    left: 1086,
    width: 94,
  },
  arrowIcon: {
    top: 2110,
    left: 944,
    width: 230,
    height: 74,
    position: "absolute",
  },
  rectangleView: {
    height: 1980,
    width: 19,
    left: 1421,
    top: 291,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  myTrainingProgramChild1: {
    height: 662,
    backgroundColor: Color.colorGoldenrod_100,
    width: 19,
    left: 1421,
    top: 291,
    position: "absolute",
  },
  myTrainingProgramChild2: {
    top: 2160,
    left: 973,
    width: 324,
    height: 107,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild3: {
    width: 203,
    height: 185,
    top: 81,
    backgroundColor: Color.colorGainsboro,
    left: 70,
    position: "absolute",
  },
  myTrainingProgramChild4: {
    top: 88,
    left: 104,
    width: 169,
    backgroundColor: Color.colorGainsboro,
  },
  myTrainingProgramChild5: {
    top: 2197,
    left: 988,
    width: 321,
    height: 53,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild6: {
    top: 2210,
    left: 966,
    width: 343,
    height: 57,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  myTrainingProgramChild7: {
    height: 330,
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    left: 37,
  },
  myTrainingProgramChild8: {
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
  text1: {
    top: 125,
    left: 525,
    fontSize: FontSize.size_46xl,
    position: "absolute",
  },
  myTrainingProgramChild9: {
    top: 129,
  },
  myTrainingProgramChild10: {
    top: 159,
  },
  myTrainingProgramChild11: {
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
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild12: {
    right: "38.62%",
    left: "58.95%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild13: {
    right: "8%",
    left: "89.57%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild14: {
    right: "73.27%",
    left: "24.3%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild15: {
    right: "42.02%",
    left: "55.55%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild16: {
    right: "11.4%",
    left: "86.17%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild17: {
    right: "76.61%",
    left: "20.96%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild18: {
    right: "45.36%",
    left: "52.21%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild19: {
    right: "14.73%",
    left: "82.84%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild20: {
    right: "79.94%",
    left: "17.63%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild21: {
    right: "48.69%",
    left: "48.88%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild22: {
    right: "18.07%",
    left: "79.5%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild23: {
    right: "83.2%",
    left: "14.36%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild24: {
    right: "51.95%",
    left: "45.61%",
    bottom: "10.66%",
    top: "88.09%",
    width: "2.43%",
    height: "1.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  myTrainingProgramChild25: {
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
    height: 62,
    width: 83,
    position: "absolute",
  },
  myTrainingProgramChild27: {
    top: 2310,
    left: 6,
    height: 250,
  },
  plashka1: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorGray_400,
  },
  likeActiveIcon: {
    left: 47,
    height: 65,
    top: 0,
  },
  text2: {
    top: 77,
    left: 0,
  },
  fav: {
    top: 73,
    left: 351,
    width: 172,
    height: 114,
    position: "absolute",
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
  text3: {
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
  text4: {
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
  text5: {
    left: 0,
    top: 0,
  },
  wrapper: {
    top: 86,
    left: 0,
    height: 37,
  },
  groupItem: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  groupInner: {
    left: 16,
  },
  groupChild1: {
    left: 44,
  },
  groupChild2: {
    left: 44,
  },
  groupChild3: {
    left: 33,
  },
  groupChild4: {
    left: 22,
  },
  groupChild5: {
    left: 10,
  },
  groupChild6: {
    left: 44,
  },
  groupChild7: {
    left: 33,
  },
  groupChild8: {
    left: 22,
  },
  groupChild9: {
    left: 10,
  },
  rectangleGroup: {
    height: 65,
    left: 0,
    top: 0,
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
  icon1: {
    left: 152,
    top: 70,
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
    position: "absolute",
  },
  icon2: {
    top: 2383,
    left: 398,
    height: 65,
  },
  myTrainingProgramChild28: {
    top: 328,
    height: 524,
  },
  text7: {
    top: 1413,
    width: 404,
    height: 58,
    left: 259,
    position: "absolute",
  },
  text8: {
    width: 554,
    height: 57,
  },
  pressable: {
    top: 1571,
  },
  text9: {
    top: 1740,
    left: 253,
    width: 207,
    height: 42,
    position: "absolute",
  },
  myTrainingProgramChild29: {
    top: 842,
    height: 772,
  },
  icon3: {
    top: 436,
  },
  icon4: {
    top: 953,
  },
  drive1: {
    top: 91,
    width: 140,
    left: 0,
  },
  text10: {
    fontWeight: "700",
    width: 601,
    left: 0,
    top: 0,
  },
  text11: {
    top: 182,
    width: 254,
    left: 0,
  },
  driveParent: {
    top: 946,
  },
  driveDropCross: {
    top: 96,
    height: 46,
    width: 601,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    left: 0,
    position: "absolute",
  },
  driveDropCrossParent: {
    top: 453,
  },
  myTrainingProgramChild30: {
    height: "4.22%",
    width: "39.7%",
    top: "84.26%",
    right: "55.16%",
    bottom: "11.52%",
    left: "5.14%",
    position: "absolute",
  },
  myTrainingProgram: {
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default MyTrainingProgram2;
