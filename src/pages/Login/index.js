import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import '../global.css'
import './styles.css'

export default function Login() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();

  async function handkeLogin(e) {
    e.preventDefault();

    try {

      const params = {
        nome: nome,
        email: email
      }
      await api.post('sessions', params);

      history.push('/home');

    } catch (error) {
      alert('Erro ao fazer login, tente novamente');
    }
  }

  return (
    <div className="login-container" >
        <section className="form">
            <form onSubmit={handkeLogin} className="form-login">
              <h1>Login</h1>

              <input
              placeholder="nome"
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              />

              <input
              placeholder="Email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />

              <button type="submit">Entrar</button>

              <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#e02041"/>
                Não tenho cadastro
              </Link>
            </form>
          </section>
    </div>
  )
}
