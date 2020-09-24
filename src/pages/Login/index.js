import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// import FeaturedBackground from '../../components/FeaturedBackground';

import './styles.css'

export default function login() {
  return (
    <div className="login-container" >
        <section className="form">
            <form>
              <h1>Login</h1>

              <input placeholder="nome" type="text"/>
              <input placeholder="Email" type="text"/>
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
