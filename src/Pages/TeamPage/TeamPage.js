import React, { Component } from 'react';

// Components
import T1 from './T1';
import T2 from './T2';

export default class TeamPage extends Component {

    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        return (
            <div className="teamPage">
                <T1 />
                <T2 />
            </div>
        )
    }
}