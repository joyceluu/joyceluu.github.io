import React from 'react';
import Info from './Info';
import Footer from './Footer';

class CardContent extends React.Component {
    render() {
        return (
            <div className="content">
                <Info />
                <Footer />
            </div>
        )
    }
}

export default CardContent;