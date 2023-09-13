import React, { Component } from 'react';
import '../blocks/Main/main.css';

export class Sausage extends Component<{ text: any, title: any, color: string }> {
    render() {
        const setColor = {
            backgroundColor: this.props.color, // Використовуємо значення кольору з пропс
            color: 'black', // Наприклад, текст може бути білим
            padding: '10px',
            // Додайте інші стилі, які вам потрібні
        };

        const { text, title } = this.props;

        return (
            <div>
                <div className="small_props_dogs" style={setColor}>
                    <div className="small_props_dogs_item">
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sausage;
