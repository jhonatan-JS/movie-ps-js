import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

export default function Register() {
  return (
    <div className="login-container" >
    <section className="form">
      <h1>Cadastro</h1>
        <form>
          <input placeholder="Nome" type="text"/>
          <input placeholder="Email" type="text"/>
          <input placeholder="senha" type="text"/>
          <input placeholder="Data de nascimento" type="Data"/>
          <button type="submit">cadastrar</button>
        </form>

        <Link className="back-link" to="/register">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para login
          </Link>
      </section>
</div>
  )
}
