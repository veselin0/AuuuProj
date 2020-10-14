/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.subs1}>
        <Text>subs1</Text>
        <View style={styles.teIn}>
          <TextInput title="subs1" />
        </View>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Button title="ADD" />
          </View>
          <View style={styles.btn}>
            <Button title="DEL" color="red" />
          </View>
        </View>
      </View>
      <View style={styles.subs2}>
        <Text>subs2</Text>
        <View style={styles.place} id="place">
          <Text>Placeholder</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'cadetblue',
    padding: 10,
  },
  subs1: {
    padding: 30,
    flex: 1,
    backgroundColor: 'darkorange',
    margin: 10,
  },
  teIn: {
    flex: 1,
    backgroundColor: 'yellow',
    height: 150,
  },
  btns: {
    flexDirection: 'row',
    backgroundColor: 'goldenrod',
    height: 50,
    justifyContent: 'space-between',
  },
  btn: {
    margin: 10,
  },
  subs2: {
    padding: 30,
    flex: 1,
    backgroundColor: 'darkorchid',
    margin: 10,
  },
  place: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'fuchsia',
    height: 150,
  },
});
