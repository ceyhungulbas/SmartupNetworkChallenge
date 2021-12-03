import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./StylesheetFromFile";

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

