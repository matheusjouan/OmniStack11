import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Content, Section, Form } from './styles';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  const [name, setName] = useState('');
  const [whats, setWhats] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      whats,
      city,
      uf,
      email,
      password,
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Cadastro Realizado com sucesso`);

      // após logado é encaminhado para outra página
      history.push('/');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02141" /> Voltar
          </Link>
        </Section>

        <Form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            vale={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Digite seu Whatsapp"
            vale={whats}
            onChange={(e) => setWhats(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              vale={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              className="uf"
              vale={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            vale={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            vale={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
