import React, { Component } from 'react';
import '../blocks/Main/main.css';

export class Reviews extends Component<{title:any}>{
    render() {
        const {title} = this.props;
        return (
            <div>
               <div className="white_block_review">
                   {title}
               </div>
            </div>
        );
    }
}
