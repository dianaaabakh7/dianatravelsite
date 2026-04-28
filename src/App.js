import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div className="card">
    <h2>Главная</h2>
    <p>Проект адаптирован под мобильные устройства (7.2)</p>
  </div>
);

const About = () => (
  <div className="card">
    <h2>О нас</h2>
    <p>Мы используем Flexbox для сетки (7.1)</p>
  </div>
);

// --- НОВОЕ: Страница Контакты с валидацией (Задание 8.1) ---
const Contacts = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateAndSend = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Введите корректный Email с символом @');
    } else {
      setError('');
      alert('Сообщение отправлено!');
    }
  };

  return (
    <div className="card">
      <h2>Контакты (8.1)</h2>
      <form onSubmit={validateAndSend}>
        <input
          className={error ? 'input-error' : ''}
          placeholder="Ваш Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}