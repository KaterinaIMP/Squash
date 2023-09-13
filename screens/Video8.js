import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Video8 = () => {
  return (
    <View style={styles.video}>
      <View style={[styles.videoChild, styles.videoChildLayout1]} />
      <Image
        style={styles.videoItem}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.drop, styles.textTypo3]}>Drop</Text>
      <Text style={[styles.cross, styles.textTypo3]}>Cross</Text>
      <Text style={[styles.text, styles.textTypo3]}>Тактика</Text>
      <Text style={[styles.drive, styles.textTypo3]}>Drive</Text>
      <Image
        style={[styles.videoInner, styles.vectorIconLayout1]}
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
      <View style={styles.lineView} />
      <View style={[styles.videoChild3, styles.videoChildPosition]} />
      <View style={[styles.videoChild4, styles.videoChildPosition]} />
      <Image
        style={[styles.videoChild5, styles.videoChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <View style={[styles.rectangleView, styles.videoChildLayout1]} />
      <Text style={[styles.text1, styles.textTypo2]}>Боуст- драйв</Text>
      <Text
        style={[styles.text2, styles.textTypo2]}
      >{`Прямой удар в переднюю стену корта, при котором мяч по прямой направляется бьющим игроком паралельно одной из боковых стен корта в его заднюю часть.
Драйв может наноситься с любой части корта (передней, центральной задней). Это основной удар в игре.
`}</Text>
      <Image
        style={styles.videoChild6}
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
      <Text style={[styles.text3, styles.textTypo3]}>15.06.2022</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupChild, styles.groupLayout1]} />
          </View>
        </View>
        <View style={[styles.groupContainer, styles.parentLayout]}>
          <View style={[styles.parent, styles.parentLayout]}>
            <Text
              style={[styles.text4, styles.textTypo1]}
            >{`Тренировка закончена! Ты сможешь найти ее в разделе Тренировки.
Жми        чтобы добавить в Избранное `}</Text>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout1]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
        <Text style={[styles.text5, styles.textTypo1]}>Понятно</Text>
      </View>
      <View style={[styles.boustParent, styles.videoChildLayout1]}>
        <Text style={styles.boust}>BOUST</Text>
        <View style={[styles.plashka, styles.plashkaPosition]} />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-298.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-298.png")}
        />
        <Image
          style={[styles.starIcon, styles.starIconLayout]}
          resizeMode="cover"
          source={require("../assets/star-141.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-30.png")}
        />
        <Image
          style={[styles.groupChild2, styles.starIconLayout]}
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
      <View style={[styles.menu, styles.plashkaPosition]}>
        <View style={[styles.plashka1, styles.iconPosition]} />
        <View style={styles.fav}>
          <Image
            style={[styles.likeActiveIcon, styles.unactiveLayout]}
            resizeMode="cover"
            source={require("../assets/like-active.png")}
          />
          <Image
            style={[styles.likeActiveIcon, styles.unactiveLayout]}
            resizeMode="cover"
            source={require("../assets/like-unactive.png")}
          />
          <Text style={[styles.text6, styles.textTypo]}>Избранное</Text>
        </View>
        <View style={styles.historyActive}>
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
          <View style={[styles.historyUnactive, styles.unactiveLayout]}>
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
          <Text style={[styles.text7, styles.text7Position]}>Тренироки</Text>
        </View>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text8, styles.textTypo]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text9, styles.textTypo]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupChild3Layout]}>
            <View style={[styles.rectangleParent, styles.groupChild3Layout]}>
              <View style={[styles.groupChild3, styles.groupChild3Layout]} />
              <View style={[styles.groupChild4, styles.groupChildLayout1]} />
              <View style={[styles.groupChild5, styles.groupChildLayout1]} />
              <View style={[styles.groupChild6, styles.groupChildLayout]} />
              <View style={[styles.groupChild7, styles.groupChildLayout]} />
              <View style={[styles.groupChild8, styles.groupChildLayout]} />
              <View style={[styles.groupChild9, styles.groupChildLayout]} />
              <View style={[styles.groupChild10, styles.groupChildPosition]} />
              <View style={[styles.groupChild11, styles.groupChildPosition]} />
              <View style={[styles.groupChild12, styles.groupChildPosition]} />
              <View style={[styles.groupChild13, styles.groupChildPosition]} />
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
          <Text style={[styles.text8, styles.textTypo]}>Домой</Text>
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
  textTypo3: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  vectorIconLayout1: {
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
  videoChildPosition: {
    bottom: "80.88%",
    top: "19.08%",
    width: "5.35%",
    height: "0.04%",
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_41xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 60,
    position: "absolute",
  },
  groupLayout1: {
    height: 440,
    width: 1300,
    position: "absolute",
  },
  parentLayout: {
    height: 230,
    width: 1195,
    position: "absolute",
  },
  textTypo1: {
    color: Color.bleackstrong,
    fontSize: FontSize.size_41xl,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  plashkaPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
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
  starIconLayout: {
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
  iconPosition: {
    top: "0%",
    position: "absolute",
  },
  unactiveLayout: {
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
  text7Position: {
    top: 86,
    left: 0,
  },
  wrapperLayout: {
    width: 166,
    position: "absolute",
  },
  groupChild3Layout: {
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
    left: 0,
    top: 0,
  },
  videoItem: {
    top: 81,
    width: 279,
    height: 284,
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
  videoInner: {
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
  ellipseIcon: {
    left: 774,
  },
  videoChild1: {
    left: 509,
  },
  videoChild2: {
    left: 1078,
  },
  lineView: {
    top: 489,
    left: 383,
    width: 77,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    position: "absolute",
  },
  videoChild3: {
    right: "51.42%",
    left: "43.23%",
  },
  videoChild4: {
    right: "31.91%",
    left: "62.74%",
  },
  videoChild5: {
    left: 248,
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
  videoChild6: {
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
  },
  vectorIcon1: {
    height: "3.28%",
    width: "6.53%",
    top: "4.14%",
    right: "9.24%",
    bottom: "92.58%",
    left: "84.24%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGoldenrod_100,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  text4: {
    height: 227,
    width: 1195,
    color: Color.bleackstrong,
    left: 0,
    top: 0,
  },
  vectorIcon2: {
    height: "36.52%",
    width: "7.87%",
    top: "63.48%",
    right: "78.41%",
    left: "13.72%",
    bottom: "0%",
    position: "absolute",
  },
  parent: {
    left: 0,
    top: 0,
  },
  groupContainer: {
    top: 61,
    left: 53,
  },
  text5: {
    top: 321,
    left: 542,
    width: 259,
    height: 61,
    fontWeight: "700",
  },
  groupParent: {
    top: 290,
    left: 70,
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
    height: "100%",
    right: "0%",
    position: "absolute",
  },
  groupItem: {
    right: "73.76%",
    left: "22.66%",
    width: "3.58%",
    bottom: "72.01%",
    top: "17.96%",
    height: "10.03%",
  },
  groupInner: {
    right: "67.92%",
    left: "28.49%",
    width: "3.58%",
    bottom: "72.01%",
    top: "17.96%",
    height: "10.03%",
  },
  starIcon: {
    right: "56.07%",
    left: "40.26%",
  },
  groupChild1: {
    width: "3.63%",
    right: "62.01%",
    left: "34.36%",
    bottom: "72.01%",
    top: "17.96%",
    height: "10.03%",
  },
  groupChild2: {
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
  plashka1: {
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    bottom: "0%",
    backgroundColor: Color.colorGray_400,
  },
  likeActiveIcon: {
    left: 47,
    width: 70,
    position: "absolute",
  },
  text6: {
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
    height: 65,
    width: 60,
    position: "absolute",
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
    width: 60,
    position: "absolute",
  },
  text7: {
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
  text8: {
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
  text9: {
    left: 0,
    top: 0,
  },
  wrapper: {
    height: 37,
    top: 86,
    left: 0,
  },
  groupChild3: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  groupChild4: {
    left: 16,
  },
  groupChild5: {
    left: 44,
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
  groupChild10: {
    left: 44,
  },
  groupChild11: {
    left: 33,
  },
  groupChild12: {
    left: 22,
  },
  groupChild13: {
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
    left: 152,
    top: 70,
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
    bottom: "0%",
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

export default Video8;
