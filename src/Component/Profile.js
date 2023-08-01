import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
export default function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  const resderUserCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.website}>{item.website}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={resderUserCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 30,
    paddingHorizontal: 10,
  },
  card:{
      backgroundColor:'#fff',
      borderRadius:8,
      padding:15,
      marginBottom:10

  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:5
  },
  email:{
    color:"#666",
    marginBottom:5,
  },
  username:{
    fontStyle:"italic",
    marginBottom:5
  },
  website:{
    color:"blue"
  }
});
