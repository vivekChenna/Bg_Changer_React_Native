/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function App(): JSX.Element {
  const [color, setColor] = useState('#ffffff');
  const [firstBox, setFirstBox] = useState('#ffffff');
  const [secondBox, setSecondBox] = useState('#ffffff');
  const [thirdBox, setThirdBox] = useState('#ffffff');

  const background = () => {
    let finalColor = '#';
    let colorList = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      let element = colorList[Math.floor(Math.random() * colorList.length)];

      finalColor = finalColor + element;
    }
    return finalColor;
  };

  const bgHandler = () => {
    let arr = [setColor, setFirstBox, setSecondBox, setThirdBox];
    for (let i = 0; i < arr.length; i++) {
      let ans = background();
      arr[i](ans);
    }
  };

  function squareBox() {
    bgHandler();
  }

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <View style={styles.childContainer}>
        <View
          style={[styles.firstBox, styles.box, {backgroundColor: firstBox}]}>
          <Text> 1st</Text>
        </View>
        <View
          style={[styles.firstBox, styles.box, {backgroundColor: secondBox}]}>
          <Text>2nd</Text>
        </View>
        <View
          style={[styles.firstBox, styles.box, {backgroundColor: thirdBox}]}>
          <Text> 3rd</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => [squareBox()]}>
          <Text style={styles.btnText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  childContainer: {
    flex: 1,
    gap: 20,
    flexDirection: 'row',
    marginTop: 15,
  },

  box: {
    width: 100,
    height: 100,
  },
  btnContainer: {
    padding: 4,
  },
  btnText: {
    fontSize: 30,
    borderBlockColor: '#000',
    borderWidth: 1,
    padding: 8,
    color: '#fff',
    fontWeight: '600',
  },
  firstBox: {
    borderBlockColor: '#000000',
    borderWidth: 2,
    padding: 10,
  },
});

export default App;
