import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"
import { Feather } from "@expo/vector-icons"
import { ButtonComponentPropsStyles } from "./props"

export const Container = styled.View<ButtonComponentPropsStyles>`
  height: ${RFValue(45)}px;
  border-radius: 5px;
  ${({ type }) =>
    type === "default" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  ${({ type }) =>
    type === "save" &&
    css`
      background-color: ${({ theme }) => theme.colors.genreMan};
    `}
  ${({ type }) =>
    type === "clean" &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
`

export const Button = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const Text = styled.Text`
  width: 70%;
  text-align: center;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
  justify-content: flex-end;
`
