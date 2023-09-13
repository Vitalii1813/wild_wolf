import '../blocks/Header/header.css';
import React from "react";
import user from '../img/user.png';
import bag from '../img/bag.png';
export function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                        <ul>
                            <li>Shop</li>
                            <li>Learn</li>
                            <li>Refer a friend</li>
                            <li>Pre order shower gel</li>
                        </ul>
                            <div className="header_logo">
                                Wild
                            </div>
                            <div className="right_menu">

                                <button className="get_started_btn">GET STARTED</button>
                                    <div className="img_logo">
                                        <div className="user_img">
                                            <img src={user} alt="User"/>
                                        </div>
                                        <div className="shop_img">
                                            <img src={bag} alt="Shop"/>
                                        </div>
                                    </div>
                                </div>

                </div>

                </div>
        </>
    );
}