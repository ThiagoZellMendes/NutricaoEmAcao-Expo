import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const ErrorInput = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.attention};
  margin: 7px 0;
`;