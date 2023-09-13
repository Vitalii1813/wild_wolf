import React, { Component } from 'react';
import '../blocks/Main/main.css';

interface ReviewsProps {
    title: string;
    onClick: () => void; // Передаємо обробник кліку з MyComponent
}

export class Reviews extends Component<ReviewsProps> {
    render() {
        const { title, onClick } = this.props;
        return (
            <div>
                <div className="white_block_review" onClick={onClick}>
                    {title}
                </div>
            </div>
        );
    }
}

export default Reviews;
