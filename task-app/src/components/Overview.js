import React, { Component } from 'react';

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onButtonClicked } = this.props;

        return (
            <div>
                <input></input>
                <button onClick={this.onButtonClicked}></button>
            </div>
        );
    };
};

export default Overview;