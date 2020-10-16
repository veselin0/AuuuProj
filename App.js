import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);

  const textInputHandler = (text) => {
    setText(text);
  };

  const addTextsHandler = () => {
    setTexts(() => [...texts, {id: Math.random().toString(), value: text}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here!"
          onChangeText={textInputHandler}
          value={text}
        />
      </View>
      <View style={styles.btn}>
        <Button title="ADD" onPress={addTextsHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={texts}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  btn: {
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: 'pink',
    borderColor: 'violet',
    borderWidth: 3,
    marginVertical: 5,
  },
});
