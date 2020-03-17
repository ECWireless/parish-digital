import React, { Component } from 'react';

// Components
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';

export default class HomePage extends Component {

    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        return (
            <div className="homePage">
                <H1 />
                <H2 />

                <H3 />
                <div className="h3__background-1" />
                <div className="h3__background-2" />
                <div className="h3__background-3" />

                <div className="homePage__dotted-line homePage__dotted-line--1" />
                <div className="homePage__dotted-line homePage__dotted-line--2" />
                <div className="homePage__dotted-line homePage__dotted-line--3" />
                <div className="homePage__dotted-line homePage__dotted-line--4" />
                <div className="homePage__dotted-line homePage__dotted-line--5" />
                <div className="homePage__dotted-line homePage__dotted-line--6" />
                <div className="homePage__dotted-line homePage__dotted-line--7" />

                <H4 />
            </div>
        )
    }
}
