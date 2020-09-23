import React from 'react';

import './styles.css'

export default function login() {
  return (
    <div className="login-container">
      <section className="form">
          <form>
            <h1>Login</h1>

            <input placeholder="nome" type="text"/>
            <input placeholder="Email" type="text"/>
            <button type="submit">Entrar</button>
          </form>
      </section>
    </div>
  )
}
