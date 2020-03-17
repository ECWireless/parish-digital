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

    scrollDown = () => {
        window.scroll({
            top: 700,
            behavior: 'smooth',
        })
    }
    
    render() {
        return (
            <div className="workPage">
                <W1 scrollDown={this.scrollDown} />

                <W2 />
                <W3 />
                <W4 />
                <W5 />
                <div className="w2-5__background" />
                <div className="w2-5__background-overlay" />
                
                <W6 />
            </div>
        )
    }
}
