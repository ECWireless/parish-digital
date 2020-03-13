import React from 'react';
import { ReactComponent as VimeoIcon } from '../../assets/work-page/w6/vimeo.svg'

export default function W6() {
    return (
        <div className="w6">
            <div className="w6__background" />
            <div className="w6__photo" />
            <h2 className="w6__heading">More of our work</h2>
            <div className="w6__line" />
            <p className="w6__paragraph">See more of our projects on Vimeo</p>
            <VimeoIcon className="w6__vimeo-icon" />

            <iframe
                src="https://player.vimeo.com/video/257541956"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w6__video w6__video--1" title="Featured Video">
            </iframe>

            <iframe
                src="https://player.vimeo.com/video/273583603"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w6__video w6__video--2" title="Featured Video">
            </iframe>

            <iframe
                src="https://player.vimeo.com/video/111688091"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w6__video w6__video--3" title="Featured Video">
            </iframe>

        </div>
    )
}
