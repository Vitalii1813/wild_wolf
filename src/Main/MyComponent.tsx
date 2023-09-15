import React, {Component, useEffect, useState} from 'react';
import '../blocks/Main/main.css';

// Імпортуємо компоненту Reviews з файлу Reviews.tsx
import Reviews from '../DumbComponents/Reviews';
import Sausage from '../DumbComponents/Sausage';
import {VideoPlayer} from "../DumbComponents/Video";
import Shampoo from "../DumbComponents/Shampoo";
import deodorant from '../img/deodorant_pink.png';
import minideo from '../img/mini-deos.png';
import refills from '../img/refills.png';
import bars from '../img/shampoo_bars.png';
import soaps from '../img/shampoo_soaps.png';
import shampoo from "../DumbComponents/Shampoo";

interface MyComponentProps {}

interface MyComponentState {
    textIndex: number;
}

export class MyComponent extends Component<MyComponentProps, MyComponentState> {
    private textArray: string[];

    constructor(props: MyComponentProps) {
        super(props);
        this.state = {
            textIndex: 0,
        };

        this.textArray = [
            "Proved that natural deos do work just as well as antiperspirant",
            "A next-level deodorant that is kind to your skin & the planet",
            "Wild makes a mundane moment that little bit more satisfying",
            "Best subscription box for natural deodorant",
            "Obsessed with the gorgeous scents"
            // Додайте більше текстів за потреби
        ];
    }

    handleTextChange = () => {
        const newIndex = (this.state.textIndex + 1) % this.textArray.length;
        this.setState({ textIndex: newIndex });
    };

    render() {
        const currentText = this.textArray[this.state.textIndex];

        return (
            <div>
                <div className="main_content">
                    <h1 className="main_header_title">
                        Sustainable natural deodorant delivered straight to your door
                    </h1>
                    <div className="sausage_container">
                        <Sausage color="purple" title="👃 Effective" text="Rigorously tried, tested and customer approved" />
                        <Sausage color="orange" title="❌ No waste" text="No waste Unique plastic-free, compostable refills" />
                        <Sausage color="lightgreen"  title="🌱 Naturally vegan" text="Naturally vegan Powered by plants, not parabens or aluminium" />
                        <Sausage color="pink"  title="📦 Convenient" text="Convenient Delivered through your letterbox when needed" />
                    </div>

                    <div className="container_reviews">
                        <h2>Some Wild reviews 📣</h2>
                        <div className="wild_reviews">
                            <Reviews title='THE TIMES' onClick={this.handleTextChange} />
                            <Reviews title='CQ' onClick={this.handleTextChange} />
                            <Reviews title='VOQUE' onClick={this.handleTextChange} />
                            <Reviews title='GLAMOUR' onClick={this.handleTextChange} />
                            <Reviews title='GOOD HOUSEKEEPING' onClick={this.handleTextChange} />



                        </div>
                        <div className="wild_reviews_text">
                            <div className="container_wild_reviews_text">
                                {currentText}
                            </div>
                        </div>
                    </div>

                    <div className="work_video_container">
                            <VideoPlayer></VideoPlayer>
                    </div>

                    <div className="mini_shampoo_items">
                            <Shampoo color="white" title="Deodorant" text="Plans from £10" imageSrc={deodorant}/>
                            <Shampoo color="white" title="Refills" text="From £6" imageSrc={refills}/>
                            <Shampoo color="white" title="Mini Deos" text="From £3.5" imageSrc={minideo}/>
                            <Shampoo color="white" title="Shampoo Bars" text="From £8.5" imageSrc={bars}/>
                            <Shampoo color="white" title="Soaps" text="Plans from £4" imageSrc={soaps}/>
                    </div>

                </div>
            </div>
        );
    }
}
