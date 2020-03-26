import React, { Component, createRef } from 'react';

// Components
import G1 from './G1';
import G2 from './G2';
import G3 from './G3';
import G4 from './G4';
import G5 from './G5';

export default class GearPage extends Component {

    state = {
        gearRef: createRef(),
    }

    componentDidMount() {
        this.props.scrollToTop();
    }

    scrollDown = () => {
        window.scroll({
            top: this.state.gearRef.current.offsetTop - 100,
            behavior: 'smooth',
        })
    }
    
    render() {
        return (
            <div className="gearPage">
                <G1 scrollDown={this.scrollDown} />
                <G2 gearRef={this.state.gearRef} />
                <G3 />
                <G4 />
                <div className="g2-4__background" />
                <div className="g2-4__background-overlay" />
                <G5 />
            </div>
        )
    }
}
