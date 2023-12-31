import React from "react"
import { SafeAreaView } from "react-native"
import BackGround from "../../assets/bgImage.jpg"
import { Bg, Container } from "./styles"

export const BackgroundComponent = ({ children }) => {
  return (
    <Container>
      <Bg source={BackGround} resizeMode="cover">
        <SafeAreaView>{children}</SafeAreaView>
      </Bg>
    </Container>
  )
}
