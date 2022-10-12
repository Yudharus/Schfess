import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';

const Event = () => {
  return (
    <View style={{backgroundColor: 'white', height: 390}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 16,
          paddingTop: 12,
          paddingRight: 9,
        }}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require('../../src/images/event.png')}
        />
        <Text>Event</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{
            backgroundColor: '#F2F2F2',
            borderRadius: 9,
            width: 350,
            height: 35,
            marginTop: 10,
            marginRight: 10,
            marginLeft: 12,
            alignItems: 'center',
          }}
          placeholder="Cari event disini"
        />
        <Image
          style={{
            width: 30,
            height: 30,
            marginTop: 10,
          }}
          source={require('../../src/images/setting.png')}
        />
      </View>
      <View>
        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Image
              style={{
                marginLeft: 16,
                marginTop: 11,
                marginRight: 20,
                width: 130,
                height: 184,
              }}
              source={require('../../src/images/design_thinking.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 16,
                  marginTop: 6,
                  marginRight: 4,
                  height: 10,
                  width: 10,
                }}
                source={require('../../src/images/calendar.png')}
              />
              <Text style={{fontSize: 9, color: '#467D7F', paddingTop: 5}}>
                2 Desember 2022
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  marginLeft: 16,
                  marginTop: 6,
                }}>
                2021 Education Fair
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  width: 120,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet suspendisse id sed sit.
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  color: '#467D7F',
                }}>
                Selengkapnya
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{
                marginLeft: 16,
                marginTop: 11,
                marginRight: 20,
                width: 130,
                height: 184,
              }}
              source={require('../../src/images/design_thinking.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 16,
                  marginTop: 6,
                  marginRight: 4,
                  height: 10,
                  width: 10,
                }}
                source={require('../../src/images/calendar.png')}
              />
              <Text style={{fontSize: 9, color: '#467D7F', paddingTop: 5}}>
                2 Februari 2022
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  marginLeft: 16,
                  marginTop: 6,
                }}>
                Design Thinking
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  width: 120,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet suspendisse id sed sit.
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  color: '#467D7F',
                }}>
                Selengkapnya
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{
                marginLeft: 16,
                marginTop: 11,
                marginRight: 20,
                width: 130,
                height: 184,
                borderRadius: 7
              }}
              source={require('../../src/images/sexual_growth.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 16,
                  marginTop: 6,
                  marginRight: 4,
                  height: 10,
                  width: 10,
                }}
                source={require('../../src/images/calendar.png')}
              />
              <Text style={{fontSize: 9, color: '#467D7F', paddingTop: 5}}>
                2 Februari 2022
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  marginLeft: 16,
                  marginTop: 6,
                }}>
                Sexual Growth
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  width: 120,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet suspendisse id sed sit.
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  marginLeft: 16,
                  marginTop: 6,
                  color: '#467D7F',
                }}>
                Selengkapnya
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Event;
