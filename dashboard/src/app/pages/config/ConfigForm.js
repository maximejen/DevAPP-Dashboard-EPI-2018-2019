import React from 'react'

class ConfigForm extends React.Component {

    render () {
        return (
            <div className={"column is-multiline is-three-quarters"} style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px"
            }}>
                <h1 className={"column title"}>Clock</h1>
            </div>
        )
    }
}

export default ConfigForm