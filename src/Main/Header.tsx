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

                <div className="content_header">
                    <div className="fix_content">
                        <h1 className="title_content_header">
                            Pup-grade your deo game!
                        </h1>
                        <p className="sub_content">
                            New Limited Edition Sausage Dog case and
                            luxurious Amber & Oud deodorant scent
                        </p>

                        <button className="pink_start">
                            GET STARTED
                        </button>
                    </div>
                </div>

                </div>
        </>
    );
}