import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setdataNascimento] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome,
      email,
      senha,
      dataNascimento
    }

    try {
      const response = await api.post('account', data);

      console.log(response);

      alert('Cadastro concluido com secesso');
    } catch (error) {
      alert('Erro no cadastro, tente novamente');
      console.log(error);

    }
  }

  return (
    <div className="login-container" >
    <section className="form">
      <h1>Cadastro</h1>
        <form onSubmit={handleRegister}>
          <input placeholder="Nome" type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          />

          <input placeholder="Email" type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />

          <input placeholder="senha" type="text"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          />

          <input placeholder="Data de nascimento" type="Data"
          value={dataNascimento}
          onChange={e => setdataNascimento(e.target.value)}
          />

          <button type="submit">cadastrar</button>
        </form>

        <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para login
          </Link>
      </section>
</div>
  )
}