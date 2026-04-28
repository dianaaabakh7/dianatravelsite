import React from 'react';

// Компонент принимает объект props. Мы достаем из него 'name'.
function Card(props) {
    return (
        <div style={{
            border: '2px solid #ca75a0',
            borderRadius: '15px',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '300px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
        }}>
            <h2 style={{ color: '#334155' }}>{props.name}</h2>
        </div>
    );
}

export default Card;