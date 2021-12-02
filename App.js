import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [quote, setQuote] = useState({
    _id: "hfevjsHROQiB",
    tags: ["famous-quotes"],
    content:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
    author: "Confucius",
    authorSlug: "confucius",
    length: 120,
    dateAdded: "2020-10-14",
    dateModified: "2020-10-14",
  });

  const [refreshing, setRefreshing] = useState(false);

  async function fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const fetchedQuotes = await response.json(response);
    return setQuote(fetchedQuotes);
  }

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(20).then(() => setRefreshing(false));
    fetchQuote();
  }, []);

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.mainDiv}>
        <View style={styles.titleMainDiv}>
          <Text style={styles.title}>Random Quote</Text>
        </View>

        <View style={styles.outsideView}>
          <View style={styles.insideView}>
            <Text style={styles.insideText}>
              {quote?.content}
              {"\n\n"}-{quote?.author}
            </Text>
          </View>

          <View style={styles.insideTags}>
            {quote?.tags.map((data, i) => {
              return (
                <View key={i} style={styles.outsideTags}>
                  <Text style={styles.tags}>{data}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <TouchableOpacity onPress={fetchQuote} style={styles.buttonStyle}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Bring me a new quote
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "stretch",
    justifyContent: "center",
    height: "100%",
  },

  titleMainDiv: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    backgroundColor: "#687089",
    marginTop: "10%",
  },

  title: {
    textAlign: "center",
    color: "white",
    width: "100%",
    fontSize: 20,
  },

  outsideView: {
    width: "100%",
  },

  insideView: {
    backgroundColor: "#767C96",
    color: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    paddingTop: "25%",
    paddingBottom: "25%",
  },

  insideText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  tags: {
    color: "white",
  },

  outsideTags: {
    backgroundColor: "#959AAD",
    color: "white",
    marginRight: "3%",
    marginBottom: "3%",
    padding: "2%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
  },

  insideTags: {
    position: "absolute",
    right: 0,
    bottom: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonStyle: {
    backgroundColor: "#687089",
    width: "95%",
    padding: "3%",
    textAlign: "center",
    borderRadius: 15,
    marginTop: "5%",
  },
});
