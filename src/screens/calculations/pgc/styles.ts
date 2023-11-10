import { GestureHandlerRootView } from "react-native-gesture-handler"
import styled from "styled-components/native"
import { BackgroundComponent } from "../../../components/Background"
import { Platform, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
`

export const BackgroundContent = styled(BackgroundComponent)``

export const Content = styled.View`
  flex: 1;
  align-self: center;
  padding: 0 ${RFValue(16)}px;
  justify-content: space-between;
  margin-bottom: ${() => (Platform.OS === "android" ? "20px" : "30px")};
`
export const ContainerSex = styled.View`
  margin-top: 200px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(30)}px;
`

export const ContainerAge = styled(View)`
  align-self: center;
  width: 100%;
  margin-bottom: ${RFValue(15)}px;
`
export const ContainerSkinFolds = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(15)}px;
`

export const ContainerCalculaters = styled.View``

export const ContainerInputsdoubles = styled.View`
  width: 47%;
`

export const ButtonContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`
