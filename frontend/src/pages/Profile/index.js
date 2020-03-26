import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import { Container, Header, Incidents, IncidentsList } from './styles';
import logo from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const token = localStorage.getItem('token');

  const chave = 'Barer ' + token;

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: chave,
        },
      })
      .then((response) => setIncidents(response.data));
  }, [token]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: chave,
        },
      });

      setIncidents(incidents.filter((inc) => inc.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <Incidents>
        <h1>Casos cadastrados</h1>
        <IncidentsList>
          {incidents.map((inc) => (
            <li key={inc.id}>
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

              <button onClick={() => handleDeleteIncident(inc.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </IncidentsList>
      </Incidents>
    </Container>
  );
}
