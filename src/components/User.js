import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const User = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', marginTop: 16}}>
        <Image
          style={{marginLeft: 16, width: 42, height: 42}}
          source={require('../../src/images/user.png')}
        />
        <View
          style={{
            flexDirection: 'column',
            paddingLeft: 16,
            fontFamily: 'Roboto',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#467D7F'}}>Budi Kurnia</Text>
          <Text style={{ color: '#467D7F'}}>IX SMA</Text>
        </View>
        <Image
          style={{
            width: 24,
            height: 24,
            marginLeft: 215,
            paddingTop: 30,
          }}
          source={require('../../src/images/ring.png')}
        />
      </View>
      {/* session card */}
      <View
        style={{
          backgroundColor: 'grey',
          margin: 20,
          paddingTop: 19,
          paddingLeft: 15,
          paddingRight: 15,
          height: 90,
          borderRadius: 9,
          backgroundColor: '#467D7F',
          marginTop: 15,
          marginButtom: 13,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: '#FFFFFF', fontSize: 12, fontWeight: '700', fontHeight: 14}}>Sch Poin</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../src/images/star-circle.png')}
              />
              <Text style={{color: '#E6BC36', fontSize: 24, fontWeight: '700', fontHeight: 28}}>2523</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: 130,
            }}>
            <Image
              style={{height: 21, width: 21}}
              source={require('../../src/images/add_circled.png')}
            />
            <Text style={{color: '#FFFFFF', fontSize: 10, fontHeight: 12, fontWeight: '500'}}>Isi Poin</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: 25,
            }}>
            <Image
              style={{height: 21, width: 21}}
              source={require('../../src/images/circle.png')}
            />
            <Text style={{paddingTop: 2, color: '#FFFFFF', fontSize: 10, fontHeight: 12, fontWeight: '500'}}>Tukar Poin</Text>
          </View>
        </View>
      </View>
      {/* session card */}
      <View
        style={{
          backgroundColor: '#DDFFF8',
          flexDirection: 'row',
          marginLeft: 16,
          marginRight: 16,
          marginTop: 5,
          marginButtom: 8,
          height: 35,
          marginButtom: 8,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Image
          style={{height: 25, width: 25, paddingTop: 3, paddingButtom: 4}}
          source={require('../../src/images/Toa.png')}
        />
        <Text style={{paddingTop: 3, paddingButtom: 4, paddingLeft: 6}}>
          Berita info terkini seputar pendidikan...
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 8,
          marginTop: 10,
          marginLeft: 16,
          marginRight: 16,
          alignItems: 'center',
        }}>
        <Image
          style={{height: 25, width: 25, paddingTop: 3, paddingButtom: 4}}
          source={require('../../src/images/help.png')}
        />
        <Text style={{paddingLeft: 6, color: '#828282'}}>Mau tanya apa sekarang?</Text>
        <Text style={{paddingLeft: 3, color: '#367D7F'}}>Klik disini untuk bertanya</Text>
        <Image
          style={{height: 24, width: 24, paddingTop: 3, paddingButtom: 4}}
          source={require('../../src/images/Arrow_Left_MD.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 16,
          marginRight: 16,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'grey'}} />
      </View>
    </View>
  );
};

export default User;
