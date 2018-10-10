import React from 'react'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="content is-centered columns is-0">
                <div className={"column is-4"}/>
                <img className={"column is-1"}
                     style={{
                         borderTopLeftRadius: '50%',
                         borderTopRightRadius: '50%',
                         borderBottomLeftRadius: '50%',
                         borderBottomRightRadius: '50%',
                         marginRight: 15,
                         width: "90px",
                         height: "90px"
                     }}
                     src="/logo.svg"
                     alt="logo"
                />
                <div className={"column is-3"} style={{
                    paddingTop: "1.5rem"
                }}>
                    Built on <strong>React</strong> with <strong>Bulma</strong>
                    <br/>
                    Copyright 2018
                </div>
                <div className={"column is-4"}/>
            </div>
        </div>
    </footer>
)

export default Footer