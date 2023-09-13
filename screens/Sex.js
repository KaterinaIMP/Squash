import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Sex = () => {
  return (
    <View style={styles.sex}>
      <View style={styles.button}>
        <View style={[styles.further, styles.butonBg]} />
        <Text style={[styles.text, styles.textTypo]}>Далее</Text>
        <Image
          style={[styles.buttonChild, styles.childGroupLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.nameWrapper, styles.dateLayout]}>
          <View style={[styles.nameWrapper, styles.dateLayout]}>
            <View style={[styles.buton, styles.butonBg]} />
            <Text style={[styles.name1, styles.name1Position]}> Кристина</Text>
            <Image
              style={[styles.nameChild, styles.itemChildPosition]}
              resizeMode="cover"
              source={require("../assets/star-13.png")}
            />
          </View>
        </View>
        <View style={[styles.data, styles.dateLayout]}>
          <View style={[styles.buton, styles.butonBg]} />
          <Text style={[styles.name1, styles.name1Position]}> 25 лет</Text>
          <Image
            style={[styles.dataItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/star-13.png")}
          />
        </View>
        <View style={styles.country}>
          <View style={[styles.countryChild, styles.text2Position]} />
          <Text style={[styles.text2, styles.text2Position]}> Страна</Text>
          <Image
            style={[styles.countryItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
        <View style={[styles.sex1, styles.dateLayout]}>
          <View style={[styles.sexChild, styles.butonPosition]} />
          <Text
            style={[styles.text3, styles.name1Position]}
          >{`                                 Другое `}</Text>
          <Image
            style={[styles.dataItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
        <Image
          style={styles.womenIcon}
          resizeMode="cover"
          source={require("../assets/women1.png")}
        />
        <Image
          style={styles.manIcon}
          resizeMode="cover"
          source={require("../assets/man.png")}
        />
        <View style={[styles.dateOfBirthParent, styles.dateLayout]}>
          <View style={[styles.dateOfBirth, styles.dateLayout]}>
            <View style={[styles.buton, styles.butonBg]} />
            <Text style={[styles.name1, styles.name1Position]}>
              {" "}
              pride@gmail.com
            </Text>
            <Image
              style={[styles.dataItem, styles.itemLayout]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
          <Image
            style={[styles.groupChild, styles.itemChildPosition]}
            resizeMode="cover"
            source={require("../assets/star-13.png")}
          />
        </View>
        <View style={[styles.dateOfBirthGroup, styles.dateLayout]}>
          <View style={[styles.dateOfBirth, styles.dateLayout]}>
            <View style={[styles.buton, styles.butonBg]} />
            <Text style={[styles.name1, styles.name1Position]}> password</Text>
            <Image
              style={[styles.dataItem, styles.itemLayout]}
              resizeMode="cover"
              source={require("../assets/star-1.png")}
            />
          </View>
          <Image
            style={[styles.groupItem, styles.itemChildPosition]}
            resizeMode="cover"
            source={require("../assets/star-13.png")}
          />
        </View>
      </View>
      <View style={[styles.pridelogoParent, styles.decemberLayout]}>
        <View style={[styles.pridelogo, styles.circleLayout]}>
          <View style={[styles.circle, styles.circleLayout]} />
          <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../assets/logo.png")}
          />
        </View>
        <Text style={[styles.december, styles.decemberLayout]}>
          Создай аккаунт и получи доступ к тренировкам
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  butonBg: {
    backgroundColor: Color.colorGray_500,
    top: "0%",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_53xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
  },
  childGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dateLayout: {
    height: 169,
    width: 1019,
    position: "absolute",
  },
  name1Position: {
    top: "23.67%",
    textAlign: "left",
    fontFamily: FontFamily.centuryGothic,
    fontSize: FontSize.size_53xl,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  itemChildPosition: {
    bottom: "35.5%",
    top: "34.91%",
    width: "5.3%",
    height: "29.59%",
  },
  itemLayout: {
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text2Position: {
    width: "99.61%",
    left: "0%",
    position: "absolute",
  },
  butonPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  decemberLayout: {
    width: 834,
    position: "absolute",
  },
  circleLayout: {
    height: 268,
    width: 268,
    top: 0,
    position: "absolute",
  },
  further: {
    borderRadius: Border.br_81xl,
    opacity: 0.9,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
  text: {
    top: "18.95%",
    left: "18.42%",
    position: "absolute",
  },
  buttonChild: {
    height: "19.25%",
    width: "18.59%",
    top: "40.05%",
    right: "10.84%",
    bottom: "40.7%",
    left: "70.57%",
  },
  button: {
    top: 2267,
    left: 430,
    width: 581,
    height: 153,
    position: "absolute",
  },
  buton: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
  name1: {
    color: Color.colorWhite,
    top: "23.67%",
  },
  nameChild: {
    right: "5.07%",
    left: "89.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameWrapper: {
    left: 0,
    top: 0,
    width: 1019,
  },
  dataItem: {
    right: "5.2%",
    left: "89.5%",
    bottom: "35.5%",
    top: "34.91%",
    width: "5.3%",
    height: "29.59%",
  },
  data: {
    top: 822,
    left: 0,
  },
  countryChild: {
    height: "97.69%",
    right: "0.39%",
    bottom: "2.31%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    top: "0%",
  },
  text2: {
    top: "23.12%",
    textAlign: "left",
    fontSize: FontSize.size_53xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.centuryGothic,
  },
  countryItem: {
    height: "28.9%",
    width: "5.28%",
    top: "34.1%",
    right: "5.57%",
    bottom: "36.99%",
    left: "89.15%",
  },
  country: {
    top: 1378,
    left: -2,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod_100,
    borderWidth: 4,
    width: 1023,
    height: 173,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sexChild: {
    backgroundColor: Color.colorGoldenrod_100,
    borderRadius: Border.br_3xs,
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  text3: {
    color: Color.colorGray_500,
  },
  sex1: {
    top: 1101,
    left: 0,
  },
  womenIcon: {
    top: 1143,
    left: 356,
    width: 80,
    height: 80,
    position: "absolute",
  },
  manIcon: {
    top: 1142,
    left: 65,
    width: 67,
    height: 99,
    position: "absolute",
  },
  dateOfBirth: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    width: 1019,
  },
  groupChild: {
    right: "4.88%",
    left: "89.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dateOfBirthParent: {
    top: 277,
    left: 0,
  },
  groupItem: {
    right: "4.97%",
    left: "89.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dateOfBirthGroup: {
    top: 554,
    left: 1,
  },
  groupParent: {
    top: 628,
    left: 206,
    width: 1020,
    height: 1549,
    position: "absolute",
  },
  circle: {
    borderRadius: Border.br_798xl,
    backgroundColor: Color.bleackstrong,
    opacity: 0.4,
    left: 0,
  },
  logoIcon: {
    top: 28,
    left: 28,
    width: 212,
    height: 212,
    position: "absolute",
  },
  pridelogo: {
    left: 300,
  },
  december: {
    top: 339,
    fontSize: FontSize.size_31xl,
    color: Color.colorGoldenrod_200,
    textAlign: "center",
    left: 0,
    fontFamily: FontFamily.centuryGothic,
    width: 834,
  },
  pridelogoParent: {
    top: 85,
    left: 286,
    height: 461,
  },
  sex: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
  },
});

export default Sex;
