import React from 'react';
import './Card.css';
import CardContent from './CardContent';

class Card extends React.Component {
    render() {
        return (
            <div className="plate">
                <CardContent />
            </div>
        )
    }
}

export default Card;