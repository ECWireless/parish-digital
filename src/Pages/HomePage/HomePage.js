import React, { Component } from 'react';

// Components
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';

export default class HomePage extends Component {

    render() {
        return (
            <div className="homePage">
                <H1 />
                <H2 />
                <H3 />
                <H4 />
                <H5 />
            </div>
        )
    }
}
