import React, { Component } from 'react'

// Sections
import ServiceSection1 from './ServiceSection1'
import ServiceSection2 from './ServiceSection2'
import ServiceSection3 from './ServiceSection3'
import ServiceSection4 from './ServiceSection4'
import ServiceModal from './ServiceModal'

export default class ServicePage extends Component {

    componentDidMount() {
        this.props.scrollToTop()
    }

    render() {
        return (
            <div id="service">
                <ServiceModal modal={this.props.modal} onModalToggle={this.props.onModalToggle} />

                <ServiceSection1 onModalToggle={this.props.onModalToggle} />
                    <div id="service__flip-section">
                        <ServiceSection2 />
                        <ServiceSection3 />
                    </div>
                <ServiceSection4 onModalToggle={this.props.onModalToggle} />
            </div>
        )
    }
}
