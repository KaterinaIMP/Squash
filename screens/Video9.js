import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Video9 = () => {
  return (
    <View style={styles.video}>
      <View style={[styles.videoChild, styles.videoChildLayout1]} />
      <Image
        style={[styles.videoItem, styles.videoLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.videoInner}
        resizeMode="cover"
        source={require("../assets/arrow-3.png")}
      />
      <Text style={[styles.drop, styles.textTypo2]}>Drop</Text>
      <Text style={[styles.cross, styles.textTypo2]}>Cross</Text>
      <Text style={[styles.text, styles.textTypo2]}>Тактика</Text>
      <Text style={[styles.drive, styles.textTypo2]}>Drive</Text>
      <Image
        style={[styles.ellipseIcon, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-232.png")}
      />
      <Image
        style={[styles.videoChild1, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-232.png")}
      />
      <Image
        style={[styles.videoChild2, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-232.png")}
      />
      <Image
        style={[styles.videoChild3, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/group-54.png")}
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
      <View style={[styles.rectangleView, styles.videoChildLayout1]} />
      <Text style={[styles.text1, styles.textTypo1]}>Боуст- драйв</Text>
      <Text
        style={[styles.text2, styles.textTypo1]}
      >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется бьющим игроком паралельно одной из боковых стен корта в его заднюю часть.
Драйв может наноситься с любой части корта (передней, центральной задней). Это основной удар в игре.
`}</Text>
      <Image
        style={styles.videoChild4}
        resizeMode="cover"
        source={require("../assets/group-199.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={styles.videoChild5}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <Text style={[styles.text3, styles.textTypo2]}>ГОТОВАЯ ТРЕНИРОВКА</Text>
      <Image
        style={[styles.videoChild6, styles.videoLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.videoChild7}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <View style={[styles.boustParent, styles.videoChildLayout1]}>
        <Text style={styles.boust}>BOUST</Text>
        <View style={styles.plashka} />
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-298.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-2981.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/star-141.png")}
        />
        <Image
          style={[styles.starIcon, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-301.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
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
      <View style={styles.iconoirrotateCameraRight} />
      <Image
        style={[styles.videoChild8, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/group-200.png")}
      />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.plashka1, styles.iconPosition]} />
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
          <Text style={[styles.text4, styles.textTypo]}>Избранное</Text>
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
          <Text style={[styles.text5, styles.text5Position]}>Тренироки</Text>
        </View>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text6, styles.textTypo]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupChild2Layout]}>
            <View style={[styles.rectangleParent, styles.groupChild2Layout]}>
              <View style={[styles.groupChild2, styles.groupChild2Layout]} />
              <View style={[styles.groupChild3, styles.groupChildLayout1]} />
              <View style={[styles.groupChild4, styles.groupChildLayout1]} />
              <View style={[styles.groupChild5, styles.groupChildLayout]} />
              <View style={[styles.groupChild6, styles.groupChildLayout]} />
              <View style={[styles.groupChild7, styles.groupChildLayout]} />
              <View style={[styles.groupChild8, styles.groupChildLayout]} />
              <View style={[styles.groupChild9, styles.groupChildPosition]} />
              <View style={[styles.groupChild10, styles.groupChildPosition]} />
              <View style={[styles.groupChild11, styles.groupChildPosition]} />
              <View style={[styles.groupChild12, styles.groupChildPosition]} />
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
  videoChildLayout1: {
    width: 1440,
    position: "absolute",
  },
  videoLayout: {
    height: 284,
    width: 279,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  videoChildLayout: {
    height: 40,
    width: 40,
    top: 469,
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
  textTypo1: {
    fontSize: FontSize.size_41xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  groupPosition: {
    bottom: "72.01%",
    top: "17.96%",
    height: "10.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: "3.67%",
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
  wrapperLayout: {
    width: 166,
    position: "absolute",
  },
  groupChild2Layout: {
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
    width: 51,
    height: 51,
    position: "absolute",
  },
  videoChild: {
    height: 330,
    backgroundColor: Color.colorGray_400,
    width: 1440,
    left: 0,
    top: 0,
  },
  videoItem: {
    top: 81,
    left: 44,
  },
  videoInner: {
    top: 147,
    width: 63,
    height: 37,
    left: 152,
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
  ellipseIcon: {
    left: 774,
  },
  videoChild1: {
    left: 509,
  },
  videoChild2: {
    left: 1078,
  },
  videoChild3: {
    left: 248,
  },
  groupIcon: {
    height: "1.95%",
    width: "24.31%",
    top: "86.84%",
    right: "55.21%",
    bottom: "11.21%",
    left: "20.49%",
    position: "absolute",
  },
  icon: {
    left: 161,
  },
  icon1: {
    left: 113,
  },
  rectangleView: {
    top: 548,
    backgroundColor: Color.colorDarkslategray,
    height: 871,
    left: 0,
  },
  text1: {
    top: 1314,
    left: 77,
    fontWeight: "700",
  },
  text2: {
    top: 1536,
    left: 99,
    width: 1298,
  },
  videoChild4: {
    top: 772,
    left: 503,
    width: 427,
    height: 432,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.28%",
    width: "6.53%",
    top: "23.75%",
    right: "5.56%",
    bottom: "72.97%",
    left: "87.92%",
    position: "absolute",
  },
  videoChild5: {
    top: 1288,
    left: 1246,
    width: 120,
    height: 88,
    position: "absolute",
  },
  text3: {
    top: 130,
    left: 358,
    fontSize: FontSize.size_46xl,
  },
  videoChild6: {
    top: 80,
    left: 1142,
  },
  videoChild7: {
    top: 134,
    left: 1240,
    width: 83,
    height: 62,
    position: "absolute",
  },
  boust: {
    top: 69,
    left: 443,
    fontSize: FontSize.size_29xl,
    width: 168,
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  plashka: {
    top: "100%",
    bottom: "-100%",
    backgroundColor: Color.colorGray_300,
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    right: "73.76%",
    left: "22.66%",
    width: "3.58%",
    top: "17.96%",
    height: "10.03%",
  },
  groupItem: {
    right: "67.92%",
    left: "28.49%",
    width: "3.58%",
    top: "17.96%",
    height: "10.03%",
  },
  groupInner: {
    right: "56.07%",
    left: "40.26%",
  },
  starIcon: {
    width: "3.63%",
    right: "62.01%",
    left: "34.36%",
    top: "17.96%",
    height: "10.03%",
  },
  groupChild1: {
    right: "50.12%",
    left: "46.21%",
  },
  icon2: {
    left: 129,
  },
  icon3: {
    left: 217,
  },
  boustParent: {
    top: 2109,
    left: 1,
    height: 451,
  },
  iconoirrotateCameraRight: {
    top: 655,
    left: 1107,
    width: 58,
    height: 58,
    position: "absolute",
    overflow: "hidden",
  },
  videoChild8: {
    height: "3.55%",
    width: "6.31%",
    top: "23.61%",
    right: "87.06%",
    bottom: "72.83%",
    left: "6.63%",
    position: "absolute",
  },
  plashka1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    backgroundColor: Color.colorGray_400,
  },
  likeActiveIcon: {
    left: 47,
    width: 70,
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
  wrapper: {
    top: 86,
    left: 0,
    height: 37,
  },
  groupChild2: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  groupChild3: {
    left: 16,
  },
  groupChild4: {
    left: 44,
  },
  groupChild5: {
    left: 44,
  },
  groupChild6: {
    left: 33,
  },
  groupChild7: {
    left: 22,
  },
  groupChild8: {
    left: 10,
  },
  groupChild9: {
    left: 44,
  },
  groupChild10: {
    left: 33,
  },
  groupChild11: {
    left: 22,
  },
  groupChild12: {
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
    top: 70,
    left: 152,
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
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Video9;
