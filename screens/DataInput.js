import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const DataInput = () => {
  return (
    <View style={styles.dataInput}>
      <View style={[styles.dataInputChild, styles.plashkaPosition]} />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/22.png")}
      />
      <View style={[styles.plashka, styles.plashkaPosition]} />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/11-1.png")}
      />
      <View style={[styles.dateOfBirthWrapper, styles.dateLayout]}>
        <View style={[styles.dateOfBirth, styles.circlePosition]}>
          <View style={[styles.dateOfBirthChild, styles.furtherPosition]} />
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.text1}>{`   `}</Text>
            <Text style={styles.text2}>Имя</Text>
          </Text>
          <Image
            style={[styles.dateOfBirthItem, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/star-12.png")}
          />
        </View>
      </View>
      <View style={[styles.pridelogo, styles.circleLayout]}>
        <View style={[styles.circle, styles.circleLayout]} />
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo1.png")}
        />
      </View>
      <Text style={styles.december}>
        Создай аккаунт и получи доступ к тренировкам
      </Text>
      <View style={styles.button}>
        <View style={[styles.further, styles.furtherPosition]} />
        <Text style={[styles.text3, styles.textTypo]}>Далее</Text>
        <Image
          style={[styles.buttonChild, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <View style={[styles.sity, styles.sexPosition]}>
        <View style={[styles.dateOfBirthChild, styles.furtherPosition]} />
        <Text style={[styles.text4, styles.textTypo]}> Страна</Text>
        <Image
          style={[styles.sityItem, styles.text8Position]}
          resizeMode="cover"
          source={require("../assets/star-1.png")}
        />
      </View>
      <View style={[styles.country, styles.sexPosition]}>
        <View style={[styles.dateOfBirthChild, styles.furtherPosition]} />
        <Text style={[styles.text4, styles.textTypo]}> Пол</Text>
        <Image
          style={[styles.sityItem, styles.text8Position]}
          resizeMode="cover"
          source={require("../assets/star-1.png")}
        />
      </View>
      <View style={[styles.sex, styles.sexPosition]}>
        <View style={[styles.dateOfBirthChild, styles.furtherPosition]} />
        <Text style={[styles.text4, styles.textTypo]}> Возраст</Text>
        <Image
          style={[styles.sityItem, styles.text8Position]}
          resizeMode="cover"
          source={require("../assets/star-1.png")}
        />
      </View>
      <View style={[styles.dateOfBirthParent, styles.sexPosition]}>
        <View style={[styles.dateOfBirth1, styles.dateLayout]}>
          <View style={[styles.dateOfBirthChild, styles.furtherPosition]} />
          <Text style={[styles.text4, styles.textTypo]}> password</Text>
          <Image
            style={[styles.sityItem, styles.text8Position]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
        <View style={[styles.dateOfBirth, styles.circlePosition]}>
          <View style={[styles.rectangleView, styles.text8Position]} />
          <Text style={[styles.text8, styles.text8Position]}> password</Text>
          <Image
            style={[styles.sityItem, styles.text8Position]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-13.png")}
        />
      </View>
      <View style={[styles.dateOfBirth3, styles.dateLayout]}>
        <View style={[styles.rectangleView, styles.text8Position]} />
        <Text style={[styles.text8, styles.text8Position]}> password</Text>
        <Image
          style={[styles.sityItem, styles.text8Position]}
          resizeMode="cover"
          source={require("../assets/star-1.png")}
        />
      </View>
      <View style={[styles.dateOfBirthGroup, styles.dateLayout]}>
        <View style={[styles.dateOfBirth, styles.circlePosition]}>
          <View style={[styles.dateOfBirthChild, styles.furtherPosition]} />
          <Text style={[styles.text4, styles.textTypo]}> E-mail</Text>
          <Image
            style={[styles.sityItem, styles.text8Position]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/star-13.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plashkaPosition: {
    height: 957,
    backgroundColor: Color.colorGray_400,
    top: 3437,
    position: "absolute",
  },
  dateLayout: {
    height: 169,
    width: 1019,
  },
  circlePosition: {
    left: 0,
    top: 0,
  },
  furtherPosition: {
    backgroundColor: Color.colorGray_500,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_53xl,
    fontFamily: FontFamily.centuryGothic,
  },
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  circleLayout: {
    height: 268,
    width: 268,
    position: "absolute",
  },
  sexPosition: {
    left: 210,
    position: "absolute",
  },
  text8Position: {
    display: "none",
    position: "absolute",
  },
  groupPosition: {
    right: "4.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dataInputChild: {
    left: 7460,
    width: 1440,
  },
  icon: {
    top: 3542,
    left: 7541,
    width: 191,
    height: 195,
    position: "absolute",
  },
  plashka: {
    left: 5738,
    width: 1443,
  },
  icon1: {
    top: 3536,
    left: 5826,
    width: 187,
    height: 200,
    position: "absolute",
  },
  dateOfBirthChild: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text1: {
    color: Color.colorGray_500,
  },
  text2: {
    color: Color.colorWhite,
  },
  text: {
    top: "23.67%",
    textAlign: "left",
    fontSize: FontSize.size_53xl,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  dateOfBirthItem: {
    right: "5.07%",
    left: "89.63%",
    bottom: "35.5%",
    top: "34.91%",
    width: "5.3%",
    height: "29.59%",
    position: "absolute",
  },
  dateOfBirth: {
    borderRadius: Border.br_3xs,
    height: 169,
    width: 1019,
    position: "absolute",
  },
  dateOfBirthWrapper: {
    left: 212,
    width: 1019,
    position: "absolute",
    top: 645,
  },
  circle: {
    borderRadius: Border.br_798xl,
    backgroundColor: Color.bleackstrong,
    opacity: 0.4,
    left: 0,
    top: 0,
  },
  logoIcon: {
    top: 28,
    left: 28,
    width: 212,
    height: 212,
    position: "absolute",
  },
  pridelogo: {
    top: 85,
    left: 586,
  },
  december: {
    top: 424,
    left: 286,
    fontSize: FontSize.size_31xl,
    color: Color.colorGoldenrod_200,
    textAlign: "center",
    width: 834,
    fontFamily: FontFamily.centuryGothic,
    position: "absolute",
  },
  further: {
    borderRadius: Border.br_81xl,
    opacity: 0.9,
    position: "absolute",
  },
  text3: {
    top: "18.95%",
    left: "18.42%",
    color: Color.colorWhite,
    position: "absolute",
  },
  buttonChild: {
    height: "19.25%",
    width: "18.59%",
    top: "40.05%",
    right: "10.84%",
    bottom: "40.7%",
    left: "70.57%",
    position: "absolute",
  },
  button: {
    top: 2270,
    left: 429,
    width: 581,
    height: 153,
    position: "absolute",
  },
  text4: {
    color: Color.colorWhite,
    top: "23.67%",
    textAlign: "left",
    fontSize: FontSize.size_53xl,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  sityItem: {
    right: "5.2%",
    left: "89.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "35.5%",
    top: "34.91%",
    width: "5.3%",
    height: "29.59%",
  },
  sity: {
    top: 2016,
    height: 169,
    width: 1019,
  },
  country: {
    top: 1738,
    height: 169,
    width: 1019,
  },
  sex: {
    top: 1460,
    height: 169,
    width: 1019,
  },
  dateOfBirth1: {
    top: 279,
    left: 1,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGray_500,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    borderRadius: Border.br_3xs,
  },
  text8: {
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_53xl,
    fontFamily: FontFamily.centuryGothic,
    top: "23.67%",
    left: "0%",
    width: "100%",
  },
  groupChild: {
    height: "11.16%",
    width: "5.29%",
    top: "75.45%",
    bottom: "13.39%",
    left: "89.74%",
  },
  dateOfBirthParent: {
    top: 903,
    width: 1020,
    height: 448,
  },
  dateOfBirth3: {
    borderRadius: Border.br_3xs,
    left: 212,
    width: 1019,
    position: "absolute",
    top: 645,
  },
  groupItem: {
    left: "89.73%",
    bottom: "35.5%",
    top: "34.91%",
    width: "5.3%",
    height: "29.59%",
  },
  dateOfBirthGroup: {
    top: 913,
    left: 212,
    width: 1019,
    position: "absolute",
  },
  dataInput: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 2560,
    overflow: "hidden",
    width: "100%",
  },
});

export default DataInput;
