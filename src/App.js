import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// --- Задание 9.1 и 9.2: Компонент с загрузкой данных из API ---
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Имитируем запрос к API для получения списка пользователей
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.slice(0, 5))); // Берем только первых 5
  }, []);

  return (
    <div className="card">
      <h2>Главная (Загрузка API)</h2>
      <ul style={{ textAlign: 'left' }}>
        {users.map(user => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

// --- Задание 10.1 и 10.2: Компонент со списком задач ---
const Tasks = () => {
  const [items, setItems] = useState(['Изучить React', 'Сдать проект']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>Задания (Списки и удаление)</h2>
      <div style={{ marginBottom: '15px' }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Что нужно сделать?"
        />
        <button onClick={addItem}>Добавить</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            {item}
            <button onClick={() => removeItem(index)} style={{ backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Основной компонент с Навигацией и Маршрутами ---
export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Шаг 1: Обновленная навигация (меню) */}
        <nav style={{ padding: '20px', background: '#f4f4f4', marginBottom: '20px' }}>
          <Link to="/" style={{ margin: '10px' }}>Главная</Link> |
          <Link to="/tasks" style={{ margin: '10px' }}>Задания (Lab 10)</Link>
        </nav>

        <div className="container">
          {/* Шаг 2: Добавленные маршруты */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}