import React from 'react'
import TestGrid from "./home/TestGrid";
import WeatherFetcher from "./home/Widgets/weather/WeatherFetcher";

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
        <WeatherFetcher/>
        <TestGrid/>
    </div>
)
export default Home