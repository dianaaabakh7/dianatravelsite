import React from 'react';

function Header() {
    return (
        <header style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f4f8' }}>
            <h1>Мой React Сайт о Путешествиях</h1>
            <nav>
                <a href="/">Главная</a> | <a href="/about">О нас</a>
            </nav>
        </header>
    );
}

export default Header;