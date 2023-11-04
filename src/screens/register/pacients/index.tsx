import React, { useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { ButtonComponent } from "../../../components/ButtonComponent"
import { InputForm } from "../../../components/InputForm"
import Logo2 from "../../../assets/Logo2.svg"
import { SafeAreaView } from "react-native"
import {
  BackgroundContent,
  ButtonContainer,
  Container,
  ContainerForm,
  ContainerLogo,
  ContentRegister,
} from "./styles"
import { DropdownComponent } from "../../../components/DropDonwList"

export function RegisterPatients() {
  const [sexo, setSexo] = useState()
  const { navigate } = useNavigation<any>()

  const schema = Yup.object().shape({
    cpf: Yup.string().required("digite seu CPF"),
    name: Yup.string().required("digite o nome do paciente"),
    idade: Yup.string().required("digite seu sobrenome"),
    sexo: Yup.string().required("digite seu CPF"),
  })

  const handleRegister = () => {
    navigate("SignIn")
    console.log("Nutricionista cadastrado com sucesso")
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  console.log(sexo)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundContent>
          <ContainerLogo>
            <Logo2 />
          </ContainerLogo>
          <ContentRegister>
            <ContainerForm>
              <InputForm
                name="cpf"
                control={control}
                placeholder={"Digite seu cpf"}
                errorInput={errors.cpf && errors.cpf.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="name"
                control={control}
                placeholder={"Digite o nome completo do paciente"}
                errorInput={errors.name && errors.name.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="idade"
                control={control}
                placeholder={"Digite o a idade do paciente"}
                errorInput={errors.idade && errors.idade.message}
              />
            </ContainerForm>
            <ContainerForm>
              <InputForm
                name="sexo"
                control={control}
                placeholder={"Selecione o sexo do paciente"}
                errorInput={errors.sexo && errors.sexo.message}
              />
            </ContainerForm>
            <ContainerForm>
              <DropdownComponent 
                placeholderDrop={"Selecione o sexo do paciente"}
                item={setSexo}
                />
            </ContainerForm>
          </ContentRegister>
          <ButtonContainer>
            <ButtonComponent
              title={"Cadastar"}
              nameIcon="chevron-right"
              onPress={handleSubmit(handleRegister)}
            />
          </ButtonContainer>
        </BackgroundContent>
      </Container>
    </SafeAreaView>
  )
}