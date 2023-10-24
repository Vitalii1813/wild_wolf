import React from "react";
import '../blocks/Footer/footer.css';
import instagram from "../img/ins.webp";
import facebook from "../img/facebook.webp";
import twitter from "../img/twitter.webp";
import tiktok from "../img/tiktok.webp";
export function Footer() {
    return (
            <div className="footer_main">
                <h1>Footer</h1>

                <div className="social_media">
                    <div className="avatar_logo">
                        <img src={instagram}/>
                    </div>
                    <div className="avatar_logo">
                        <img src={facebook}/>
                    </div>
                    <div className="avatar_logo">
                        <img src={twitter}/>
                    </div>
                    <div className="avatar_logo">
                        <img src={tiktok}/>
                    </div>
                </div>

                <div className="vertical-menu">
                    <a href="#" className="active">Home</a>
                    <a href="#">Bundles</a>
                    <a href="#">Cases</a>
                    <a href="#"> Refills</a>
                    <a href="#">Soaps</a>
                    <a href="#">Mini Deos</a>
                    <a href="#">Shampoo Bars</a>
                    <a href="#">All</a>
                </div>


            </div>
    );
}