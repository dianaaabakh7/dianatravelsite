import React from 'react';

// Здесь props — это объект с данными, которые мы передадим позже
function TravelCard(props) {
    return (
        <div className="card" style={{ border: '1px solid #ccc', margin: '10px', padding: '15px' }}>
            <h2>{props.country}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default TravelCard;