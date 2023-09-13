import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Player = () => {
  return (
    <View style={styles.player}>
      <View style={styles.plashka} />
      <LinearGradient
        style={styles.playerChild}
        locations={[0, 1]}
        colors={["#f7ab39", "#fff"]}
        useAngle={true}
        angle={-29.16}
      />
      <View style={styles.regulations}>
        <View style={styles.buttonShadowBox} />
        <Image
          style={[styles.regulationsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/regulations1.png")}
        />
        <Text style={[styles.exercises, styles.textTypo3]} />
      </View>
      <View style={[styles.workout, styles.workoutLayout]}>
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.exercises1, styles.textTypo3]}>
          система создает тренировку
        </Text>
        <Image
          style={[styles.exercisesIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/exercises1.png")}
        />
      </View>
      <View style={[styles.workout1, styles.workoutLayout]}>
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.exercises1, styles.textTypo3]}>
          система создает тренировку
        </Text>
        <Image
          style={[styles.exercisesIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/exercises1.png")}
        />
      </View>
      <View style={[styles.workout2, styles.workoutLayout]}>
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.exercises1, styles.textTypo3]}>
          система создает тренировку
        </Text>
        <Image
          style={[styles.exercisesIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/exercises1.png")}
        />
      </View>
      <Text style={[styles.daysOfThe, styles.decemberTypo]}>
        ПН ВТ СР ЧТ ПТ СБ ВС
      </Text>
      <Text style={[styles.december, styles.decemberTypo]}>ДЕКАБРЬ</Text>
      <Text style={styles.text}>Добро пожаловать, Кристи!</Text>
      <View style={[styles.selection, styles.selectionLayout]}>
        <View style={styles.selectionChild} />
        <View style={[styles.selectionItem, styles.selectionLayout]} />
      </View>
      <View style={styles.kalendar}>
        <Text style={[styles.text1, styles.textTypo2]}>13</Text>
        <Text style={[styles.text2, styles.textTypo2]}>14</Text>
        <Text style={[styles.text3, styles.textTypo2]}>15</Text>
        <Text style={[styles.text4, styles.textTypo2]}>16</Text>
        <Text style={[styles.text5, styles.textTypo2]}>17</Text>
        <Text style={[styles.text6, styles.textTypo2]}>19</Text>
        <Text style={[styles.text7, styles.textTypo2]}>18</Text>
      </View>
      <Text style={[styles.text8, styles.textTypo1]}>{`Начать готовую
тренировку`}</Text>
      <Text style={[styles.text9, styles.textTypo3]}>смотреть правила</Text>
      <Text style={[styles.text10, styles.textTypo1]}>{`Создать свою 
тренировку`}</Text>
      <Text style={[styles.text11, styles.textTypo3]}>техника игры</Text>
      <Image
        style={[styles.playerItem, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-160.png")}
      />
      <Image
        style={[styles.playerInner, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-158.png")}
      />
      <Image
        style={[styles.groupIcon, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-159.png")}
      />
      <Image
        style={[styles.playerChild1, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-161.png")}
      />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.plashka1, styles.menuPosition]} />
        <View style={styles.fav}>
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
          <Text style={[styles.text12, styles.textTypo]}>Избранное</Text>
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
        <View style={[styles.history, styles.historyLayout]}>
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
          <Text style={[styles.text13, styles.text13Position]}>Тренироки</Text>
        </View>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text14, styles.textTypo]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text15, styles.textTypo]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupChildLayout1]}>
            <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
              <View style={[styles.groupChild, styles.groupChildLayout1]} />
              <View style={[styles.groupItem, styles.groupLayout]} />
              <View style={[styles.groupInner, styles.groupLayout]} />
              <View style={[styles.rectangleView, styles.groupChildLayout]} />
              <View style={[styles.groupChild1, styles.groupChildLayout]} />
              <View style={[styles.groupChild2, styles.groupChildLayout]} />
              <View style={[styles.groupChild3, styles.groupChildLayout]} />
              <View style={[styles.groupChild4, styles.groupChildPosition]} />
              <View style={[styles.groupChild5, styles.groupChildPosition]} />
              <View style={[styles.groupChild6, styles.groupChildPosition]} />
              <View style={[styles.groupChild7, styles.groupChildPosition]} />
            </View>
          </View>
        </View>
        <View style={styles.home}>
          <Image
            style={styles.homeUnactiveIcon}
            resizeMode="cover"
            source={require("../assets/home-unactive.png")}
          />
          <Image
            style={[styles.homeActiveIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home-active.png")}
          />
          <Text style={[styles.text14, styles.textTypo]}>Домой</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    textTransform: "uppercase",
    fontSize: FontSize.size_53xl,
    position: "absolute",
  },
  workoutLayout: {
    height: 389,
    width: 1238,
    position: "absolute",
  },
  decemberTypo: {
    color: Color.colorGray_400,
    left: 177,
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  selectionLayout: {
    height: 157,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_46xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    top: 0,
    position: "absolute",
  },
  textTypo1: {
    left: 449,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    textTransform: "uppercase",
    fontSize: FontSize.size_53xl,
    position: "absolute",
  },
  playerLayout: {
    height: 240,
    width: 240,
    left: 145,
    position: "absolute",
  },
  menuPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
  text13Position: {
    top: 86,
    left: 0,
  },
  wrapperLayout: {
    width: 166,
    position: "absolute",
  },
  groupChildLayout1: {
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
  plashka: {
    height: 691,
    width: 1443,
    left: -3,
    backgroundColor: Color.colorGray_400,
    top: 0,
    position: "absolute",
  },
  playerChild: {
    top: 207,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 33,
    elevation: 33,
    height: 484,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: -11,
      height: 35,
    },
    width: 1443,
    left: -3,
    position: "absolute",
  },
  buttonShadowBox: {
    elevation: 50,
    shadowRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_16xl,
    left: "0%",
    bottom: "18.98%",
    right: "0%",
    height: "81.02%",
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: -11,
      height: 35,
    },
    position: "absolute",
    width: "100%",
  },
  regulationsIcon: {
    top: "20.11%",
    bottom: "38.85%",
    display: "none",
    left: "7.11%",
    right: "78.92%",
    width: "13.97%",
    height: "41.04%",
    maxWidth: "100%",
    borderRadius: Border.br_16xl,
  },
  exercises: {
    height: "45.71%",
    width: "50.4%",
    top: "15.58%",
    left: "29.89%",
  },
  regulations: {
    top: 1127,
    height: 415,
    width: 1238,
    left: 103,
    position: "absolute",
  },
  exercises1: {
    height: "22.86%",
    width: "53.23%",
    top: "29.46%",
    left: "31.1%",
    display: "none",
  },
  exercisesIcon: {
    top: "20.4%",
    bottom: "38.56%",
    display: "none",
    left: "7.11%",
    right: "78.92%",
    width: "13.97%",
    height: "41.04%",
    maxWidth: "100%",
    borderRadius: Border.br_16xl,
  },
  workout: {
    top: 751,
    left: 103,
    height: 389,
  },
  workout1: {
    top: 1890,
    left: 103,
    height: 389,
  },
  workout2: {
    top: 1526,
    left: 101,
  },
  daysOfThe: {
    top: 421,
  },
  december: {
    top: 304,
  },
  text: {
    top: 102,
    left: 272,
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  selectionChild: {
    top: 155,
    left: -2,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod_200,
    borderTopWidth: 5,
    width: 127,
    height: 5,
    position: "absolute",
  },
  selectionItem: {
    left: 2,
    width: 122,
    backgroundColor: Color.colorGray_400,
    top: 0,
  },
  selection: {
    top: 534,
    left: 981,
    width: 124,
  },
  text1: {
    left: 0,
  },
  text2: {
    left: 162,
  },
  text3: {
    left: 329,
  },
  text4: {
    left: 500,
  },
  text5: {
    left: 652,
  },
  text6: {
    left: 998,
  },
  text7: {
    left: 826,
  },
  kalendar: {
    top: 550,
    left: 180,
    width: 1071,
    height: 80,
    position: "absolute",
  },
  text8: {
    top: 830,
  },
  text9: {
    top: 1997,
    left: 460,
  },
  text10: {
    top: 1210,
  },
  text11: {
    top: 1633,
    left: 458,
  },
  playerItem: {
    top: 824,
  },
  playerInner: {
    top: 1206,
  },
  groupIcon: {
    top: 1956,
  },
  playerChild1: {
    top: 1593,
  },
  plashka1: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.colorGray_400,
  },
  likeActiveIcon: {
    left: 47,
    width: 70,
    position: "absolute",
  },
  text12: {
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
  text13: {
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
    top: "0%",
  },
  text14: {
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
  text15: {
    left: 0,
    top: 0,
  },
  wrapper: {
    height: 37,
    top: 86,
    left: 0,
  },
  groupChild: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  groupItem: {
    left: 16,
  },
  groupInner: {
    left: 44,
  },
  rectangleView: {
    left: 44,
  },
  groupChild1: {
    left: 33,
  },
  groupChild2: {
    left: 22,
  },
  groupChild3: {
    left: 10,
  },
  groupChild4: {
    left: 44,
  },
  groupChild5: {
    left: 33,
  },
  groupChild6: {
    left: 22,
  },
  groupChild7: {
    left: 10,
  },
  rectangleParent: {
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
    width: 51,
    height: 51,
    top: 0,
    position: "absolute",
  },
  homeActiveIcon: {
    height: "46.79%",
    width: "47.66%",
    right: "26.17%",
    bottom: "53.21%",
    left: "26.17%",
    top: "0%",
  },
  home: {
    top: 70,
    left: 124,
    width: 107,
    height: 109,
    position: "absolute",
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
  },
  player: {
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Player;
