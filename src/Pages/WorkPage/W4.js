import React from 'react'

export default function W4() {
    return (
        <div className="w4">
            <h2 className="w4__heading">Commercial Video</h2>
            <div className="w4__line" />
            <p className="w4__paragraph-1">Welcome to the Rangos Giant</p>
            <p className="w4__paragraph-2">Cinema theater</p>

            <iframe
                src="https://player.vimeo.com/video/323869006"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen
                className="w4__video" title="Featured Video"></iframe>
        </div>
    )
}
