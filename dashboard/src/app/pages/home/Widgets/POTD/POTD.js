import React from 'react'
import PropTypes from 'prop-types'

class POTD extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool,
        src: PropTypes.string,
        copyright: PropTypes.string,
        title: PropTypes.string,
        isLink: PropTypes.bool
    };

    static defaultProps = {
        isLoading: false,
        src: "",
        title: "Pix of the Day",
        copyright: "",
        isLink: true
    };

    static loading() {
        return (
            <div className={"columns is-centered"}>
                <img className={"column is-4"} src={'/loader.gif'} style={{height: "5rem"}} alt={"loading..."}/>
            </div>
        )
    }

    componentWillMount() {
    }

    render() {
        let copyrights = " - " + this.props.copyright;
        if (this.props.isLoading)
            return POTD.loading();
        return (
            <div className={"is-multiline is-centered"}>
                <div className={"columns is-centered"}>
                    <div className={"column subtitle is-10"}>{this.props.title + copyrights}</div>
                    {
                        this.props.isLink
                        &&
                        <a className={"column is-1"} href={this.props.src} target={"blank"}>
                            <span style={{
                                width: "2em",
                                height: "2em"
                            }} className={"fas fa-images"}/>
                        </a>
                    }
                </div>
                <img src={this.props.src} alt={"pic of the day"}/>
            </div>
        )
    }
}

export default POTD;