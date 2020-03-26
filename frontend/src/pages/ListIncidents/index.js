import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import {
  Container,
  Header,
  Incidents,
  IncidentsList,
  LinkButton,
  PageActions,
} from './styles';
import logo from '../../assets/logo.svg';

export default function ListIncidents() {
  const [incidents, setIncidents] = useState([]);
  const [page, setPage] = useState(1);

  async function loadIncidents(page = 1) {
    const response = await api.get('incidents', {
      params: {
        page,
      },
    });

    setIncidents(response.data);
  }

  // Carregamento da página, trazer informações
  useEffect(() => {
    loadIncidents();
  }, []);

  function handlePage(action) {
    let nextPage = page;

    if (action === 'next') {
      nextPage = page + 1;
    } else {
      nextPage = page - 1;
    }

    setPage(nextPage);
    loadIncidents(nextPage);
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <span>Seja um herói e ajude uma ONG</span>
        <LinkButton>
          <Link className="button" to="/register">
            Cadastrar ONG
          </Link>

          <Link className="button2" to="/">
            Login
          </Link>
        </LinkButton>
      </Header>

      <Incidents>
        <h1>Casos cadastrados</h1>
        <IncidentsList>
          {incidents.map((inc) => (
            <li key={inc.id}>
              <strong>ONG:</strong>
              <p>{inc.ong.name}</p>

              <strong>CASO:</strong>
              <p>{inc.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{inc.description}</p>

              <strong>VALOR:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(inc.value)}
              </p>
            </li>
          ))}
        </IncidentsList>
      </Incidents>
      <PageActions>
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => handlePage('back')}
        >
          Anterior
        </button>

        <button type="button" onClick={() => handlePage('next')}>
          Próximo
        </button>
      </PageActions>
    </Container>
  );
}
