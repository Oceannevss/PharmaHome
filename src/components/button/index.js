import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

const Button = ({onPress, label}) => {
  return (
    <StyledButton onPress={onPress}>
      <Text>{label}</Text>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: red;
  font-size: 32px;
`;
export default Button;
