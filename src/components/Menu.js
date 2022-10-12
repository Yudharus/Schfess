import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';

const Menu = () => {
  return (
    <View style={{ flex: 1, height: 50, backgroundColor: '#FFFFFF', flexDirection: 'row', paddingTop: 8, paddingBottom: 4, justifyContent: 'space-evenly',  }}>
        <View style={{ alignItems: 'center'}}>
            <Image
                style={{
                    width: 22,
                    height: 22,
                    // marginRight: 10
                    color: '#6AA69A'
                }}
                source={require('../../src/images/home.png')}
            />
          <Text style={{ fontSize: 10, fontWeight: '500', fontHeight: 11, color: '#6AA69A', }}> 
            Home
          </Text>
        </View>
        <View style={{ alignItems: 'center'}}>
            <Image
                style={{
                    width: 22,
                    height: 22,
                    // marginRight: 10
                    color: '#6AA69A'
                }}
                source={require('../../src/images/messages.png')}
            />
          <Text style={{ fontSize: 10, fontWeight: '500', fontHeight: 11, color: '#BDBDBD', }}> 
            Diskusi
          </Text>
        </View>
        <View style={{ alignItems: 'center'}}>
            <Image
                style={{
                    width: 22,
                    height: 22,
                    // marginRight: 10
                    color: '#BDBDBD'
                }}
                source={require('../../src/images/book.png')}
            />
          <Text style={{ fontSize: 10, fontWeight: '500', fontHeight: 11, color: '#BDBDBD', }}> 
            Belajar
          </Text>
        </View>
        <View style={{ alignItems: 'center'}}>
            <Image
                style={{
                    width: 22,
                    height: 22,
                    // marginRight: 10
                    color: '#BDBDBD'
                }}
                source={require('../../src/images/check_circled.png')}
            />
          <Text style={{ fontSize: 10, fontWeight: '500', fontHeight: 11, color: '#BDBDBD', }}> 
            Support
          </Text>
        </View>
        <View style={{ alignItems: 'center'}}>
            <Image
                style={{
                    width: 22,
                    height: 22,
                    // marginRight: 10
                    color: '#BDBDBD'
                }}
                source={require('../../src/images/schpedia.png')}
            />
          <Text style={{ fontSize: 10, fontWeight: '500', fontHeight: 11, color: '#BDBDBD', }}> 
            Schpedia
          </Text>
        </View>
    </View>
  );
};

export default Menu;