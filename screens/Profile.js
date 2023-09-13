import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.profilePosition]} />
      <View style={[styles.profileItem, styles.profilePosition]} />
      <View style={[styles.profileInner, styles.textPosition]}>
        <View style={[styles.plashkaParent, styles.plashkaPosition]}>
          <View style={[styles.plashka, styles.textPosition]} />
          <View style={styles.dateOfBirthParent}>
            <View style={[styles.dateOfBirth, styles.sexLayout]}>
              <View style={[styles.dateOfBirthChild, styles.plashkaPosition]} />
              <Text style={[styles.text, styles.textTypo2]}> 30 лет</Text>
              <Image
                style={[styles.dateOfBirthItem, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/star-12.png")}
              />
            </View>
            <View style={[styles.dateOfBirth1, styles.sexLayout]}>
              <View style={[styles.dateOfBirthChild, styles.plashkaPosition]} />
              <Text style={[styles.text, styles.textTypo2]}> Беларусь</Text>
              <Image
                style={[styles.dateOfBirthItem, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/star-12.png")}
              />
            </View>
            <View style={[styles.dateOfBirth2, styles.sexLayout]}>
              <View style={[styles.dateOfBirthChild, styles.plashkaPosition]} />
              <Text style={[styles.text, styles.textTypo2]}>
                {" "}
                Количество игроков
              </Text>
              <Image
                style={[styles.dateOfBirthItem, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/star-12.png")}
              />
            </View>
            <View style={[styles.dateOfBirth3, styles.sexLayout]}>
              <View style={[styles.dateOfBirthChild, styles.plashkaPosition]} />
              <Text style={[styles.text, styles.textTypo2]}> Сложность</Text>
              <Image
                style={[styles.dateOfBirthItem, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/star-12.png")}
              />
            </View>
            <View style={[styles.dateOfBirth4, styles.sexLayout]}>
              <View style={[styles.dateOfBirthChild, styles.plashkaPosition]} />
              <Text style={[styles.text, styles.textTypo2]}>
                {" "}
                Язык интерфейса
              </Text>
              <Image
                style={[styles.dateOfBirthItem, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/star-12.png")}
              />
            </View>
            <View style={[styles.sexParent, styles.sexLayout]}>
              <View style={[styles.sex, styles.sexLayout]}>
                <View
                  style={[styles.dateOfBirthChild, styles.plashkaPosition]}
                />
                <Text style={[styles.text, styles.textTypo2]} />
                <Image
                  style={[styles.dateOfBirthItem, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/star-12.png")}
                />
              </View>
              <Image
                style={styles.womenIcon}
                resizeMode="cover"
                source={require("../assets/women.png")}
              />
            </View>
            <View style={[styles.dateOfBirthWrapper, styles.sexLayout]}>
              <View style={[styles.dateOfBirth5, styles.sexLayout]}>
                <View
                  style={[styles.dateOfBirthChild, styles.plashkaPosition]}
                />
                <Text style={[styles.text, styles.textTypo2]}> Кристина</Text>
                <Image
                  style={[styles.dateOfBirthItem, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/star-12.png")}
                />
              </View>
            </View>
            <View style={[styles.dateOfBirth6, styles.sexLayout]}>
              <View style={[styles.dateOfBirthChild, styles.plashkaPosition]} />
              <Text style={[styles.text, styles.textTypo2]}>
                {" "}
                pride@gmail.com
              </Text>
              <Image
                style={[styles.dateOfBirthItem, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/star-1.png")}
              />
            </View>
            <View style={[styles.dateOfBirth7, styles.sexLayout]}>
              <View style={[styles.dateOfBirthChild, styles.plashkaPosition]} />
              <Text style={[styles.text, styles.textTypo2]}> password</Text>
              <Image
                style={[styles.dateOfBirthItem, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/star-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.menu, styles.plashkaPosition]}>
        <View style={[styles.plashka1, styles.plashkaPosition]} />
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
          <Text style={[styles.text9, styles.textTypo1]}>Избранное</Text>
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
          <Text style={[styles.text10, styles.text10Position]}>Тренироки</Text>
        </View>
        <View style={styles.profile1}>
          <Image
            style={[styles.privateIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/private.png")}
          />
          <Text style={[styles.text11, styles.textTypo1]}>Профиль</Text>
        </View>
        <View style={[styles.schedule, styles.wrapperLayout]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text12, styles.textTypo1]}>Календарь</Text>
          </View>
          <View style={[styles.scheduleUnactive, styles.groupChildLayout1]}>
            <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
              <View style={[styles.groupChild, styles.groupChildLayout1]} />
              <View style={[styles.groupItem, styles.groupLayout]} />
              <View style={[styles.groupInner, styles.groupLayout]} />
              <View style={[styles.groupChild1, styles.groupChildLayout]} />
              <View style={[styles.groupChild2, styles.groupChildLayout]} />
              <View style={[styles.groupChild3, styles.groupChildLayout]} />
              <View style={[styles.groupChild4, styles.groupChildLayout]} />
              <View style={[styles.groupChild5, styles.groupChildPosition]} />
              <View style={[styles.groupChild6, styles.groupChildPosition]} />
              <View style={[styles.groupChild7, styles.groupChildPosition]} />
              <View style={[styles.groupChild8, styles.groupChildPosition]} />
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
            style={[styles.homeActiveIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/home-active.png")}
          />
          <Text style={[styles.text11, styles.textTypo1]}>Домой</Text>
        </View>
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/home-unactive.png")}
        />
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild9, styles.groupPosition]} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-81.png")}
        />
        <Image
          style={[styles.arrowIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Text style={[styles.text14, styles.textTypo2]}>ПРОФИЛЬ</Text>
      </View>
      <View style={styles.plashka2} />
      <Text style={[styles.text15, styles.textTypo]}>Сохранить</Text>
      <Text style={[styles.text16, styles.textTypo]}>Выйти из профиля</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition: {
    width: 19,
    left: 1421,
    top: 330,
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    width: "100%",
  },
  plashkaPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  sexLayout: {
    height: 169,
    width: 1019,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
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
    top: 63,
  },
  text10Position: {
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
  iconLayout: {
    height: 51,
    width: 51,
  },
  iconPosition: {
    left: 152,
    position: "absolute",
  },
  groupPosition: {
    height: 330,
    width: 1440,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGoldenrod_200,
    fontSize: FontSize.size_33xl,
    height: "2.89%",
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  profileChild: {
    backgroundColor: Color.colorDarkslategray,
    height: 1980,
  },
  profileItem: {
    backgroundColor: Color.colorGoldenrod_100,
    height: 662,
  },
  plashka: {
    height: "17.23%",
    top: "100%",
    bottom: "-17.23%",
    backgroundColor: "rgba(255, 255, 255, 0)",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  dateOfBirthChild: {
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_3xs,
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  text: {
    top: "23.67%",
    fontSize: FontSize.size_53xl,
    left: "0%",
    width: "100%",
  },
  dateOfBirthItem: {
    height: "29.59%",
    width: "5.3%",
    top: "34.91%",
    right: "5.2%",
    bottom: "35.5%",
    left: "89.5%",
    display: "none",
  },
  dateOfBirth: {
    top: 747,
    borderRadius: Border.br_3xs,
    left: 1,
    width: 1019,
  },
  dateOfBirth1: {
    top: 1245,
    borderRadius: Border.br_3xs,
    left: 1,
    width: 1019,
  },
  dateOfBirth2: {
    top: 1494,
    borderRadius: Border.br_3xs,
    left: 1,
    width: 1019,
  },
  dateOfBirth3: {
    top: 1743,
    borderRadius: Border.br_3xs,
    left: 1,
    width: 1019,
  },
  dateOfBirth4: {
    top: 1992,
    borderRadius: Border.br_3xs,
    left: 1,
    width: 1019,
  },
  sex: {
    left: 0,
    top: 0,
  },
  womenIcon: {
    top: 43,
    left: 78,
    width: 80,
    height: 80,
    position: "absolute",
  },
  sexParent: {
    top: 996,
    left: 0,
  },
  dateOfBirth5: {
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  dateOfBirthWrapper: {
    left: 1,
    width: 1019,
    top: 0,
  },
  dateOfBirth6: {
    top: 249,
    borderRadius: Border.br_3xs,
    left: 1,
    width: 1019,
  },
  dateOfBirth7: {
    top: 498,
    left: 0,
    borderRadius: Border.br_3xs,
  },
  dateOfBirthParent: {
    left: 210,
    width: 1020,
    height: 2161,
    top: 0,
    position: "absolute",
  },
  plashkaParent: {
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  profileInner: {
    height: "101.99%",
    top: "16.25%",
    bottom: "-18.24%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  plashka1: {
    backgroundColor: Color.colorGray_400,
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  likeActiveIcon: {
    left: 47,
    width: 70,
    position: "absolute",
  },
  text9: {
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
  text10: {
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
  text11: {
    top: 72,
    left: 0,
  },
  profile1: {
    height: "43.6%",
    width: "9.93%",
    top: "31.2%",
    right: "8.61%",
    bottom: "25.2%",
    left: "81.46%",
    position: "absolute",
  },
  text12: {
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
  groupChild1: {
    left: 44,
  },
  groupChild2: {
    left: 33,
  },
  groupChild3: {
    left: 22,
  },
  groupChild4: {
    left: 10,
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
    left: 124,
    width: 107,
    height: 109,
    top: 70,
    position: "absolute",
  },
  icon: {
    height: 51,
    width: 51,
    top: 70,
  },
  menu: {
    height: "9.77%",
    top: "90.23%",
  },
  groupChild9: {
    backgroundColor: Color.colorGray_400,
  },
  ellipseIcon: {
    top: 81,
    width: 279,
    height: 284,
    left: 44,
    position: "absolute",
  },
  arrowIcon: {
    top: 147,
    width: 63,
    height: 37,
  },
  text14: {
    top: 139,
    left: 567,
    fontSize: FontSize.size_45xl,
    textTransform: "uppercase",
  },
  plashka2: {
    height: "7.85%",
    top: "90.7%",
    right: "-0.07%",
    bottom: "1.45%",
    left: "0.07%",
    backgroundColor: Color.colorGray_300,
    position: "absolute",
    width: "100%",
  },
  text15: {
    width: "23.13%",
    top: "85.63%",
    left: "14.65%",
  },
  text16: {
    width: "32.99%",
    top: "85.35%",
    left: "52.43%",
  },
  profile: {
    flex: 1,
    height: 2560,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Profile;
