import React from 'react';
import WidgetGrid from "./home/WidgetGrid";

const Home = () => (
    <div className={'home-content'}>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        My Widgets
                    </h1>
                    <h2 className="subtitle">
                        They are cool :3
                    </h2>
                </div>
            </div>
        </section>
        <WidgetGrid/>
    </div>
)
export default Home