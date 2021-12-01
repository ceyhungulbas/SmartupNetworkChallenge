import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function App() {
  const [quote, setQuote] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  async function fetchQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const fetchedQuotes = await response.json(response);
    setQuote(fetchedQuotes);
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          <View  style={styles.insideView}>
            <Text>{quote?.content}</Text>
            <Text>-{quote?.author}</Text>
            <Text>Tags: {quote?.tags}</Text>
            <Button onPress={fetchQuote} title="Refresh the quote!" />
          </View>      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center'
  }
});
