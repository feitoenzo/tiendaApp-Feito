/* import { Button, StyleSheet, Text, TextImput, View } from "react-native";

import { FlatList } from "react-native-web";
import { useState } from "react";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const onHandleChangeText = text => {
    setTextItem(text);
  };
  const addItem = () => {
    setList (estadoAnterior => [
      ...estadoAnterior,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };
  // solo con parentesis retorno solo un componente
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Button
        title="Edit"
        onPress={() => console.log("aqui se abre un modal")}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View >
        <TextImput
          placeholder="elemento de la lista"
          style={styles.input}
          onChangeText={onHandleChangeText}
          value={textItem}
        />
        <Button title="Presiona Aqui" onPress={addItem} />
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
   container: {
    flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     justifyContent: "center",
   },
   title: {
     marginTop: 16,
     paddingVertical: 8,
     borderWidth: 8,
     borderColor: "#61dafb",
     borderRadius: 6,
     fontSize: 40,
   },
 });
 */

/* import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
   const [textItem, setTextItem] = useState("");
   const [list, setList] = useState([]);
 
   const onHandleChangeText = (text) => {
     setTextItem(text);
   };
 
   const addItem = () => {
     setList((estadoAnterior) => [
       ...estadoAnterior,
       { name: textItem, id: Math.random().toString() },
     ]);
     setTextItem("");
   };
 
   const renderItem = ({ item }) => (
     <View>
       <Text>{item.name}</Text>
       <Button
         title="Edit"
         onPress={() => console.log("aqui se abre un modal")}
       />
     </View>
   );
 
   return (
     <View style={styles.container}>
       <View>
         <TextInput
           placeholder="elemento de la lista"
           style={styles.input}
           onChangeText={onHandleChangeText}
           value={textItem}
         />
         <Button title="Presiona Aquí" onPress={addItem} />
       </View>
       <View>
         <FlatList
           data={list}
           renderItem={renderItem}
           keyExtractor={(item) => item.id}
         />
       </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     justifyContent: "center",
   },
   input: {
     height: 40,
     borderColor: "gray",
     borderWidth: 1,
     marginBottom: 10,
     paddingHorizontal: 10,
   },
 });
  */

import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const onHandleChangeText = (text) => {
    setTextItem(text);
  };

  const addItem = () => {
    setList((estadoAnterior) => [
      ...estadoAnterior,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
      <Button
        title="Edit"
        onPress={() => console.log("Aquí se abre un modal")}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Elemento de la lista"
          style={styles.input}
          onChangeText={onHandleChangeText}
          value={textItem}
        />
        <Button title="Presiona Aquí" onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    width: "80%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
