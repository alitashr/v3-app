/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {Dimensions} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WebView from 'react-native-webview';

const App: () => Node = () => {
    const window = Dimensions.get('window');
    const screen = Dimensions.get('screen');
    
  const iframeWidth = window.width; //Math.round(Dimensions.get('window').width);
  const iframeHeight = window.height; //Math.round(Dimensions.get('window').height);
 
  const [iframeWid,setIframeWid ] = useState(iframeWidth);
  const [iframeHgt,setIframeHgt ] = useState(iframeHeight);
  
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log("isDarkMode", isDarkMode);

  useEffect(() => {
      Dimensions.addEventListener('change', ({window:{width,height}})=>{
      setIframeWid(width);
      setIframeHgt(height);
      // if (width<height) {
      //   //setOrientation("PORTRAIT");
      // } else {
      //   //setOrientation("LANDSCAPE")
      // }
    })

  }, []);
  const injectJs = `
  const meta = document.createElement('meta'); 
  meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1'); 
  meta.setAttribute('name', 'viewport'); 
  document.getElementsByTagName('head')[0].appendChild(meta); 
  `

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar hidden={true} backgroundColor={'#fff'} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          flex: 1
          }}>
          <WebView
            originWhitelist={['*']}
            source={{uri: 'https://v3.explorug.com/explorug.html?page=wovenedge&pageview=app'}}
            style={{height: iframeHgt, width: iframeWid, resizeMode: 'cover', flex: 1 }}
            
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
