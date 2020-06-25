import React from 'react'

export default function Backdrop(props) {
    return (
        <div id={`${props.sidebar ? 'backdrop__true' : 'backdrop__false'}`} onClick={props.setSidebar.bind(this, !props.sidebar)} />
    )
}
