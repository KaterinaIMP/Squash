import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Player1 = () => {
  return (
    <View style={styles.player}>
      <View style={styles.plashka} />
      <View style={styles.regulations}>
        <View style={styles.buttonShadowBox} />
        <Image
          style={[styles.regulationsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/regulations2.png")}
        />
        <Text style={[styles.exercises, styles.textTypo4]} />
      </View>
      <View style={[styles.workout, styles.workoutLayout]}>
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.exercises1, styles.textTypo4]}>
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
        <Text style={[styles.exercises1, styles.textTypo4]}>
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
        <Text style={[styles.exercises1, styles.textTypo4]}>
          система создает тренировку
        </Text>
        <Image
          style={[styles.exercisesIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/exercises1.png")}
        />
      </View>
      <View style={styles.playerChild} />
      <Text style={styles.text}>Добро пожаловать, Кристи!</Text>
      <Image
        style={styles.selectionIcon}
        resizeMode="cover"
        source={require("../assets/selection.png")}
      />
      <View style={[styles.daysOfTheWeekParent, styles.scrollIconPosition]}>
        <Text style={[styles.daysOfThe, styles.decemberTypo]}>
          ПН ВТ СР ЧТ ПТ СБ ВС
        </Text>
        <Text style={[styles.december, styles.decemberTypo]}>Март</Text>
        <View style={styles.kalendar}>
          <Text style={[styles.text1, styles.textTypo3]}>6</Text>
          <Text style={[styles.text2, styles.textTypo3]}>7</Text>
          <Text style={[styles.text3, styles.textTypo3]}>8</Text>
          <Text style={[styles.text4, styles.textTypo3]}>9</Text>
          <Text style={[styles.text5, styles.textTypo3]}>10</Text>
          <Text style={[styles.text6, styles.textTypo3]}>12</Text>
          <Text style={[styles.text7, styles.textTypo3]}>11</Text>
        </View>
      </View>
      <Text style={[styles.text8, styles.textTypo2]}>{`Начать готовую
тренировку`}</Text>
      <Text style={[styles.text9, styles.textTypo4]}>смотреть правила</Text>
      <Text style={[styles.text10, styles.textTypo2]}>{`Создать свою 
тренировку`}</Text>
      <Text style={[styles.text11, styles.textTypo4]}>техника игры</Text>
      <Image
        style={[styles.playerItem, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-1601.png")}
      />
      <Image
        style={[styles.playerInner, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-1581.png")}
      />
      <Image
        style={[styles.groupIcon, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-1591.png")}
      />
      <Image
        style={[styles.playerChild1, styles.playerLayout]}
        resizeMode="cover"
        source={require("../assets/group-1611.png")}
      />
      <Image
        style={[styles.scrollIcon, styles.scrollIconPosition]}
        resizeMode="cover"
        source={require("../assets/scroll.png")}
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
          <Text style={[styles.text12, styles.textTypo1]}>Избранное</Text>
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
          <Text style={[styles.text14, styles.textTypo1]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text15, styles.textTypo1]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupChildLayout2]}>
            <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
              <View style={[styles.groupChild, styles.groupChildLayout2]} />
              <View style={[styles.groupItem, styles.groupLayout1]} />
              <View style={[styles.groupInner, styles.groupLayout1]} />
              <View style={[styles.rectangleView, styles.groupChildLayout1]} />
              <View style={[styles.groupChild1, styles.groupChildLayout1]} />
              <View style={[styles.groupChild2, styles.groupChildLayout1]} />
              <View style={[styles.groupChild3, styles.groupChildLayout1]} />
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
          <Text style={[styles.text14, styles.textTypo1]}>Домой</Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={styles.groupChild8} />
              <Text style={[styles.text17, styles.textTypo]}>
                Планируй свои тренировки в разделе Календарь
              </Text>
            </View>
          </View>
          <Text style={[styles.text18, styles.textTypo]}>Понятно</Text>
        </View>
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-232.png")}
        />
        <Image
          style={[styles.groupChild9, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-232.png")}
        />
        <Image
          style={[styles.groupChild10, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-232.png")}
        />
        <Image
          style={[styles.groupChild11, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-25.png")}
        />
      </View>
      <View style={[styles.playerChild2, styles.playerChildShadowBox]} />
      <View style={[styles.playerChild3, styles.playerChildShadowBox]} />
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
  textTypo4: {
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
  scrollIconPosition: {
    top: 304,
    position: "absolute",
  },
  decemberTypo: {
    color: Color.colorGoldenrod_200,
    left: 0,
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.size_46xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    top: 0,
    position: "absolute",
  },
  textTypo2: {
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
    top: 91,
  },
  text13Position: {
    top: 86,
    left: 0,
  },
  wrapperLayout: {
    width: 166,
    position: "absolute",
  },
  groupChildLayout2: {
    width: 66,
    position: "absolute",
  },
  groupLayout1: {
    height: 16,
    width: 6,
    backgroundColor: Color.colorGainsboro,
    top: 0,
    position: "absolute",
  },
  groupChildLayout1: {
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
  groupLayout: {
    height: 440,
    width: 1300,
    position: "absolute",
  },
  textTypo: {
    color: Color.bleackstrong,
    fontSize: FontSize.size_41xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 40,
    top: 69,
    position: "absolute",
  },
  playerChildShadowBox: {
    backgroundColor: Color.colorGray_600,
    elevation: 60,
    shadowRadius: 60,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  plashka: {
    width: 1443,
    height: 691,
    backgroundColor: Color.colorGray_400,
    left: -3,
    top: 0,
    position: "absolute",
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 50,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_16xl,
    left: "0%",
    bottom: "18.98%",
    right: "0%",
    height: "81.02%",
    top: "0%",
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
  playerChild: {
    top: 210,
    left: 99,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod_200,
    borderTopWidth: 5,
    width: 1243,
    height: 5,
    position: "absolute",
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
  selectionIcon: {
    top: 537,
    left: 326,
    width: 778,
    height: 157,
    position: "absolute",
  },
  daysOfThe: {
    top: 117,
  },
  december: {
    top: 0,
  },
  text1: {
    left: 0,
  },
  text2: {
    left: 166,
  },
  text3: {
    left: 332,
  },
  text4: {
    left: 498,
  },
  text5: {
    left: 630,
  },
  text6: {
    left: 976,
  },
  text7: {
    left: 804,
  },
  kalendar: {
    top: 246,
    left: 25,
    width: 1049,
    height: 80,
    position: "absolute",
  },
  daysOfTheWeekParent: {
    left: 177,
    width: 1085,
    height: 326,
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
  scrollIcon: {
    left: 1248,
    width: 84,
    height: 62,
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
    top: 101,
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
    top: 91,
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
    top: "42.4%",
    right: "8.61%",
    bottom: "14%",
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
    top: 91,
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
    top: 98,
    left: 124,
    width: 107,
    height: 109,
    position: "absolute",
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
  },
  groupChild8: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGoldenrod_100,
    elevation: 60,
    shadowRadius: 60,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    height: 440,
    width: 1300,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    top: 0,
    position: "absolute",
  },
  text17: {
    top: 124,
    left: 75,
    width: 981,
    height: 151,
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  text18: {
    top: 319,
    left: 519,
    fontWeight: "700",
    width: 271,
    height: 61,
  },
  ellipseIcon: {
    left: 405,
  },
  groupChild9: {
    left: 546,
  },
  groupChild10: {
    left: 689,
  },
  groupChild11: {
    left: 832,
  },
  groupParent: {
    left: 70,
    top: 751,
  },
  playerChild2: {
    top: 1191,
    left: 112,
    width: 1229,
    height: 1014,
  },
  playerChild3: {
    top: 2310,
    width: 820,
    height: 266,
    left: -3,
  },
  player: {
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Player1;
