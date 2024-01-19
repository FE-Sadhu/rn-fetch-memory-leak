/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  const timer = useRef<NodeJS.Timeout>();
  const [isFetch, setIsFetch] = useState(false);

  const fetchApi = useCallback(async () => {
    const res = await fetch(
      'https://api.github.com/repos/facebook/react-native',
    );
    console.log(' res > ', res);
  }, []);

  useEffect(() => {
    if (isFetch) {
      timer.current = setInterval(fetchApi, 500);
    } else {
      clearInterval(timer.current);
    }
  }, [isFetch, fetchApi]);

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          setIsFetch(true);
        }}>
        <Text>start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          setIsFetch(false);
        }}>
        <Text>pause</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'lightyellow',
  },
});

export default App;
