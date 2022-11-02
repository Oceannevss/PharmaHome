import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled, {css} from 'styled-components';

const Home = () => {
  return <HomeStyled> Phama Home</HomeStyled>;
};

//<Text style={style.home}> PHARMA HOME</Text>
const style = StyleSheet.create({
  home: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 100,
    marginTop: 200,
  },
});

const HomeStyled = styled.text`
  font-size: 20;
  font-weight: bold;
`;

export default Home;
