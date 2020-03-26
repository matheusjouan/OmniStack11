import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import api from "../../services/api";

import {
  Container,
  Header,
  Logo,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentsList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailButton,
  DetailButtonText
} from "./styles";

import logoImg from "../../assets/logo.png";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Details", { incident });
  }

  async function loadIncidents() {
    // Evita busque a informação quando tiver caregando
    if (loading) {
      return;
    }

    // Buscou todas as informações
    if (total > 0 && incidents.length == total) {
      return;
    }

    setLoading(true);

    const response = await api.get(`/incidents`, {
      params: {
        page
      }
    });

    // anexas os casos (acresceta vetores)
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos.</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem vindo!</Title>
      <Description>Escolha um dos casos abaixos e salve o dia.</Description>

      <IncidentsList
        data={incidents}
        keyExtractor={inc => inc.id}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{item.ong.name}</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{item.title}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(item.value)}
            </IncidentValue>

            <DetailButton onPress={() => navigateToDetail(item)}>
              <DetailButtonText>Ver mais detalhes</DetailButtonText>
              <Feather name="arrow-right" size={17} color="#e02041" />
            </DetailButton>
          </Incident>
        )}
      />
    </Container>
  );
}
