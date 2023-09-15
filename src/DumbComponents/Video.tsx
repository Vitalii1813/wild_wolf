
import React, { Component } from 'react';
import axios from 'axios';
import '../blocks/Main/main.css';
import arrow from '../img/right.png';

interface VideoPlayerState {
    videoUrl: string;
}

export class VideoPlayer extends Component<{}, VideoPlayerState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            videoUrl: '',
        };
    }

    componentDidMount() {
        // Робимо запит за відеофайлом з іншого сайту
        axios.get('https://www.datocms-assets.com/60914/1677758155-3.mp4').then((response) => {
            // Отримали відповідь і встановлюємо URL відео
            this.setState({
                videoUrl: URL.createObjectURL(new Blob([response.data])),
            });
        });
    }

    render() {
        return (
            <div className="video_deodorant">
                <h1 className="how_works_title">How it works!</h1>
            {/*    <video controls>*/}
            {/*    <source src={this.state.videoUrl} type="video/mp4" />*/}
            {/*    Ваш браузер не підтримує відео.*/}
            {/*</video>*/}
                <div className="video_container">
                    <div className="video_content">
                        Video
                    </div>

                    <div className="white_catalog_view">
                        1. Choose your case 🎨
                        Our reusable Wild case is a stylish and timeless design - all you have to do is pick your colour.

                        2. Pick scents 🍭
                        Choose your favourite Wild fragrance and we'll take care of the rest.

                        3. Subscribe & save 33% or buy once 📦
                        We will ship your refills out to you exactly as and when you want.

                        <button className="get_started_btn catalog_white_btn">
                            GET STARTED
                            <img width="17"  height="17" src={arrow} alt="right"></img>
                        </button>
                    </div>

                </div>
                <div className="small_block_deo">
                    Deodorant 🌸
                </div>

            </div>
        );
    }
}
