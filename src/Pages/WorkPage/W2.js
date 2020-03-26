import React from 'react'

export default function W2(props) {
    return (
        <div className="w2" ref={props.workRef}>
            <h2 className="w2__heading">Featured Video</h2>
            <div className="w2__line" />
            <p className="w2__paragraph-1">A celebration of the 50th anniversary of the Saturn V rocket</p>

            <iframe
                src="https://player.vimeo.com/video/333626083"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w2__video" title="Featured Video"></iframe>
        </div>
    )
}
