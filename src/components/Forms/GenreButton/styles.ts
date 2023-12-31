import { Ionicons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface IconsProps {
  type: "M" | "F";
}

interface ContainerProps {
  isActive: boolean;
  type: "M" | "F";
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.title};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};;
  

  ${({ isActive, type }) =>
    isActive &&
    type === "M" &&
    css`
      background-color: ${({ theme }) => theme.colors.genreMan};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === "F" &&
    css`
      background-color: ${({ theme }) => theme.colors.genreWoman};
    `}
`;

export const ButtonComponent = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled(Ionicons)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: #000;
  /* color: ${({ theme, type }) =>
    type === "M" ? theme.colors.success : theme.colors.attention}; */
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
`;
