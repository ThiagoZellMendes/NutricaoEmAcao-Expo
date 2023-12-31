import { Feather } from "@expo/vector-icons"
import { FlatList, Text, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { getBottomSpace } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { BackgroundComponent } from "../../components/Background"
import { PropsData } from "./props"

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
`

export const BackgroundContent = styled(BackgroundComponent)`
`

export const ContainerTitle = styled(View)`
  width: 100%;
  align-items: flex-start;
  padding: 0 ${RFValue(16)}px ${RFValue(10)}px ${RFValue(16)}px;
`

export const Title = styled(Text)`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title_dark};
`

export const ContainerLogo = styled.View`
  align-self: center;
  margin-bottom: 16px;
`

export const ContainerList = styled.View`
  height: ${RFValue(300)}px;
  width: 93%;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.text};
  padding: ${RFValue(6)}px ${RFValue(10)}px;
  margin: 0 15px;
  margin-bottom:${RFValue(20)}px;
`;

export const PatientsList = styled(FlatList<PropsData>)
.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  }
})`
  width: 100%;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 5px 0;
  `

  export const IconFeedBack = styled(Feather)`
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.text};
    align-items: center;
    margin-top: 100px;
  `

export const FeedBackWithoutPatients = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  margin-top: 16px;
`

export const ContainerAddPatients = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  margin: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(25)}px;
  align-self: flex-end;
  height: ${RFValue(44)}px;
  width: ${RFValue(44)}px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`

export const IconAdd = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
  align-items: center;
`

