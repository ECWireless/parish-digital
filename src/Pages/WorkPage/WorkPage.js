import React, { Component } from 'react';

// Components
import W1 from './W1';
import W2 from './W2';
import W3 from './W3';
import W4 from './W4';
import W5 from './W5';
import W6 from './W6';

export default class Work extends Component {

    componentDidMount() {
        this.props.scrollToTop();
    }
    
    render() {
        return (
            <div className="workPage">
                <W1 />
                <W2 />
                <W3 />
                <W4 />
                <W5 />
                <W6 />
            </div>
        )
    }
}
