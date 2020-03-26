import React, { Component, createRef } from 'react';

// Components
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';

export default class HomePage extends Component {

    state = {
        demoReelRef: createRef(),
        autoplayToggle: '',
    }

    componentDidMount() {
        this.props.scrollToTop();
    }

    onDemoReelScroll = () => {
        window.scroll({
            top: this.state.demoReelRef.current.offsetTop,
            behavior: 'smooth'
        })

        this.setState({
            ...this.state,
            autoplayToggle: '?autoplay=1'
        })
    }

    render() {
        return (
            <div className="homePage">
                <H1 onDemoReelScroll={this.onDemoReelScroll} />
                <H2 />

                <H3 demoReelRef={this.state.demoReelRef} autoplayToggle={this.state.autoplayToggle} />
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
