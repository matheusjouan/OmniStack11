import React, { useState } from 'react';
import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';
import { Container, Section, Form } from './styles';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('session', { email, password });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('ongName', response.data.user.name);

      history.push('/profile');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <Container>
      <Section>
        <img src={logo} alt="logo" />
        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02141" /> Não tenho cadastro
          </Link>
        </Form>
      </Section>
      <img src={heroesImg} alt="heros" />
    </Container>
  );
}
