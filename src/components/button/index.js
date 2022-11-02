import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
