import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Player3 = () => {
  return (
    <View style={styles.player}>
      <View style={styles.plashka} />
      <View style={[styles.regulations, styles.regulationsPosition]}>
        <View style={styles.buttonShadowBox} />
        <Image
          style={[styles.regulationsIcon, styles.iconLayout1]}
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
          style={styles.exercisesIconPosition}
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
          style={[styles.exercisesIcon1, styles.exercisesIconPosition]}
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
          style={[styles.exercisesIcon1, styles.exercisesIconPosition]}
          resizeMode="cover"
          source={require("../assets/exercises1.png")}
        />
      </View>
      <Text style={[styles.daysOfThe, styles.decemberTypo]}>
        ПН ВТ СР ЧТ ПТ СБ ВС
      </Text>
      <Text style={[styles.december, styles.decemberTypo]}>ДЕКАБРЬ</Text>
      <View style={[styles.playerChild, styles.childBorder]} />
      <Text style={styles.text}>Добро пожаловать, Кристи!</Text>
      <View style={[styles.selection, styles.selectionLayout]}>
        <View style={[styles.selectionChild, styles.childBorder]} />
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
      <View style={[styles.plashka1, styles.plashkaPosition]} />
      <Image
        style={[styles.homeIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/home-active.png")}
      />
      <Image
        style={[styles.privateIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/private.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/like-active.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/like-unactive.png")}
      />
      <View style={styles.playerItem} />
      <View style={styles.playerInner} />
      <View style={styles.rectangleView} />
      <Text style={[styles.text8, styles.textTypo1]}>Домой</Text>
      <Text style={[styles.text9, styles.textTypo1]}>Избранное</Text>
      <Text style={[styles.text10, styles.textTypo1]}>Тренироки</Text>
      <Text style={[styles.text11, styles.textTypo1]}>Профиль</Text>
      <Text style={[styles.text12, styles.textTypo]}>{`Начать готовую
тренировку`}</Text>
      <Text style={[styles.text13, styles.textTypo3]}>смотреть правила</Text>
      <Image
        style={[styles.regulationsIcon1, styles.regulationsIconLayout]}
        resizeMode="cover"
        source={require("../assets/regulations3.png")}
      />
      <Text style={[styles.text14, styles.textTypo]}>{`Создать свою 
тренировку`}</Text>
      <Text style={[styles.text15, styles.textTypo3]}>техника игры</Text>
      <Image
        style={[styles.regulationsIcon2, styles.regulationsIconLayout]}
        resizeMode="cover"
        source={require("../assets/regulations3.png")}
      />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={styles.groupChild} />
          <Text style={[styles.text16, styles.textTypo3]}>
            Ты можешь выбрать Готовую тренировку, собранную профи. Рекомендуем
            новичкам!
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-111.png")}
        />
      </View>
      <View style={[styles.playerChild1, styles.playerChildShadowBox]} />
      <View style={styles.menu}>
        <View style={[styles.plashka2, styles.plashkaPosition]} />
        <View style={styles.fav}>
          <Image
            style={[styles.likeActiveIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/like-active.png")}
          />
          <Image
            style={[styles.likeActiveIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/like-unactive.png")}
          />
          <Text style={[styles.text17, styles.textTypo1]}>Избранное</Text>
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
          <Text style={[styles.text18, styles.text18Position]}>Тренироки</Text>
        </View>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text19, styles.textTypo1]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text20, styles.textTypo1]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <View style={[styles.groupChild1, styles.groupChildLayout1]} />
              <View style={[styles.groupChild2, styles.groupChildLayout1]} />
              <View style={[styles.groupChild3, styles.groupChildLayout]} />
              <View style={[styles.groupChild4, styles.groupChildLayout]} />
              <View style={[styles.groupChild5, styles.groupChildLayout]} />
              <View style={[styles.groupChild6, styles.groupChildLayout]} />
              <View style={[styles.groupChild7, styles.groupChildPosition]} />
              <View style={[styles.groupChild8, styles.groupChildPosition]} />
              <View style={[styles.groupChild9, styles.groupChildPosition]} />
              <View style={[styles.groupChild10, styles.groupChildPosition]} />
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
            style={[styles.homeActiveIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/home-active.png")}
          />
          <Text style={[styles.text19, styles.textTypo1]}>Домой</Text>
        </View>
      </View>
      <View style={[styles.playerChild2, styles.playerChildShadowBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  regulationsPosition: {
    width: 1238,
    top: 1127,
    left: 103,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  workoutLayout: {
    height: 389,
    width: 1238,
    position: "absolute",
  },
  exercisesIconPosition: {
    bottom: "38.56%",
    top: "20.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "7.11%",
    right: "78.92%",
    width: "13.97%",
    height: "41.04%",
    borderRadius: Border.br_16xl,
    position: "absolute",
    overflow: "hidden",
  },
  decemberTypo: {
    color: Color.colorGoldenrod_200,
    left: 177,
    fontSize: FontSize.size_45xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  childBorder: {
    height: 5,
    borderTopWidth: 5,
    borderColor: Color.colorGoldenrod_200,
    borderStyle: "solid",
    position: "absolute",
  },
  selectionLayout: {
    height: 157,
    width: 122,
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
  plashkaPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    backgroundColor: Color.colorGray_400,
    position: "absolute",
    width: "100%",
  },
  iconPosition: {
    top: "94.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
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
  textTypo: {
    left: 449,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    textTransform: "uppercase",
    fontSize: FontSize.size_53xl,
    position: "absolute",
  },
  regulationsIconLayout: {
    width: "12.01%",
    height: "6.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_16xl,
    position: "absolute",
    overflow: "hidden",
  },
  parentLayout: {
    height: 440,
    width: 1300,
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
  historyLayout1: {
    width: 60,
    height: 65,
    position: "absolute",
  },
  historyChildPosition: {
    top: 34,
    height: 31,
    width: 18,
    left: 0,
    position: "absolute",
  },
  historyItemPosition: {
    left: 21,
    top: 17,
    height: 48,
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
  text18Position: {
    top: 86,
    left: 0,
  },
  wrapperLayout: {
    width: 166,
    position: "absolute",
  },
  groupLayout: {
    width: 66,
    position: "absolute",
  },
  groupChildLayout1: {
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
    left: -3,
    width: 1443,
    height: 691,
    backgroundColor: Color.colorGray_400,
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
    color: Color.colorWhite,
    textTransform: "uppercase",
    fontSize: FontSize.size_53xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  regulations: {
    height: 415,
    position: "absolute",
  },
  exercises1: {
    height: "22.86%",
    width: "53.23%",
    top: "29.46%",
    left: "31.1%",
    display: "none",
    color: Color.colorWhite,
    textTransform: "uppercase",
    fontSize: FontSize.size_53xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  workout: {
    top: 751,
    left: 103,
    height: 389,
  },
  exercisesIcon1: {
    display: "none",
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
  playerChild: {
    top: 210,
    left: 99,
    width: 1243,
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
    width: 127,
  },
  selectionItem: {
    backgroundColor: Color.colorSandybrown,
    left: 0,
    top: 0,
  },
  selection: {
    top: 534,
    left: 981,
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
  plashka1: {
    top: "90.23%",
    height: "9.77%",
  },
  homeIcon: {
    height: "1.99%",
    width: "3.54%",
    right: "84.38%",
    bottom: "3.63%",
    left: "12.08%",
  },
  privateIcon: {
    height: "1.95%",
    width: "2.92%",
    right: "12.08%",
    bottom: "3.67%",
    left: "85%",
  },
  icon: {
    top: 2411,
    left: 514,
    height: 65,
  },
  playerItem: {
    top: 2436,
    left: 900,
    height: 31,
    width: 18,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  playerInner: {
    top: 2419,
    left: 921,
    height: 48,
    width: 18,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  rectangleView: {
    top: 2402,
    left: 942,
    width: 18,
    backgroundColor: Color.colorGainsboro,
    height: 65,
    position: "absolute",
  },
  text8: {
    left: 146,
    top: 2488,
    fontSize: FontSize.size_11xl,
  },
  text9: {
    left: 471,
    top: 2488,
    fontSize: FontSize.size_11xl,
  },
  text10: {
    left: 850,
    top: 2488,
    fontSize: FontSize.size_11xl,
  },
  text11: {
    left: 1173,
    top: 2488,
    fontSize: FontSize.size_11xl,
  },
  text12: {
    top: 830,
  },
  text13: {
    top: 1997,
    left: 460,
    color: Color.colorWhite,
    textTransform: "uppercase",
    fontSize: FontSize.size_53xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  regulationsIcon1: {
    top: "76.25%",
    right: "74.58%",
    bottom: "17.1%",
    left: "13.4%",
  },
  text14: {
    top: 1210,
  },
  text15: {
    top: 1633,
    left: 458,
    color: Color.colorWhite,
    textTransform: "uppercase",
    fontSize: FontSize.size_53xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  regulationsIcon2: {
    top: "62.03%",
    right: "74.72%",
    bottom: "31.32%",
    left: "13.26%",
  },
  groupChild: {
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
  text16: {
    top: 120,
    left: 75,
    fontSize: FontSize.size_41xl,
    color: Color.bleackstrong,
    width: 1006,
    height: 227,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 57,
    left: 374,
    width: 467,
    height: 40,
    position: "absolute",
  },
  groupParent: {
    top: 271,
    left: 72,
  },
  playerChild1: {
    height: 1078,
    width: 1238,
    top: 1127,
    left: 103,
  },
  plashka2: {
    height: "100%",
    top: "0%",
  },
  likeActiveIcon: {
    left: 47,
    height: 65,
    top: 0,
  },
  text17: {
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
  text18: {
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
  privateIcon1: {
    height: "45.87%",
    width: "29.37%",
    right: "34.97%",
    bottom: "54.13%",
    left: "35.66%",
    top: "0%",
  },
  text19: {
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
  text20: {
    left: 0,
    top: 0,
  },
  wrapper: {
    height: 37,
    top: 86,
    left: 0,
  },
  groupInner: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  groupChild1: {
    left: 16,
  },
  groupChild2: {
    left: 44,
  },
  groupChild3: {
    left: 44,
  },
  groupChild4: {
    left: 33,
  },
  groupChild5: {
    left: 22,
  },
  groupChild6: {
    left: 10,
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
    top: "90.27%",
    right: "-0.14%",
    bottom: "-0.04%",
    left: "0.14%",
    height: "9.77%",
    position: "absolute",
    width: "100%",
  },
  playerChild2: {
    top: 2311,
    left: -49,
    width: 1637,
    height: 249,
  },
  player: {
    flex: 1,
    height: 2560,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "100%",
  },
});

export default Player3;
