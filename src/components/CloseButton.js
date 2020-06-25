import React from 'react'

// SVGs
import { ReactComponent as Close } from '../assets/navigation/cross.svg';

const CloseButton = (props) => {
    return (
        <button
            className="close-button"
            onClick={props.close}
        >
            <Close className="close-button__icon--white"/>
        </button>
    )
}

export default CloseButton
