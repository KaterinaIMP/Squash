import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Video3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.video}>
      <View style={[styles.videoChild, styles.videoChildPosition]} />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("MyTrainingProgram3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
      </Pressable>
      <Text style={[styles.drop, styles.textTypo2]}>Drop</Text>
      <Text style={[styles.cross, styles.textTypo2]}>Cross</Text>
      <Text style={[styles.text, styles.textTypo2]}>Тактика</Text>
      <Text style={[styles.drive, styles.textTypo2]}>Drive</Text>
      <Image
        style={[styles.videoItem, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/group-54.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/555-34.png")}
      />
      <Image
        style={[styles.videoInner, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.videoChild1, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.videoChild2, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <View style={[styles.rectangleView, styles.videoChildPosition]} />
      <Text style={[styles.text1, styles.textTypo1]}>Боуст- драйв</Text>
      <Text
        style={[styles.text2, styles.textTypo1]}
      >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется бьющим игроком паралельно одной из боковых стен корта в его заднюю часть.
Драйв может наноситься с любой части корта (передней, центральной задней). Это основной удар в игре.
`}</Text>
      <Image
        style={styles.videoChild3}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={styles.polygonIcon}
        resizeMode="cover"
        source={require("../assets/polygon-5.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <Text style={[styles.text3, styles.textTypo2]}>15.06.2022</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-5.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("MyTrainingProgram2")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[styles.videoChild4, styles.videoChild4Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleParent, styles.groupViewLayout]}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={[styles.groupChild1, styles.groupChildLayout2]} />
          <View style={[styles.groupChild2, styles.groupChildLayout2]} />
          <View style={[styles.groupChild3, styles.groupChildLayout2]} />
          <View style={[styles.groupChild4, styles.groupChildLayout2]} />
          <View style={[styles.groupChild5, styles.groupChildPosition1]} />
          <View style={[styles.groupChild6, styles.groupChildPosition1]} />
          <View style={[styles.groupChild7, styles.groupChildPosition1]} />
          <View style={[styles.groupChild8, styles.groupChildPosition1]} />
        </View>
      </View>
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.plashka, styles.iconPosition]} />
        <View style={styles.fav}>
          <Image
            style={styles.likeActiveIcon}
            resizeMode="cover"
            source={require("../assets/like-active.png")}
          />
          <Image
            style={styles.likeActiveIcon}
            resizeMode="cover"
            source={require("../assets/like-unactive.png")}
          />
          <Text style={[styles.text4, styles.textTypo]}>Избранное</Text>
        </View>
        <View style={[styles.historyActive, styles.videoChild4Position]}>
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
          <View style={styles.historyUnactive}>
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
          <Text style={[styles.text5, styles.text5Position]}>Тренироки</Text>
        </Pressable>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text6, styles.textTypo]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.scheduleLayout]}>
          <View style={[styles.container, styles.scheduleLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild9, styles.groupLayout]} />
              <View style={[styles.groupChild10, styles.groupChildLayout1]} />
              <View style={[styles.groupChild11, styles.groupChildLayout1]} />
              <View style={[styles.groupChild12, styles.groupChildLayout]} />
              <View style={[styles.groupChild13, styles.groupChildLayout]} />
              <View style={[styles.groupChild14, styles.groupChildLayout]} />
              <View style={[styles.groupChild15, styles.groupChildLayout]} />
              <View style={[styles.groupChild16, styles.groupChildPosition]} />
              <View style={[styles.groupChild17, styles.groupChildPosition]} />
              <View style={[styles.groupChild18, styles.groupChildPosition]} />
              <View style={[styles.groupChild19, styles.groupChildPosition]} />
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
          <Text style={[styles.text6, styles.textTypo]}>Домой</Text>
        </View>
        <Image
          style={[styles.icon4, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/home-unactive.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoChildPosition: {
    width: 1440,
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 284,
    width: 279,
  },
  iconLayout3: {
    width: "100%",
    height: "100%",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 108,
    width: 42,
    top: 2165,
    position: "absolute",
  },
  videoChildLayout: {
    height: 40,
    width: 40,
    top: 469,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_41xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  videoChild4Position: {
    top: 63,
    position: "absolute",
  },
  groupViewLayout: {
    height: 57,
    width: 58,
    position: "absolute",
  },
  groupLayout1: {
    height: 14,
    width: 5,
    backgroundColor: Color.colorGoldenrod_100,
    top: 0,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 5,
    top: 43,
    width: 5,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  groupChildPosition1: {
    top: 32,
    height: 5,
    width: 5,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  menuPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  iconPosition: {
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
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
  text5Position: {
    top: 86,
    left: 0,
  },
  scheduleLayout: {
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
  iconLayout: {
    height: 51,
    width: 51,
    position: "absolute",
  },
  videoChild: {
    height: 330,
    backgroundColor: Color.colorGray_400,
    top: 0,
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    top: 81,
    left: 44,
    position: "absolute",
  },
  drop: {
    left: 469,
    fontSize: FontSize.size_31xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    top: 368,
  },
  cross: {
    top: 369,
    left: 730,
    fontSize: FontSize.size_31xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
  },
  text: {
    left: 999,
    fontSize: FontSize.size_31xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    top: 368,
  },
  drive: {
    left: 206,
    fontSize: FontSize.size_31xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    top: 368,
  },
  videoItem: {
    height: "1.95%",
    width: "24.31%",
    top: "86.84%",
    right: "55.21%",
    bottom: "11.21%",
    left: "20.49%",
    position: "absolute",
  },
  icon1: {
    left: 161,
  },
  icon2: {
    left: 113,
  },
  videoInner: {
    left: 774,
  },
  ellipseIcon: {
    left: 509,
  },
  videoChild1: {
    left: 1078,
  },
  videoChild2: {
    left: 248,
  },
  rectangleView: {
    top: 548,
    backgroundColor: Color.colorDarkslategray,
    height: 871,
  },
  text1: {
    top: 1314,
    left: 77,
    fontWeight: "700",
  },
  text2: {
    top: 1536,
    left: 99,
    width: 1288,
  },
  videoChild3: {
    top: 772,
    left: 503,
    width: 427,
    height: 432,
    position: "absolute",
  },
  polygonIcon: {
    top: 890,
    left: 696,
    width: 73,
    height: 84,
    position: "absolute",
  },
  groupIcon: {
    top: 1288,
    left: 1246,
    width: 120,
    height: 88,
    position: "absolute",
  },
  text3: {
    top: 125,
    left: 558,
    fontSize: FontSize.size_46xl,
  },
  vectorIcon: {
    top: 136,
    left: 153,
    borderRadius: Border.br_8xs,
    height: 56,
    width: 60,
    position: "absolute",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "84.24%",
    top: "4.14%",
    right: "9.24%",
    bottom: "92.58%",
    width: "6.53%",
    height: "3.28%",
    position: "absolute",
  },
  videoChild4: {
    left: 932,
    height: 284,
    width: 279,
  },
  groupChild: {
    top: 11,
    height: 46,
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_9xs,
    width: 58,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    left: 14,
  },
  groupInner: {
    left: 39,
  },
  groupChild1: {
    left: 39,
  },
  groupChild2: {
    left: 29,
  },
  groupChild3: {
    left: 19,
  },
  groupChild4: {
    left: 9,
  },
  groupChild5: {
    left: 39,
  },
  groupChild6: {
    left: 29,
  },
  groupChild7: {
    left: 19,
  },
  groupChild8: {
    left: 9,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 119,
    left: 1043,
  },
  plashka: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: Color.colorGray_400,
  },
  likeActiveIcon: {
    left: 47,
    width: 70,
    height: 65,
    top: 0,
    position: "absolute",
  },
  text4: {
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
    height: 65,
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
    height: 65,
    width: 60,
    top: 0,
    position: "absolute",
  },
  text5: {
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
  text6: {
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
  text7: {
    left: 0,
    top: 0,
  },
  container: {
    height: 37,
    top: 86,
    left: 0,
  },
  groupChild9: {
    top: 13,
    height: 52,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_9xs,
    width: 66,
    left: 0,
  },
  groupChild10: {
    left: 16,
  },
  groupChild11: {
    left: 44,
  },
  groupChild12: {
    left: 44,
  },
  groupChild13: {
    left: 33,
  },
  groupChild14: {
    left: 22,
  },
  groupChild15: {
    left: 10,
  },
  groupChild16: {
    left: 44,
  },
  groupChild17: {
    left: 33,
  },
  groupChild18: {
    left: 22,
  },
  groupChild19: {
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
  icon4: {
    left: 152,
    top: 70,
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
    position: "absolute",
  },
  video: {
    flex: 1,
    height: 2560,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "100%",
  },
});

export default Video3;
