import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';

const Diskusi = () => {
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 9,
        marginRight: 9,
        marginBottom: 7,
      }}>
      <View>
        {/* kategori */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#6AA69A',
              width: 103,
              height: 41,
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 18, width: 18}}
                source={require('../../src/images/zap.png')}
              />
              <Text style={{ color: '#467D7F', fontSize: 10, fontWeight: '400', fontHeight: 124, paddingTop: 3}}>Diskusi Baru</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 18, width: 18}}
              source={require('../../src/images/fire.png')}
            />
            <Text style={{ color: '#BDBDBD', fontSize: 10, fontWeight: '400', fontHeight: 124, paddingTop: 3}}>Top Diskusi</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 18, width: 18}}
              source={require('../../src/images/brush.png')}
            />
            <Text style={{ color: '#BDDBD', fontSize: 10, fontWeight: '400', fontHeight: 124, paddingTop: 1}}>Rekomendasi</Text> 
          </View>
        </View> 
        {/* kategori */}
        {/* comment */}
        <View style={{flexDirection: 'column'}}>
          <View style={{marginLeft: 30, flexDirection: 'row'}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../src/images/miranda.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  paddingLeft: 20,
                  flexDirection: 'row',
                }}>
                <Text style={{paddingRight: 4, color: '#000000'}}>Miranda</Text>
                <Text style={{paddingRight: 4, color: '#90D5C7', fontSize: 12}}>@Miranda99</Text>
                <Text style={{ fontSize: 9, color: '#BDBDBD', paddingTop: 2}}>1m ago</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 7,
                  paddingLeft: 20,
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    lineHeight: 13,
                    paddingRight: 25,
                    color: '#000000'
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet suspendisse id sed sit.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 7,
                  paddingLeft: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 12, height: 15}}
                  source={require('../../src/images/comment.png')}
                />
                <Text style={{paddingLeft: 10, fontSize: 8, paddingRight: 19}}>
                  2 Replies
                </Text>
                <Image
                  style={{width: 12, height: 13}}
                  source={require('../../src/images/love.png')}
                />
                <Text style={{paddingLeft: 10, fontSize: 8}}>5 Likes</Text>
              </View>
            </View>
          </View>
          <View style={{marginLeft: 30, flexDirection: 'row'}}>
            <Image
              style={{width: 40, height: 40, marginTop: 10}}
              source={require('../../src/images/jonathan.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  paddingLeft: 20,
                  flexDirection: 'row',
                  paddingTop: 10,
                }}>
                <Text style={{paddingRight: 4, color: '#000000'}}>Jonathan</Text>
                <Text style={{paddingRight: 4, color: '#90D5C7', fontSize: 12}}>@Jojo24</Text>
                <Text style={{ fontSize: 9, color: '#BDBDBD', paddingTop: 2}}>3m ago</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 7,
                  paddingLeft: 20,
                }}>
                <Text style={{fontSize: 11, lineHeight: 13, paddingRight: 25, color: '#000000'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet suspendisse id sed sit.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 7,
                  paddingLeft: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 12, height: 15}}
                  source={require('../../src/images/comment.png')}
                />
                <Text style={{paddingLeft: 10, fontSize: 8, paddingRight: 19}}>
                  4 Replies
                </Text>
                <Image
                  style={{width: 12, height: 13}}
                  source={require('../../src/images/love.png')}
                />
                <Text style={{paddingLeft: 10, fontSize: 8}}>24 Likes</Text>
              </View>
            </View>
          </View>
          <View style={{marginLeft: 30, flexDirection: 'row', marginTop: 10}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../src/images/berlian.png')}
            />
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  paddingLeft: 20,
                  flexDirection: 'row',
                }}>
                <Text style={{paddingRight: 4, color: '#000000'}}>Berlian Restu</Text>
                <Text style={{paddingRight: 4, color: '#90D5C7', fontSize: 12}}>@RestuBerlian</Text>
                <Text style={{ fontSize: 9, color: '#BDBDBD', paddingTop: 3}}>5m ago</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 7,
                  paddingLeft: 20,
                }}>
                <Text style={{fontSize: 11, lineHeight: 13, paddingRight: 25, color: '#000000'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet suspendisse id sed sit.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 7,
                  paddingLeft: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 12, height: 15}}
                  source={require('../../src/images/comment.png')}
                />
                <Text style={{paddingLeft: 10, fontSize: 8, paddingRight: 19}}>
                  35 Replies
                </Text>
                <Image
                  style={{width: 12, height: 13}}
                  source={require('../../src/images/love.png')}
                />
                <Text style={{paddingLeft: 10, fontSize: 8}}>100 Likes</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 30,
            }}>
            <Text style={{fontSize: 9, color: 'grey'}}>LIHAT LENIH BANYAK</Text>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../src/images/more.png')}
            />
          </View>
        </View>
        {/* comment */}
      </View>
    </View>
  );
};

export default Diskusi;
