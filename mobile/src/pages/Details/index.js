import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as MailComposer from "expo-mail-composer";

import { Linking } from "react-native";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  Logo,
  Incident,
  IncidentProperty,
  IncidentPropertyFirst,
  IncidentValue,
  ProfileButton,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionButton,
  ActionText
} from "./styles";

import logoImg from "../../assets/logo.png";

export default function Details() {
  const route = useRoute();
  const incident = route.params.incident;

  const navigation = useNavigation();

  const message = `Olá, ${
    incident.ong.name
  } estou entrando em contato que gostaria ajudar no caso ${
    incident.title
  } com valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}`;

  function navigateToProfile() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.ong.email],
      body: message
    });
  }

  function sendWhats() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.ong.whats}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <ProfileButton onPress={navigateToProfile}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </ProfileButton>
      </Header>

      <Incident>
        <IncidentPropertyFirst>ONG:</IncidentPropertyFirst>
        <IncidentValue>
          {incident.ong.name} de {incident.ong.city}/{incident.ong.uf}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia.</HeroTitle>
        <HeroTitle>Seja herói deste caso.</HeroTitle>
        <HeroDescription>Entre em contato: </HeroDescription>

        <Actions>
          <ActionButton onPress={sendWhats}>
            <ActionText>Whatsapp</ActionText>
          </ActionButton>

          <ActionButton onPress={sendMail}>
            <ActionText>Email</ActionText>
          </ActionButton>
        </Actions>
      </ContactBox>
    </Container>
  );
}
