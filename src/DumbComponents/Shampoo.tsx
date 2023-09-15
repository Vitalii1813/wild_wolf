import React, { Component } from 'react';
import '../blocks/Main/main.css';


export class Shampoo extends Component<{text: any, title: any, color: string,imageSrc: string }> {
    render() {
        const setColor = {
            backgroundColor: this.props.color, // Використовуємо значення кольору з пропс
            color: 'black', // Наприклад, текст може бути білим
            padding: '10px',
            // Додайте інші стилі, які вам потрібні
        };

        const { text, title,imageSrc } = this.props;
        return (
            <div>
                <div className="new_shampoo_item" style={setColor}>
                    <img height="150" width="150" src={imageSrc} alt="deo"></img>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        );
    }
}

export default Shampoo;
