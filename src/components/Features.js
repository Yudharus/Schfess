import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';

const Features = () => {
  return (
    <View style={{backgroundColor: 'white', height: 220}}>
      <View
        style={{
          marginLeft: 17,
          marginTop: 16,
          flexDirection: 'row',
        }}>
        <Image
          style={{height: 24, width: 24}}
          source={require('../../src/images/diamond.png')}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: '#467D7F',
            fontHeight: 125,
            paddingLeft: 10,
          }}>
          Features
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
          }}>
          <View
            style={{
              height: 154,
              width: 154,
              backgroundColor: '#DDFFF8',
              borderRadius: 10,
              // alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{height: 80, width: 80}}
                source={require('../../src/images/trivia2.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  fontHeight: 11,
                  paddingLeft: 10,
                  paddingRight: 8,
                  color: '#467D7F',
                }}>
                Klik TRIVIA, biar tambah pengetahuan!
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: '400',
                  fontHeight: 125,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: '#467D7F',
                }}>
                Buat sekedar pengetahuan, mungkin beberapa informasi disini baru
                kamu tau loh. Jadi jangan berhenti buat nambah pengetahuanmu
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 154,
              width: 154,
              backgroundColor: '#FDD1D1',
              borderRadius: 10,
              // alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{height: 80, width: 80}}
                source={require('../../src/images/utbk2.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  fontHeight: 11,
                  paddingLeft: 10,
                  paddingRight: 8,
                  color: '#D97F7F',
                }}>
                Data Skor Rekapitulasi UTBK!
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: '400',
                  fontHeight: 125,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: '#FA9B9B',
                }}>
                Wajib Cek skor rekapitulasi UTBK sebelum pilih Perguruan Tinggi,
                jadi kamu bisa bikin strategi sendiri buat masuk ke Perguruan
                Tinggi yang dipilih
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Features;
