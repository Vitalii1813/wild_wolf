import React, { Component } from 'react';
import '../blocks/Main/main.css';
import {Sausage} from "../DumbComponents/Sausage";
import {Reviews} from "../DumbComponents/Reviews";
export function MyComponent(){
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
                      <Reviews title='THE TIMES'/>
                      <Reviews title='CQ'/>
                      <Reviews title='VOQUE'/>
                      <Reviews title='GLAMOUR'/>
                      <Reviews title='GOOD HOUSEKEEPING'/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
