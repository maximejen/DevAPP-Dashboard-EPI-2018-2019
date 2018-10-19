import React from 'react';
import WidgetGrid from "../home/WidgetGrid";

class HomeRender extends React.Component {

    render() {
        return <div className={'home-content'}>
            <section className="hero" style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)'
            }}>
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
    }
}

export default HomeRender