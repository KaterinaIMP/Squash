import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MyTrainingProgram10 = () => {
  return (
    <View style={styles.myTrainingProgram}>
      <View style={[styles.myTrainingProgramChild, styles.trainingPosition]} />
      <View style={[styles.myTrainingProgramItem, styles.trainingPosition]} />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={styles.groupContainer}>
          <View style={[styles.rectangleParent, styles.groupViewLayout]}>
            <View style={[styles.groupChild, styles.groupChildShadowBox]} />
            <Text style={[styles.cross, styles.crossTypo]}>CROSS</Text>
          </View>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/arrow-171.png")}
          />
          <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
            <View style={[styles.groupInner, styles.groupChildShadowBox]} />
            <Text style={[styles.drive, styles.crossTypo]}>{`DRIVE `}</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
            <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
            <Text style={[styles.lob, styles.lobLayout]}>LOB</Text>
          </View>
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
            <Text style={[styles.service, styles.textTypo2]}>SERVICE</Text>
          </View>
          <View
            style={[styles.rectangleParent1, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
            <Text style={[styles.text, styles.textTypo1]}>ТАКТИКА</Text>
          </View>
          <View
            style={[styles.rectangleParent2, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
            <Text style={[styles.text1, styles.textTypo1]}>ВСЕ</Text>
          </View>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-141.png")}
          />
          <Image
            style={[styles.groupChild4, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-161.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChildLayout12]}
            resizeMode="cover"
            source={require("../assets/arrow-191.png")}
          />
          <Image
            style={[styles.groupChild6, styles.groupChildLayout12]}
            resizeMode="cover"
            source={require("../assets/arrow-201.png")}
          />
          <View style={[styles.lineView, styles.groupChildLayout11]} />
          <View style={[styles.groupChild7, styles.groupChildLayout9]} />
          <View style={[styles.groupChild8, styles.groupChildLayout8]} />
          <View style={[styles.groupChild9, styles.groupChildLayout7]} />
          <View style={[styles.groupChild10, styles.groupChildLayout8]} />
          <View style={[styles.groupChild11, styles.groupChildPosition11]} />
          <View style={[styles.groupChild12, styles.groupChildLayout9]} />
          <View style={[styles.groupChild13, styles.groupChildLayout8]} />
          <View style={[styles.groupChild14, styles.groupChildPosition11]} />
          <View style={[styles.groupChild15, styles.groupChildPosition10]} />
          <View style={[styles.groupChild16, styles.groupChildPosition10]} />
          <View style={[styles.groupChild17, styles.groupChildLayout7]} />
          <View style={[styles.groupChild18, styles.groupChildPosition9]} />
          <View style={[styles.groupChild19, styles.groupChildPosition9]} />
          <View style={[styles.groupChild20, styles.groupChildPosition9]} />
          <View style={[styles.groupChild21, styles.groupChildPosition8]} />
          <View style={[styles.groupChild22, styles.groupChildPosition9]} />
          <View style={[styles.groupChild23, styles.groupChildPosition8]} />
          <Image
            style={styles.groupChild24}
            resizeMode="cover"
            source={require("../assets/arrow-181.png")}
          />
          <Image
            style={styles.groupChild25}
            resizeMode="cover"
            source={require("../assets/arrow-312.png")}
          />
          <View style={[styles.groupChild26, styles.groupChildLayout11]} />
          <View style={[styles.groupChild27, styles.groupChildLayout9]} />
          <View style={[styles.groupChild28, styles.groupChildLayout8]} />
          <View style={[styles.groupChild29, styles.groupChildLayout6]} />
          <View style={[styles.groupChild30, styles.groupChildPosition7]} />
          <View style={[styles.groupChild31, styles.groupChildPosition7]} />
          <Image
            style={styles.groupChild32}
            resizeMode="cover"
            source={require("../assets/arrow-321.png")}
          />
          <View style={[styles.groupChild33, styles.groupChildPosition6]} />
          <View style={[styles.groupChild34, styles.groupChildLayout9]} />
          <View style={[styles.groupChild35, styles.groupChildLayout8]} />
          <View style={[styles.groupChild36, styles.groupChildLayout5]} />
          <View style={[styles.groupChild37, styles.groupChildPosition5]} />
          <View style={[styles.groupChild38, styles.groupChildPosition5]} />
          <Image
            style={styles.groupChild39}
            resizeMode="cover"
            source={require("../assets/arrow-331.png")}
          />
          <View style={[styles.groupChild40, styles.groupChildLayout11]} />
          <View style={[styles.groupChild41, styles.groupChildLayout9]} />
          <View style={[styles.groupChild42, styles.groupChildLayout8]} />
          <View style={[styles.groupChild43, styles.groupChildLayout5]} />
          <View style={[styles.groupChild44, styles.groupChildLayout8]} />
          <View style={[styles.groupChild45, styles.groupChildLayout5]} />
          <View style={[styles.rectangleParent3, styles.parentPosition]}>
            <View style={[styles.groupChild46, styles.groupChildShadowBox]} />
            <Text style={[styles.boust, styles.crossTypo]}>BOUST</Text>
          </View>
          <Image
            style={styles.groupChild47}
            resizeMode="cover"
            source={require("../assets/arrow-211.png")}
          />
          <Image
            style={[styles.groupChild48, styles.groupChildPosition4]}
            resizeMode="cover"
            source={require("../assets/arrow-231.png")}
          />
          <Image
            style={[styles.groupChild49, styles.groupChildPosition4]}
            resizeMode="cover"
            source={require("../assets/arrow-241.png")}
          />
          <Image
            style={styles.groupChild50}
            resizeMode="cover"
            source={require("../assets/arrow-221.png")}
          />
          <Image
            style={styles.groupChild51}
            resizeMode="cover"
            source={require("../assets/arrow-251.png")}
          />
          <View style={[styles.groupChild52, styles.groupChildPosition3]} />
          <View style={[styles.groupChild53, styles.groupChildLayout9]} />
          <View style={[styles.groupChild54, styles.groupChildLayout8]} />
          <View style={[styles.groupChild55, styles.groupChildLayout4]} />
          <View style={[styles.groupChild56, styles.groupChildPosition2]} />
          <View style={[styles.groupChild57, styles.groupChildPosition2]} />
          <View style={[styles.groupParent1, styles.parentPosition]}>
            <View style={[styles.rectangleParent4, styles.groupViewLayout]}>
              <View style={[styles.groupChild58, styles.groupChildShadowBox]} />
              <Text style={[styles.drop, styles.textTypo2]}>DROP</Text>
            </View>
            <Image
              style={styles.groupChild59}
              resizeMode="cover"
              source={require("../assets/arrow-371.png")}
            />
            <View style={[styles.groupChild60, styles.groupChildLayout11]} />
            <View style={[styles.groupChild61, styles.groupChildLayout9]} />
            <View style={[styles.groupChild62, styles.groupChildLayout8]} />
            <View style={[styles.groupChild63, styles.groupChildLayout7]} />
            <View style={[styles.groupChild64, styles.groupChildPosition1]} />
            <View style={[styles.groupChild65, styles.groupChildPosition1]} />
            <Image
              style={styles.groupChild66}
              resizeMode="cover"
              source={require("../assets/arrow-341.png")}
            />
          </View>
        </View>
        <View style={[styles.groupChild67, styles.groupLayout]} />
      </View>
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.plashka, styles.menuPosition]} />
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
          <Text style={[styles.text2, styles.textTypo]}>Избранное</Text>
        </View>
        <View style={[styles.historyActive, styles.historyLayout]}>
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
        <View style={[styles.history, styles.historyPosition]}>
          <View style={[styles.historyUnactive, styles.historyLayout]}>
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
        </View>
        <View style={styles.profile}>
          <Image
            style={[styles.privateIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text4, styles.textTypo]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.historyPosition]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text5, styles.textTypo]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupChild68Layout]}>
            <View style={[styles.rectangleParent5, styles.groupChild68Layout]}>
              <View style={[styles.groupChild68, styles.groupChild68Layout]} />
              <View style={[styles.groupChild69, styles.groupChildLayout3]} />
              <View style={[styles.groupChild70, styles.groupChildLayout3]} />
              <View style={[styles.groupChild71, styles.groupChildLayout2]} />
              <View style={[styles.groupChild72, styles.groupChildLayout2]} />
              <View style={[styles.groupChild73, styles.groupChildLayout2]} />
              <View style={[styles.groupChild74, styles.groupChildLayout2]} />
              <View style={[styles.groupChild75, styles.groupChildPosition]} />
              <View style={[styles.groupChild76, styles.groupChildPosition]} />
              <View style={[styles.groupChild77, styles.groupChildPosition]} />
              <View style={[styles.groupChild78, styles.groupChildPosition]} />
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
            style={[styles.homeActiveIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/home-active.png")}
          />
          <Text style={[styles.text4, styles.textTypo]}>Домой</Text>
        </View>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/home-unactive.png")}
        />
      </View>
      <View style={styles.groupChild81Position}>
        <View style={styles.groupChild79} />
        <View style={styles.groupChild80} />
        <View style={[styles.groupChild81, styles.groupChild81Position]} />
        <Image
          style={[styles.ellipseIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-81.png")}
        />
        <Image
          style={[styles.groupChild82, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-81.png")}
        />
        <Text style={[styles.text7, styles.textTypo2]}>ВЫБРАТЬ РАЗДЕЛ</Text>
        <View style={[styles.groupChild83, styles.groupChildLayout1]} />
        <View style={[styles.groupChild84, styles.groupChildLayout1]} />
        <View style={[styles.groupChild85, styles.groupChildLayout1]} />
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-81.png")}
        />
        <Image
          style={[styles.groupIcon, styles.lobLayout]}
          resizeMode="cover"
          source={require("../assets/group-30.png")}
        />
      </View>
      <Image
        style={[styles.myTrainingProgramInner, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/group-43.png")}
      />
      <View style={[styles.groupParent2, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent7, styles.groupParentLayout]}>
          <View style={[styles.groupChild87, styles.groupParentLayout]} />
          <Text style={[styles.text8, styles.textTypo2]}>
            Чтобы собрать свою тренировку выбери 4 упражнения из разных разделов
          </Text>
        </View>
        <Image
          style={[styles.groupChild88, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-222.png")}
        />
        <Image
          style={[styles.groupChild89, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-234.png")}
        />
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
  groupLayout: {
    width: 1440,
    position: "absolute",
  },
  groupViewLayout: {
    height: 800,
    width: 629,
    position: "absolute",
  },
  groupChildShadowBox: {
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
  },
  crossTypo: {
    height: 61,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    fontWeight: "700",
    fontSize: FontSize.size_41xl,
    position: "absolute",
  },
  lobLayout: {
    height: 62,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
  },
  rectangleParentPosition: {
    top: 2595,
    height: 800,
    width: 629,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorGoldenrod_100,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontWeight: "700",
    fontSize: FontSize.size_41xl,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 687,
    width: 29,
    position: "absolute",
  },
  groupChildLayout12: {
    height: 630,
    width: 29,
    position: "absolute",
  },
  groupChildLayout11: {
    height: 1,
    borderTopWidth: 1,
  },
  groupChildLayout9: {
    height: 362,
    width: 1,
    borderRightWidth: 1,
  },
  groupChildLayout8: {
    height: 164,
    width: 1,
    borderRightWidth: 1,
  },
  groupChildLayout7: {
    width: 165,
    top: 602,
  },
  groupChildPosition11: {
    left: 710,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition10: {
    left: 1175,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition9: {
    top: 2176,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition8: {
    top: 2339,
    width: 165,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout6: {
    top: 2327,
    width: 165,
    height: 1,
    borderTopWidth: 1,
  },
  groupChildPosition7: {
    left: 1188,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition6: {
    left: 722,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout5: {
    top: 3197,
    width: 165,
    height: 1,
    borderTopWidth: 1,
  },
  groupChildPosition5: {
    left: 1187,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  parentPosition: {
    top: 858,
    height: 800,
    width: 629,
    position: "absolute",
  },
  groupChildPosition4: {
    top: 871,
    position: "absolute",
  },
  groupChildPosition3: {
    left: 715,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout4: {
    top: 1459,
    width: 165,
    height: 1,
    borderTopWidth: 1,
  },
  groupChildPosition2: {
    left: 1180,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition1: {
    left: 465,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  menuPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  textTypo: {
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  historyLayout: {
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
  historyPosition: {
    height: 123,
    top: 63,
    position: "absolute",
  },
  text3Position: {
    top: 86,
    left: 0,
  },
  iconLayout2: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 37,
    position: "absolute",
  },
  groupChild68Layout: {
    width: 66,
    position: "absolute",
  },
  groupChildLayout3: {
    height: 16,
    width: 6,
    backgroundColor: Color.colorGainsboro,
    top: 0,
    position: "absolute",
  },
  groupChildLayout2: {
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
    height: 51,
    width: 51,
    position: "absolute",
  },
  groupChild81Position: {
    height: 444,
    left: 0,
    top: 0,
    width: 1440,
    position: "absolute",
  },
  iconLayout: {
    height: 284,
    width: 279,
    top: 81,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 13,
    width: 15,
    left: 1278,
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  groupParentLayout: {
    height: 440,
    width: 1300,
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  myTrainingProgramChild: {
    height: 1980,
    backgroundColor: Color.colorDarkslategray,
  },
  myTrainingProgramItem: {
    height: 662,
    backgroundColor: Color.colorGoldenrod_100,
  },
  groupChild: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  cross: {
    width: 199,
    left: 48,
    top: 669,
    height: 61,
  },
  rectangleParent: {
    left: 711,
    top: 0,
  },
  groupItem: {
    top: 9,
    left: 1002,
    width: 215,
    height: 646,
    position: "absolute",
  },
  groupInner: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  drive: {
    width: 189,
    left: 48,
    top: 669,
    height: 61,
  },
  rectangleGroup: {
    left: 24,
    top: 0,
  },
  rectangleView: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  lob: {
    top: 687,
    left: 64,
    width: 116,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_41xl,
  },
  rectangleContainer: {
    top: 1737,
    left: 24,
  },
  groupChild1: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  service: {
    top: 672,
    width: 240,
    height: 63,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontWeight: "700",
    fontSize: FontSize.size_41xl,
    left: 44,
    position: "absolute",
  },
  groupView: {
    top: 1725,
    left: 724,
  },
  groupChild2: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  text: {
    top: 342,
    left: 181,
    width: 269,
    height: 67,
  },
  rectangleParent1: {
    left: 723,
  },
  groupChild3: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  text1: {
    top: 350,
    left: 264,
    width: 119,
    height: 59,
  },
  rectangleParent2: {
    left: 24,
  },
  arrowIcon: {
    left: 572,
    top: 24,
  },
  groupChild4: {
    left: 540,
    top: 26,
  },
  groupChild5: {
    left: 106,
    top: 24,
  },
  groupChild6: {
    left: 74,
    top: 26,
  },
  lineView: {
    width: 630,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    left: 23,
    top: 439,
  },
  groupChild7: {
    left: 338,
    height: 362,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
  },
  groupChild8: {
    left: 185,
    height: 164,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
  },
  groupChild9: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    left: 23,
  },
  groupChild10: {
    left: 488,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
  },
  groupChild11: {
    width: 630,
    top: 439,
  },
  groupChild12: {
    left: 1025,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
  },
  groupChild13: {
    left: 872,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
  },
  groupChild14: {
    width: 165,
    top: 602,
  },
  groupChild15: {
    height: 164,
    width: 1,
    borderRightWidth: 1,
    top: 439,
  },
  groupChild16: {
    width: 165,
    top: 602,
    height: 1,
    borderTopWidth: 1,
  },
  groupChild17: {
    left: 488,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild18: {
    height: 1,
    borderTopWidth: 1,
    width: 630,
    left: 23,
  },
  groupChild19: {
    height: 362,
    width: 1,
    borderRightWidth: 1,
    left: 338,
  },
  groupChild20: {
    height: 164,
    width: 1,
    borderRightWidth: 1,
    left: 185,
  },
  groupChild21: {
    left: 23,
  },
  groupChild22: {
    left: 488,
    height: 164,
    width: 1,
    borderRightWidth: 1,
  },
  groupChild23: {
    left: 488,
  },
  groupChild24: {
    top: 10,
    left: 754,
    width: 257,
    height: 645,
    position: "absolute",
  },
  groupChild25: {
    top: 1745,
    left: 321,
    width: 220,
    height: 207,
    position: "absolute",
  },
  groupChild26: {
    top: 2164,
    width: 630,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    left: 723,
  },
  groupChild27: {
    left: 1038,
    top: 2164,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild28: {
    left: 885,
    top: 2164,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild29: {
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    left: 723,
  },
  groupChild30: {
    top: 2164,
    height: 164,
    width: 1,
    borderRightWidth: 1,
  },
  groupChild31: {
    top: 2327,
    width: 165,
    height: 1,
    borderTopWidth: 1,
  },
  groupChild32: {
    top: 1747,
    left: 69,
    width: 254,
    height: 293,
    position: "absolute",
  },
  groupChild33: {
    top: 3034,
    height: 1,
    borderTopWidth: 1,
    width: 630,
  },
  groupChild34: {
    left: 1037,
    top: 3034,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild35: {
    left: 884,
    top: 3034,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild36: {
    left: 722,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild37: {
    top: 3034,
    height: 164,
    width: 1,
    borderRightWidth: 1,
  },
  groupChild38: {
    top: 3197,
    width: 165,
    height: 1,
    borderTopWidth: 1,
  },
  groupChild39: {
    top: 1736,
    left: 844,
    width: 244,
    height: 305,
    position: "absolute",
  },
  groupChild40: {
    top: 3034,
    width: 630,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    left: 23,
  },
  groupChild41: {
    top: 3034,
    left: 338,
    height: 362,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild42: {
    top: 3034,
    left: 185,
    height: 164,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild43: {
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    left: 23,
  },
  groupChild44: {
    top: 3034,
    left: 488,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild45: {
    left: 488,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild46: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  boust: {
    top: 682,
    width: 182,
    left: 37,
  },
  rectangleParent3: {
    left: 716,
  },
  groupChild47: {
    top: 1375,
    left: 1139,
    height: 166,
    width: 203,
    position: "absolute",
  },
  groupChild48: {
    left: 908,
    width: 433,
    height: 509,
  },
  groupChild49: {
    left: 721,
    width: 192,
    height: 156,
  },
  groupChild50: {
    top: 1031,
    left: 726,
    width: 136,
    height: 157,
    position: "absolute",
  },
  groupChild51: {
    top: 1734,
    left: 1079,
    width: 234,
    height: 306,
    position: "absolute",
  },
  groupChild52: {
    top: 1296,
    height: 1,
    borderTopWidth: 1,
    width: 630,
  },
  groupChild53: {
    left: 1030,
    top: 1296,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild54: {
    left: 877,
    top: 1296,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild55: {
    left: 715,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild56: {
    top: 1296,
    height: 164,
    width: 1,
    borderRightWidth: 1,
  },
  groupChild57: {
    top: 1459,
    width: 165,
    height: 1,
    borderTopWidth: 1,
  },
  groupChild58: {
    height: 800,
    width: 629,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  drop: {
    top: 685,
    left: 55,
    height: 65,
    width: 163,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontWeight: "700",
    fontSize: FontSize.size_41xl,
    position: "absolute",
  },
  rectangleParent4: {
    left: 0,
    top: 0,
  },
  groupChild59: {
    top: 15,
    left: 313,
    width: 202,
    height: 386,
    position: "absolute",
  },
  groupChild60: {
    width: 630,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
    left: 0,
  },
  groupChild61: {
    left: 315,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
  },
  groupChild62: {
    left: 162,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    top: 439,
  },
  groupChild63: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
    left: 0,
  },
  groupChild64: {
    height: 164,
    width: 1,
    borderRightWidth: 1,
    top: 439,
  },
  groupChild65: {
    width: 165,
    top: 602,
    height: 1,
    borderTopWidth: 1,
  },
  groupChild66: {
    left: 512,
    width: 84,
    height: 98,
    top: 24,
    position: "absolute",
  },
  groupParent1: {
    left: 24,
  },
  groupContainer: {
    width: 1353,
    height: 3395,
    left: 44,
    top: 0,
    position: "absolute",
  },
  groupChild67: {
    top: 3395,
    backgroundColor: Color.colorGray_200,
    height: 459,
    left: 0,
  },
  groupParent: {
    top: 520,
    left: -9,
    height: 3854,
  },
  plashka: {
    height: "100%",
    backgroundColor: Color.colorGray_400,
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  likeActiveIcon: {
    left: 47,
    width: 70,
    height: 65,
    top: 0,
    position: "absolute",
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
  },
  privateIcon: {
    height: "45.87%",
    width: "29.37%",
    right: "34.97%",
    bottom: "54.13%",
    left: "35.66%",
    top: "0%",
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
    width: 166,
    top: 86,
    left: 0,
  },
  groupChild68: {
    top: 13,
    borderRadius: Border.br_9xs,
    height: 52,
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  groupChild69: {
    left: 16,
  },
  groupChild70: {
    left: 44,
  },
  groupChild71: {
    left: 44,
  },
  groupChild72: {
    left: 33,
  },
  groupChild73: {
    left: 22,
  },
  groupChild74: {
    left: 10,
  },
  groupChild75: {
    left: 44,
  },
  groupChild76: {
    left: 33,
  },
  groupChild77: {
    left: 22,
  },
  groupChild78: {
    left: 10,
  },
  rectangleParent5: {
    height: 65,
    left: 0,
    top: 0,
  },
  scheduleUnactive: {
    height: 65,
    left: 48,
    top: 0,
  },
  schedule: {
    left: 898,
    width: 166,
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
    top: "0%",
  },
  home: {
    left: 124,
    width: 107,
    height: 109,
    top: 70,
    position: "absolute",
  },
  icon: {
    left: 152,
    top: 70,
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  groupChild79: {
    left: 70,
    height: 185,
    top: 81,
    backgroundColor: Color.colorGainsboro,
    width: 203,
    position: "absolute",
  },
  groupChild80: {
    top: 88,
    left: 104,
    width: 169,
    height: 168,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  groupChild81: {
    backgroundColor: Color.colorGray_400,
  },
  ellipseIcon: {
    left: 37,
  },
  groupChild82: {
    top: 147,
    left: 145,
    width: 63,
  },
  backIcon: {
    left: 1146,
  },
  text7: {
    top: 122,
    left: 444,
    fontSize: FontSize.size_46xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  groupChild83: {
    top: 129,
  },
  groupChild84: {
    top: 159,
  },
  groupChild85: {
    top: 189,
  },
  groupIcon: {
    top: 135,
    left: 1244,
    width: 83,
  },
  myTrainingProgramInner: {
    height: "7.85%",
    top: "82.38%",
    bottom: "9.77%",
    left: "0%",
    right: "0%",
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupChild87: {
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
    backgroundColor: Color.colorGoldenrod_100,
  },
  text8: {
    top: 118,
    left: 86,
    color: Color.bleackstrong,
    width: 1195,
    height: 225,
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_41xl,
    position: "absolute",
  },
  rectangleParent7: {
    left: 0,
    top: 0,
  },
  groupChild88: {
    top: 62,
    left: 690,
  },
  groupChild89: {
    top: 60,
    left: 546,
  },
  groupParent2: {
    top: 441,
    left: 59,
  },
  myTrainingProgram: {
    flex: 1,
    height: 2560,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default MyTrainingProgram10;
