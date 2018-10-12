import React from 'react';
import PropTypes from 'prop-types';

class ErrorMessage extends React.Component {
    static propTypes = {
        errorTitle: PropTypes.string,
        errorMessage: PropTypes.string
    };

    render() {
        return (
            <article className="message is-danger is-12 column">
                <div className="message-header">
                    <p>{this.props.errorTitle}</p>
                </div>
                <div className="message-body">
                    {this.props.errorMessage}
                </div>
            </article>);
    }
}

export default ErrorMessage