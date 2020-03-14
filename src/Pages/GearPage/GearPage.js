import React, { Component } from 'react';

// Components
import G1 from './G1';
import G2 from './G2';
import G3 from './G3';
import G4 from './G4';
import G5 from './G5';

export default class GearPage extends Component {
    render() {
        return (
            <div className="gearPage">
                <G1 />
                <G2 />
                <G3 />
                <G4 />
                <div className="g2-4__background" />
                <div className="g2-4__background-overlay" />
                <G5 />
            </div>
        )
    }
}
